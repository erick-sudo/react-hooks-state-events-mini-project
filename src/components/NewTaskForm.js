import React from "react";

function NewTaskForm({categories}) {
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {
            categories.map(category => {
              return (<option key={category} value={category}>{category}</option>)
            })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
