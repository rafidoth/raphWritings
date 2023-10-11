import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-amber-400 flex justify-center">
        <h1 className="text-3xl m-4 ">Hello world {count}</h1>
      </div>
      <div className="flex gap-2 text-white">
        <button
          className="bg-blue-700 hover:bg-blue-900 py-2 px-4 rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-blue-700 hover:bg-blue-900  py-2 px-4 rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default Counter;
