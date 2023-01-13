import React from "react";

function CategoryFilter({categories, updateCategory}) {

  function toggleSelection(event) {
    const buttons = Array.from(document.querySelectorAll(".buttons"))
    buttons.forEach(button => {
      button.classList.remove("selected");
      });

      event.target.classList.add("selected");
      const category = event.target.textContent
      updateCategory(category);
    }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        categories.map((category, index) => {
          return (<button className="buttons" onClick={toggleSelection} key={category+index}>{category}</button>)
        })
      }
    </div>
  );
}

export default CategoryFilter;
