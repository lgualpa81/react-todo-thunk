import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData } from "./actions";

function App() {
  //use the useDispatch hook to dispatch actions
  const dispatch = useDispatch();
  // Selects the state value from the store.
  // the useSelector hook to access data in the store
  const todo = useSelector((state) => state.data.todo);

  // Dispatches action to add the data
  const handleData = () => dispatch(addData());
  // Dispatches action to delete the data.
  const handleDeleteData = () => dispatch(deleteData());
  return (
    <div>
      <button onClick={handleData}>Add data</button>
      <button onClick={handleDeleteData}>Delete data</button>

      {todo && <div>{JSON.stringify(todo)}</div>}
    </div>
  );
}

export default App;
