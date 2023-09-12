"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = (elem) => {
    // Prevents page from reloading(form submitting) so that data is retained
    elem.preventDefault();
    console.log(title);
    console.log(desc);
    setTasks([...tasks, { title, desc }]);
    console.log(tasks);
    // reset the form
    setTitle("");
    setDesc("");
  };

  let renderTask = <h2>No tasks available.</h2>;
  if (tasks.length > 0) {
    renderTask = tasks.map((t, i) => {
      return (
        <li>
          <div className="flex justify-between mb-5">
            <h5 className="text-xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl">Todo List</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl m-10 px-4 py-3 border-zinc-800 border-2"
          placeholder="Enter Task"
          value={title}
          onChange={(elem) => {
            setTitle(elem.target.value);
            // console.log(title)
          }}
        />
        <input
          type="text"
          className="text-2xl m-10 px-4 py-3 border-zinc-800 border-2"
          placeholder="Enter Description"
          value={desc}
          onChange={(elem) => {
            setDesc(elem.target.value);
            // console.log(desc)
          }}
        />
        <button className="bg-black text-white border-2 m-5 px-4 py-3 text-2xl border-zinc-800 rounded">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-300">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
