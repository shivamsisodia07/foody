import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

/*
        *Food app*

        header
            -logo
            -nav-items =home ,contact us,cart
        body
            -search bar
            - food cards =img,title,content,distance,rating
        footer
            -logo
            -copyrights

*/
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src='https://media.istockphoto.com/id/1038356020/vector/restaurant-icon.jpg?s=612x612&w=0&k=20&c=Tk_v3JuJA4lz_8ZRJi78xS4p75Idqt97uEtYJciVtFI= ' alt='logo'></img>
      <ul className="nav-items">
        <li>Home</li>
        <li>contact us</li>
        <li>cart</li>
      </ul>
    </div>
  );
};

const Applayout = () => {
  return <Header></Header>;
};

root.render(<Applayout></Applayout>);
