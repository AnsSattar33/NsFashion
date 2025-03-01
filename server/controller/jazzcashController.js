import axios from "axios";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const jazzcashPayment = async (req, res) => {
    try {
        if (!req.body.amount || !req.body.cardCVV || !req.body.cardExpiry || !req.body.cardNumber) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const merchantId = process.env.JAZZCASH_MERCHANT_ID;
        const password = process.env.JAZZCASH_PASSWORD;
        const integritySalt = process.env.JAZZCASH_INTEGERITY_SALT;

        if (!merchantId || !password || !integritySalt) {
            return res.status(500).json({ error: "Missing JazzCash credentials in .env" });
        }

        // Generate Transaction Details
        const txnRefNo = `T${Date.now()}`;
        const txnDateTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" }).replace(/[-:T.Z\s]/g, "").slice(0, 14);
        const txnExpiryDateTime = new Date(Date.now() + 10 * 60000).toLocaleString("en-US", { timeZone: "Asia/Karachi" }).replace(/[-:T.Z\s]/g, "").slice(0, 14); // Expires in 10 minutes

        // Request Data (DO NOT include pp_SecureHash in sorting or hashing)
        const requestData = {
            pp_3DSecureChallengeWindowSize: "FULL_SCREEN",
            pp_AcceptHeaders: "application/json",
            pp_Amount: req.body.amount * 100,
            pp_BillReference: "billRef",
            pp_Browser: "MOZILLA",
            pp_ColorDepth: "24",
            pp_CustomerCardCvv: req.body.cardCVV,
            pp_CustomerCardExpiry: req.body.cardExpiry,
            pp_CustomerCardNumber: req.body.cardNumber,
            pp_Description: "Test Transaction",
            pp_JavaEnabled: true,
            pp_Language: "en-US",
            pp_MerchantID: merchantId,
            pp_Password: password,
            pp_ReturnURL: "https://sandbox.jazzcash.com.pk/ApplicationAPI/API/Purchase/AuthenticatePayer",
            pp_ScreenHeight: "640",
            pp_ScreenWidth: "480",
            pp_SecureHash: "", // Include pp_SecureHash in the requestData
            pp_TimeZone: "300",
            pp_TxnCurrency: "PKR",
            pp_TxnDateTime: txnDateTime,
            pp_TxnExpiryDateTime: txnExpiryDateTime,
            pp_TxnRefNo: txnRefNo,
            pp_TxnType: "MPAY",
            pp_UsageMode: "API",
            pp_Version: "1.1"
        };

        // Step 1: Arrange Keys in Alphabetical Order (Excluding pp_SecureHash)
        const sortedKeys = Object.keys(requestData).filter(key => key !== "pp_SecureHash").sort();

        // Step 2: Construct Hash String
        let hashString = sortedKeys.map(key => `${key}=${requestData[key]}`).join("&");

        // Step 3: Append Integrity Salt
        hashString += `&${integritySalt.trim()}`;

        // Step 4: Generate Secure Hash
        const secureHash = crypto.createHash("sha256").update(hashString, 'utf-8').digest("hex").toUpperCase();

        // Step 5: Assign Secure Hash
        requestData.pp_SecureHash = secureHash;

        console.log("requestData:", requestData, ' secureHash = ', secureHash, " hashString = ", hashString); // Debugging

        // Send request to JazzCash API
        const response = await axios.post(
            "https://sandbox.jazzcash.com.pk/ApplicationAPI/API/Purchase/AuthenticatePayer",
            requestData,
            { headers: { "Content-Type": "application/json" } }
        );

        res.json(response.data);
    } catch (error) {
        console.error("Error processing payment:", error);
        if (error.response) {
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
            console.error("Response headers:", error.response.headers);
        } else if (error.request) {
            console.error("Request data:", error.request);
        } else {
            console.error("Error message:", error.message);
        }
        res.status(500).json({ error: "Payment failed" });
    }
};
