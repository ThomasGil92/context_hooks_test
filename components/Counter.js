import { useContext } from "react";
import { store } from "../store.js";

const Counter = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_ONE" });
  };

  return (
    <>
      <button type="button" className="btn btn-warning" onClick={handleClick}>
        +1
      </button>
      <h1 className="text-white mt-5">State : {globalState.state}</h1>
    </>
  );
};

export default Counter;
