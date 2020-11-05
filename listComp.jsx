import React, { useState } from "react";

const ListComp = (props) => {
  const { value } = props;
  const [line, setLine] = useState(false);

  const karoCut = () => {
    setLine(!line);
  };

  return (
    <li
      style={{ textDecoration: line ? "line-through" : "none" }}
      onClick={karoCut}
    >
      {value}
    </li>
  );
};

export default ListComp;
