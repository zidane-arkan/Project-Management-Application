import React, { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");
  function handleEnteredTask(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      alert("Please add text in input field!");
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <p className="flex items-center gap-4">
      <input
        onChange={handleEnteredTask}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add task
      </button>
    </p>
  );
};

export default NewTask;
