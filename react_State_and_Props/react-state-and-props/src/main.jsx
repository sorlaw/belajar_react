import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const FavoriteColor = () => {
  const [color, setColor] = useState("");

  const changeFavColor = (y) => setColor(y.target.value);
  return (
    <div>
      <h1 className="text-3xl text-center">My Favorite color is {!color ? "red" : color}!</h1>
      <input type="text" id="txt2" placeholder="ketik warna favorit anda" onChange={changeFavColor} className="m-5" />
    </div>
  );
};

const MyTxt = () => {
  const [txt, setTxt] = useState("");

  const changeTxtVal = (e) => setTxt(e.target.value);
  return (
    <div>
      <h5>{txt}</h5>
      <input type="text" id="txt" placeholder="isi tulisan" className="m-10" onChange={changeTxtVal} />
    </div>
  );
};

const Car = (props) => {
  return <h2>I am a {props.brand}!</h2>;
};

const element = <Car brand="brio"></Car>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("secroot")).render(
  // <React.StrictMode>
  //   <FavoriteColor />
  //   <MyTxt />
  // </React.StrictMode>
  element
);
