import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function NewProject({ onAddNewProject, onCancelNewProject }) {
  const titleInput = useRef();
  const descInput = useRef();
  const dateInput = useRef();

  const modal = useRef();

  function handleSaveInput() {
    const data = {
      title: titleInput.current.value,
      description: descInput.current.value,
      dueDate: dateInput.current.value,
    };

    // Validate data...
    if (
      data.title.trim() === "" ||
      data.description.trim() === "" ||
      data.dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddNewProject(data);
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Invalid Input!
        </h2>
        <p className="text-stone-600 mt-4">
          Oops... Looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mt-4">Please provide a valid value</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            onClick={onCancelNewProject}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveInput}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </menu>
        <div className="">
          <Input
            type="text"
            ref={titleInput}
            label={"Title"}
            classes="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
          <Input
            ref={descInput}
            label={"Description"}
            classes="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            textarea
          />
          <Input
            type="date"
            ref={dateInput}
            label={"Due Date"}
            classes="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </div>
      </div>
    </>
  );
}
