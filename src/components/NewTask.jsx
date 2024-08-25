import React from "react";

const NewTask = ({ label }) => {
  return (
    <p className="flex items-center gap-4">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button className="text-stone-700 hover:text-stone-950">Add task</button>
    </p>
  );
};

export default NewTask;
