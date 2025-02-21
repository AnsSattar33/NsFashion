import { useContext } from "react";
import {
  SliderImages,
  SliderPagination,
} from "../../../../components/Home/slider";
import { landingPageContext } from "../../context/LandingPageContext";


type SliderKeys = "jeans" | "shirts" | "leather_jackets" | "sweaters";

const Slider = () => {
  const context = useContext(landingPageContext);

  if (!context) {
    throw new Error("Slider must be used within a LandingPageContextProvider");
  }

  const { state } = context;

  const sliderValues: Record<
    SliderKeys,
    {
      backgroundImage: string;
      imageTitle: string;
      imageSubtitle: string;
      mainImage: string;
    }
  > = {
    jeans: {
      backgroundImage: "/images/jean_background.jpg",
      imageTitle: "Step Into Style,",
      imageSubtitle: "Your Perfect Fit Awaits.",
      mainImage: "/images/jean2.png",
    },
    shirts: {
      backgroundImage: "/images/shirt2_background.jpg",
      imageTitle: "The Perfect Fit,",
      imageSubtitle: "for Every Occasion.",
      mainImage: "/images/shirt.png",
    },
    leather_jackets: {
      backgroundImage: "/images/leather_jacket_background.jpg",
      imageTitle: "Classic Style,",
      imageSubtitle: "Modern Attitude.",
      mainImage: "/images/leather_jacket.png",
    },
    sweaters: {
      backgroundImage: "/images/sweater_background.jpg",
      imageTitle: "Find Your Fit,",
      imageSubtitle: "Find Your Warmth.",
      mainImage: "/images/sweater2.png",
    },
  };

  const currentSlider = sliderValues[state.radioButtonSelected as SliderKeys];
  if (!currentSlider) {
    throw new Error(`Invalid slider key: ${state.radioButtonSelected}`);
  }

  return (
    <div>
      <SliderImages
        backgroundImage={currentSlider.backgroundImage}
        imageTitle={currentSlider.imageTitle}
        imageSubtitle={currentSlider.imageSubtitle}
        mainImage={currentSlider.mainImage}
      />
      <SliderPagination />
    </div>
  );
};

export default Slider;
