import { useDispatch } from "react-redux"
import { deleteAll } from "../Slicers/todoSlice";

const DeleteAll = () => {
   const dispatch = useDispatch();
   const deleteHandler = (e)=>{
      e.preventDefault();
      dispatch(deleteAll())
   }
  return (
    <button onClick={deleteHandler} className="p-3 bg-red-600 text-gray-300 tracking-widest rounded-lg min-w-24">
      DeleteAll
    </button>
  )
}

export default DeleteAll
