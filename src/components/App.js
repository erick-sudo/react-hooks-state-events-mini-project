import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [category, setCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS);

  // setTasks([...tasks, newTask])

  const tasksToDisplay = tasks.filter(task => {
    if(category === "All") { 
      return true;
    } else {
      return task.category === category
    }
  });
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter updateCategory={setCategory} categories={CATEGORIES} />
      <NewTaskForm addTask={setTasks} categories={CATEGORIES}/>
      <TaskList tasks={tasksToDisplay} />
    </div>
  );
}

export default App;
