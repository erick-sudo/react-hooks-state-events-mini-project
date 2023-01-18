import React from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  // function onTaskFormSubmit(e) {
  //   e.preventDefault();
  //   //

  //   alert(e.target.text.value)

  //   // onTaskFormSubmit({
  //   //   text: e.target.text.value,
  //   //   category: e.target.category.value
  //   // });

  //   // e.target.reset()
  //}

  return (
    <form className="new-task-form" onSubmit={(e) => {
      onTaskFormSubmit({
        text: document.getElementById("text").value,
        category: document.getElementById("category").value
      });
    }} >
      <label>
        Details
        <input id="text" type="text" name="details" required/>
      </label>
      <label>
        Category
        <select id="category" name="category">
          {
            categories.map(category=>Boolean(category==='All')? null : <option key={category}>{category}</option>)
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
