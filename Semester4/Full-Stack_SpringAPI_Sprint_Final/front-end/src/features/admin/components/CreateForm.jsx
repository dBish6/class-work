import { useState } from "react";

// *API Services Imports*
import PostProduct from "../api_services/PostProduct";

const CreateForm = () => {
  const [createSword, setCreateSword] = useState({
    name: "",
    type: "",
    length: "",
    mass: "",
    price: "",
    description: "",
    image_url: "",
  });

  const POST = PostProduct();

  const handleName = (e) => {
    let updatedValue = { name: e.target.value };
    setCreateSword((prevData) => ({
      ...prevData,
      ...updatedValue,
    }));
  };

  const handleType = (e) => {
    let updatedValue = { type: e.target.value };
    setCreateSword((prevData) => ({
      ...prevData,
      ...updatedValue,
    }));
  };

  const handleLength = (e) => {
    let updatedValue = { length: e.target.value };
    setCreateSword((prevData) => ({
      ...prevData,
      ...updatedValue,
    }));
  };

  const handleMass = (e) => {
    let updatedValue = { mass: e.target.value };
    setCreateSword((prevData) => ({
      ...prevData,
      ...updatedValue,
    }));
  };

  const handlePrice = (e) => {
    let updatedValue = { price: e.target.value };
    setCreateSword((prevData) => ({
      ...prevData,
      ...updatedValue,
    }));
  };

  const handleDescription = (e) => {
    let updatedValue = { description: e.target.value };
    setCreateSword((prevData) => ({
      ...prevData,
      ...updatedValue,
    }));
  };

  const handleImageUrl = (e) => {
    let updatedValue = { image_url: e.target.value };
    setCreateSword((prevData) => ({
      ...prevData,
      ...updatedValue,
    }));
  };

  return (
    <>
      <h4>headers: application/json</h4>
      <br />
      <p>"sword": &#123;</p>
      <div>
        <div>
          <label htmlFor="name">"name":</label>{" "}
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={(e) => handleName(e)}
          />
        </div>
        <div>
          <label htmlFor="type">"type":</label>{" "}
          <input
            name="type"
            type="text"
            placeholder="Type"
            onChange={(e) => handleType(e)}
          />
        </div>
        <div>
          <label htmlFor="length">"length":</label>{" "}
          <input
            name="length"
            type="text"
            placeholder="Length (Num)"
            onChange={(e) => handleLength(e)}
          />
        </div>
        <div>
          <label htmlFor="mass">"mass":</label>{" "}
          <input
            name="mass"
            type="text"
            placeholder="Mass (Num)"
            onChange={(e) => handleMass(e)}
          />
        </div>
        <div>
          <label htmlFor="price">"price":</label>{" "}
          <input
            name="price"
            type="text"
            placeholder="Price (Num)"
            onChange={(e) => handlePrice(e)}
          />
        </div>
        <div>
          <label htmlFor="description">"description":</label>{" "}
          <textarea
            name="description"
            cols="20"
            rows="1"
            onChange={(e) => handleDescription(e)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="image_url">"image_url":</label>{" "}
          <input
            name="image_url"
            type="image_url"
            placeholder="Image Url (https)"
            onChange={(e) => handleImageUrl(e)}
          />
        </div>
        <p>&#125;</p>
        <button
          type="submit"
          disabled={
            createSword.name === "" ||
            createSword.type === "" ||
            createSword.length === 0 ||
            createSword.mass === 0 ||
            createSword.price === 0 ||
            createSword.description === "" ||
            createSword.image_url === ""
              ? true
              : false
          }
          onClick={() =>
            POST(
              createSword.name,
              createSword.type,
              createSword.length,
              createSword.mass,
              createSword.price,
              createSword.description,
              createSword.image_url
            )
          }
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default CreateForm;
