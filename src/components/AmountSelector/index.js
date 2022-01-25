import React, { useState } from "react";
import { Span, Minus, Plus } from "./AmountSelectorElements";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";

const AmountSelector = () => {
  const [amount, setAmount] = useState(0);
  const onMinus = () => {
    if (amount === 0) {
      return;
    } else {
      setAmount(amount - 1);
    }
  };
  const onPlus = () => {
    setAmount(amount + 1);
  };
  return (
    <Span>
      <Minus src={minus} onClick={onMinus} />
      {amount}
      <Plus src={plus} onClick={onPlus} />
    </Span>
  );
};

export default AmountSelector;
