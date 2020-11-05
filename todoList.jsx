import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "../src/styles.css";
import ListComp from "./listComp";

const TodoList = () => {
  const [item, setItem] = useState("");
  const [list, updateList] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const addToList = () => {
    updateList((prevValues) => {
      return [...prevValues, item];
    });
    setItem("");
  };

  const toCut = (event) => {};

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <span>
            <input
              type="text"
              placeholder="Add Item"
              className="inputField"
              onChange={itemEvent}
              value={item}
            />
            <Button className="newBtn" onClick={addToList}>
              <AddIcon />
            </Button>
          </span>

          <ul onClick={toCut}>
            {list.map((val, index) => {
              return <ListComp value={val} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;
