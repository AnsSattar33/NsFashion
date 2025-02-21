import React, { useContext } from "react";
import { landingPageContext } from "../../../pages/Home/context/LandingPageContext";

type Props = {};

const SliderPagination = (props: Props) => {
  const [slider, setSlider] = React.useState("jeans");
  const context = useContext(landingPageContext);

  if (!context) {
    throw new Error(
      "SliderPagination must be used within a LandingPageContextProvider"
    );
  }

  const { state, dispatch } = context;

  return (
    <div className="">
      <hr className="text-gray-400" />
      <div className="flex justify-center items-center my-5">
        <input
          type="radio"
          name="jeans"
          value={"jeans"}
          checked={slider === "jeans"}
          onChange={() => setSlider("jeans")}
          onClick={() => dispatch({ type: 'SET_RADIO_BUTTON', payload: 'jeans' })}
          className="w-7 h-7 cursor-pointer border border-black rounded-full mx-2"
        />
        <input
          type="radio"
          name="shirts"
          value={"shirts"}
          checked={slider === "shirts"}
          onChange={() => setSlider("shirts")}
          onClick={() => dispatch({ type: 'SET_RADIO_BUTTON', payload: 'shirts' })}
          className="w-7 h-7 cursor-pointer border border-black rounded-full mx-2"
        />
        <input
          type="radio"
          name="leather_jackets"
          value={"leather_jackets"}
          checked={slider === "leather_jackets"}
          onChange={() => setSlider("leather_jackets")}
          onClick={() => dispatch({ type: 'SET_RADIO_BUTTON', payload: 'leather_jackets' })}
          className="w-7 h-7 cursor-pointer border border-black rounded-full mx-2"
        />
        <input
          type="radio"
          name="sweaters"
          value={"sweaters"}
          checked={slider === "sweaters"}
          onChange={() => setSlider("sweaters")}
          onClick={() => dispatch({ type: 'SET_RADIO_BUTTON', payload: 'sweaters' })}
          className="w-7 h-7 cursor-pointer border border-black rounded-full mx-2"
        />
      </div>
      <hr className=" text-gray-400" />
    </div>
  );
};

export default SliderPagination;
