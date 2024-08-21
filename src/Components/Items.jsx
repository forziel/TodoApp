import { useSelector } from "react-redux";
import "../../svgs/garbage-svgrepo-com.svg";
import "../../svgs/pen-line-svgrepo-com.svg";
import Item from "./Item";
import DeleteAll from "./DeleteAll";

const Items = () => {
  const { todo } = useSelector((state) => state.todo);
  return (
    <ul className="flex flex-col gap-5">
      {todo.length>0 ? <DeleteAll/>: <></>}
      {
      todo.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default Items;
