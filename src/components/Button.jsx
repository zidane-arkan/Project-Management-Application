import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      className="px-6 py-2 rounded-md bg-stone-700 text-stone-200 hover:bg-stone-950"
      {...props}
    >
      {children}
    </button>
  );
}
