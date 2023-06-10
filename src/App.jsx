import { useState } from "react";
import "./App.css";
import Die from "./Die";
import Dice from "./Dice";
import LuckyN from "./LuckyN";
import { sum } from "./utils";

function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}
function App() {
  return (
    <>
      <LuckyN winCheck={lessThan4} />
      <LuckyN winCheck={allSameValue} />
    </>
  );
}

export default App;
