import React, { useState } from "react";
import Happy from "./happy.png"; // Replace with your image paths
import Like from "./like.png";
import Sad from "./sad.png";

function DynamicEmoji() {
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    setInputText(event.target.value);
    if (event.target.value.toLowerCase() === "happy") {
      setImage(Happy);
    } else if (event.target.value.toLowerCase() === "like") {
      setImage(Like);
    } else if (event.target.value.toLowerCase() === "sad") {
      setImage(Sad);
    } else {
      setImage(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Type happy, like, or sad"
      />
      <div>
        {image ? <img src={image} alt={inputText} /> : <p>No image found</p>}
      </div>
    </div>
  );
}

export default DynamicEmoji;
