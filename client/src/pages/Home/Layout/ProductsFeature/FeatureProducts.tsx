import { Card } from "../../../../components";
import DetailedCard from "../../../../components/Home/productsFeature/DetailedCard";
import { useContext } from "react";
import { landingPageContext } from "../../context/LandingPageContext";

const FeatureProducts = () => {
  const context = useContext(landingPageContext);
  if (!context) {
    throw new Error("FeatureProducts must be used within a LandingPageContextProvider");
  }
  const showProducts = [
    {
      id: 1,
      title: "keilvin Jean",
      description: "Hello Pakistan i am here to sell ehheeh",
      tags: ["jean", "best jean", "keilvin jean"],
      quantity: 0,
      price: 1200,
      image: "/images/jean2.png",
    },
    {
      id: 2,
      title: "Jango Shirt",
      description: "Hello Pakistan i am here to sell ehheeh",
      tags: ["jean", "best jean", "keilvin jean"],
      quantity: 0,
      price: 2400,
      image: "/images/shirt.png",
    },
    {
      id: 3,
      title: "Mango Jacket",
      description: "Hello Pakistan i am here to sell ehheeh",
      tags: ["jean", "best jean", "keilvin jean"],
      quantity: 0,
      price: 2400,
      image: "/images/leather_jacket.png",
    },
    {
      id: 4,
      title: "Shanto Sweater",
      description: "Hello Pakistan i am here to sell ehheeh",
      tags: ["jean", "best jean", "keilvin jean"],
      quantity: 0,
      price: 1700,
      image: "/images/sweater2.png",
    },
    {
      id: 5,
      title: "Shapater Jean",
      description: "Hello Pakistan i am here to sell ehheeh",
      tags: ["jean", "best jean", "keilvin jean"],
      quantity: 0,
      price: 1100,
      image: "/images/jeanPng.jpeg",
    },
    {
      id: 3,
      title: "Mango Jacket",
      description: "Hello Pakistan i am here to sell ehheeh",
      tags: ["jean", "best jean", "keilvin jean"],
      quantity: 0,
      price: 2400,
      image: "/images/leather_jacket.png",
    },
    {
      id: 4,
      title: "Shanto Sweater",
      description: "Hello Pakistan i am here to sell ehheeh",
      tags: ["jean", "best jean", "keilvin jean"],
      quantity: 0,
      price: 1700,
      image: "/images/sweater2.png",
    },
    {
      id: 5,
      title: "Shapater Jean",
      description: "Hello Pakistan i am here to sell ehheeh",
      tags: ["jean", "best jean", "keilvin jean"],
      quantity: 0,
      price: 1100,
      image: "/images/jeanPng.jpeg",
    }
  ]

  return <div className="">
    <h1 className="h1 py-10 uppercase">Feature Products</h1>
    <div className="container mx-auto flex flex-wrap justify-between">
      {showProducts.map(product => (
        <Card
          key={product.id}
          cardId={product.id}
          cardImage={product.image}
          cardDescription={product.description}
          cardTitle={product.title}
          cardTags={product.tags}
          productQuantity={product.quantity}
          productPrice={product.price}
        />
      ))}
    </div>
    <div className="bg-gray-200">
      <DetailedCard />
    </div>
  </div>;
};

export default FeatureProducts;
