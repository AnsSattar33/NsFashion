import { MdOutlineArrowForwardIos } from "react-icons/md";
import LazyImage from "../../../shared/LazyImage";

type Props = {
  backgroundImage: string;
  imageTitle: string;
  imageSubtitle: string;
  mainImage: string;
};

const SliderImages = ({
  backgroundImage = "/images/jeans2_background.jpg",
  imageTitle = "Step Into Style",
  imageSubtitle = "Your Perfect Fit Awaits.",
  mainImage = "/images/jean2.png",
}: Props) => {

  return (
    <div className="relative h-[600px]">
      <div
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
        className="absolute inset-0 bg-cover bg-center opacity-20"
      ></div>
      <div className="relative flex items-center justify-around h-full">
        <div className="self-center flex flex-col space-y-10 items-bottom">
          <div>
            <h1 className="text-8xl/relaxed font-bold uppercase text-red-400">
              {/* Step Into Style */}
              {imageTitle}
            </h1>
            <h2 className="text-5xl font-semibold uppercase text-red-400">
              {/* Your Perfect Fit Awaits. */}
              {imageSubtitle}
            </h2>
          </div>
          <div>
            <button className="absolute hover:text-white hover:bg-red-400 border border-red-black text-black px-5 py-2 rounded-lg text-5xl uppercase cursor-pointer flex space-x-8 items-center justify-between">
              <p>Shop Now</p>
              <div>
                <MdOutlineArrowForwardIos />
              </div>
            </button>
          </div>
        </div>
        <div>
          <LazyImage src={mainImage} className="w-96 opacity-100" alt="jean" />
        </div>
      </div>
    </div>
  );
};

export default SliderImages;
