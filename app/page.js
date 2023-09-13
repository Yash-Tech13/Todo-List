"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [done, setDone] = useState(false);
  const [tasks, setTasks] = useState([]);

  const submitHandler = (elem) => {
    // Prevents page from reloading(form submitting) so that data is retained
    elem.preventDefault();
    // console.log(title);
    // console.log(desc);
    setTasks([...tasks, { title, desc, done }]);
    // console.log(tasks);
    // reset the form
    setTitle("");
    setDesc("");
    setDone(false);
  };

  const deleteHandler = (i) => {
    let copy = [...tasks];
    copy.splice(i, 1);
    setTasks(copy);
  };

  let renderTask = <h2>No tasks available.</h2>;
  if (tasks.length > 0) {
    renderTask = tasks.map((t, i) => {
      return (
        <div className="m-3" key={i}>
          <div className="w-60 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 p-4 gap-4 rounded-lg shadow-md">
            <div className="col-span-2 text-lg font-bold capitalize rounded-md">
              {t.title}
            </div>
            <div className="col-span-2 rounded-md">{t.desc}</div>
            <div className="col-span-1">
              <button
                onClick={() => deleteHandler(i)}
                className="rounded-md bg-red-300 hover:bg-red-600 duration-300 p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
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
      <div className="p-8 flex">{renderTask}</div>
    </>
  );
};

export default page;
