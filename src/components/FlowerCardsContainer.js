import React, { useState, useEffect } from "react";
import FlowerCards from "./FlowerCards";
import AddedToCart from "./AddedToCart";

function FlowerCardsContainer(props) {
  const flatDetails = props.containers.filter(
    (container) => container.container.name === "flat"
  );
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [variety, setVariety] = useState("");
  const [price, setPrice] = useState("");
  const flowerInfo = {
    image,
    name,
    variety,
    price,
  };
  function toggleModal() {
    setOpen(!open);
  }
  function updateState(image, name, variety, price) {
    setImage(image);
    setName(name);
    setVariety(variety);
    setPrice(price);
  }
  return (
    <div>
      <FlowerCards
        flowers={props.flats}
        price={flatDetails[0].price}
        containerDescription={flatDetails[0].container.description}
        flowerInfo={flowerInfo}
        updateState={updateState}
        toggleModal={() => toggleModal()}
      />
      <AddedToCart
        open={open}
        toggleModal={() => toggleModal()}
        quantity={1}
        image={image}
        name={name}
        variety={variety}
        price={price}
      />
    </div>
  );
}
export default FlowerCardsContainer;