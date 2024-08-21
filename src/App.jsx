import FormInput from "./Components/FormInput";
import Items from "./Components/Items";
function App() {

  return (
    <div className="w-fullscreen min-h-screen bg-sky-700 flex justify-center items-center p-10">
      <div className=" bg-slate-100 flex-col p-5 rounded-xl flex gap-5">
        <h1 className=" flex justify-center  text-4xl">ToDo List</h1>
        <FormInput />
        <Items />
      </div>
    </div>
  );
}

export default App;
