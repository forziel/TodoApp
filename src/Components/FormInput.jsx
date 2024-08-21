import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Slicers/todoSlice";

const FormInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const todoHandler = (e) => {
    e.preventDefault();
    setValue("");
    value.length > 0
      ? dispatch(
          addTodo({
            id: Math.random() * 1000,
            mission: value,
          })
        )
      : alert("lütfen bir şeyler giriniz");
  };

  return (
    <form
      onSubmit={todoHandler}
      className="flex justify-center items-center gap-1"
    >
      <input
        type="text"
        placeholder="Add your items"
        className="px-9 py-5 bg-slate-200 rounded-2xl outline-none"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="p-3 bg-green-800 rounded-full w-16 ">
        <img src="../../svgs/add-plus-svgrepo-com.svg" />
      </button>
    </form>
  );
};

export default FormInput;
