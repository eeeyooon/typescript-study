import React from "react";
import { Address, Restaurant } from "../model/restaurant";

// interface로 props 타입 지정
interface OwnProps {
  info: Restaurant;
  changeAddress(address: Address): void;
  //return type이 없을 땐 void
}

// props의 타입도 지정해주어야 함. -> 함수의 경우 매개 변수도 타입 지정해야 함.
const Store: React.FC<OwnProps> = ({ info }) => {
  return <div>{info.name}</div>;
};

export default Store;
