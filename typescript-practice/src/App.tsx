import React, { useState } from "react";
import "./App.css";
import Store from "./components/Store";
import { Address, Restaurant } from "./model/restaurant";
import BestMenu from "./components/BestMenu";

// 레스토랑 정보 보여주기

let data: Restaurant = {
  name: "리액트 레스토랑",
  category: "western",
  address: {
    city: "jeju",
    detail: "somewhere",
    zipCode: 2345674,
  },
  menu: [
    { name: "rose pasta", price: 8000, category: "PASTA" },
    { name: "garlic steak", price: 12000, category: "STEAK" },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);

  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };

  const showBestMenuName = (name: string) => {
    return name;
  };

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu
        name="페퍼로니 피자"
        category="피자"
        showBestMenuName={showBestMenuName}
      />
    </div>
  );
};

export default App;
