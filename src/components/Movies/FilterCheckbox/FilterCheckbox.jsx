import "./FilterCheckbox.css";
import React, { useState } from "react";

export default function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox">
      <div
        className={`checkbox__click ${
          isChecked ? "checkbox__click_active" : ""
        }`}
        onClick={handleClick}
      >
        <span className="checkbox__tumb"></span>
      </div>
      <p className="checkbox__subtitle">Короткометражки</p>
    </div>
  );
}
