import { useState } from "react";
import { deleteTodo } from "../Slicers/todoSlice";
import { useDispatch } from "react-redux";
const Item = ({ item }) => {
  //delete button
  const dispatch = useDispatch()
  const deleteHandler = () => {
    dispatch(deleteTodo(item.id));
  };
  // Line through için
  const [done, setDone] = useState("");
  const line = (e) => {
    e.preventDefault();
    setDone(done == "" ? "line-through" : "");
  };

  return (
    <li className={`bg-blue-300 flex justify-between p-2 rounded-lg `}>
      <span onClick={line}  className={`${done} cursor-pointer`}>{item.mission}</span>
      <div className="icons flex gap-1 ">
        <button onClick={deleteHandler}>
          <img
            src="../../svgs/garbage-svgrepo-com.svg "
            className="w-6 cursor-pointer"
          />
        </button>
        <button onClick={line}>
          <img
            src="../../svgs/pen-line-svgrepo-com.svg"
            className="w-5 cursor-pointer "
          />
        </button>
      </div>
    </li>
  );
};

export default Item;
