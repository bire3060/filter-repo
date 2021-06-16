import React, { useState,useEffect } from "react";

import "./style.css";

import BtnComponent from "./Components/BtnComponents/BtnComponent";
import { arrContainer } from "./ArrayContainer";
import ItemContainer from "./Components/ItemContainer";
import Header from "./Components/Header";
import SearchBtn from "./Components/SearchComponent/SearchBtn";
import SearchText from "./Components/SearchComponent/SearchText";

function App() {

  const [item, setItems] = useState([]);
  useEffect(() => {
    setItems(arrContainer)

   
  }, [])
  function handleAll() {
    setItems(arrContainer);
  }
  function handleCakes() {
    setItems(item);
    let filterProducts = arrContainer.filter(
      (val) => val.title === "Cake Item"
    );
    setItems(filterProducts);
  }
  function handleCupCakes() {
    setItems(item);
    let filterProducts = arrContainer.filter(
      (val) => val.title === "CupCake Item"
    );
    setItems(filterProducts);
  }
  function handleSweets() {
    setItems(item);
    let filterProducts = arrContainer.filter(
      (val) => val.title === "Sweet Item"
    );
    setItems(filterProducts);
  }
  function handleDonuts() {
    setItems(item);
    let filterProducts = arrContainer.filter(
      (val) => val.title === "Donut Item"
    );
    setItems(filterProducts);
  }
  // for search
  function handleBtnSearch(){
    console.log("item searched")
  }
  function handleTextValue(e){
    let val=e.target;
    let regular=new RegExp(val.value,"i");
    setItems(item);
    let filterProducts=arrContainer.filter(val=>val.title.match(regular))
    setItems(filterProducts);
  }
  

  return (
    <div>
      <Header />
      <div className="searchContainer">
        <SearchBtn searchBtn={handleBtnSearch}/>
        <SearchText textValue={handleTextValue}/>
      </div>

      <div className="itemslist">
        <BtnComponent value="All" All={handleAll} />
        <BtnComponent value="Cupcakes" cupcake={handleCupCakes} />
        <BtnComponent value="Sweets" sweet={handleSweets} />
        <BtnComponent value="Donuts" donut={handleDonuts} />
        <BtnComponent value="Cakes" cake={handleCakes} />
      </div>
      <div className="container">
        <ItemContainer item={item} />
      </div>
    </div>
  );
}

export default App;
