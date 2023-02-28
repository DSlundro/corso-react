import React, { useRef, useState } from "react";

const Form = () => {

   const [product, setProduct] = useState({
     title: "",
     desc: "",
     price: 0,
     category: "",
     tags: [],
     images: {
       sm: "",
       md: "",
       lg: "",
     },
     quantity: 0,
   });

   const handleChange = (e) => {
     setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   const tagRef = useRef();

   const handleTags = () => {
     const tags = tagRef.current.value.split(",");
     tags.forEach((tag) => {
       setProduct((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
     });
   };

   const handleRemoveTag = (tag) => {
     setProduct((prev) => ({
       ...prev,
       tags: prev.tags.filter((t) => t !== tag),
     }));
   };

   const handleIncrease = () => {
     setProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
   };

   const handleDecrease = () => {
       setProduct((prev) => ({
         ...prev,
         quantity: prev.quantity - 1,
       }));
   };

  return (
    
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          placeholder="Desc"
          onChange={handleChange}
          name="desc"
        />
        <input
          type="number"
          placeholder="Price"
          onChange={handleChange}
          name="price"
        />
        <p>Category:</p>
        <select onChange={handleChange} name="category">
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={tagRef}
          placeholder="Seperate tags with commas..."
        ></textarea>
        <button onClick={handleTags} type="button">
          Add Tags
        </button>
        <div className="tags">
          {state.tags.map((tag) => (
            <small
              onClick={() => dispatch({ type: "REMOVE_TAG", payload: tag })}
              key={tag}
            >
              {tag}
            </small>
          ))}
        </div>
        <div className="quantity">
          <button onClick={() => dispatch({ type: "DECREASE" })} type="button">
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button onClick={() => dispatch({ type: "INCREASE" })} type="button">
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
