import React from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  function handleSubmit(e) {
    e.preventDefault();
    //

    onTaskFormSubmit({
      text: e.target.text.value,
      category: e.target.category.value
    });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" required/>
      </label>
      <label>
        Category
        <select name="category">
          {
            categories.map(category =>  {
                if(category === "All") {
                  return null
                } else {
                  return <option key={category}>{category}</option>
                }
            })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
