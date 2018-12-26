import React from "react";

function MainContent() {
  return (
    <main class="main-section">
      <label htmlFor="item1">item1</label>
      <input type="checkbox" name="todo" id="item1" />
      <label htmlFor="item2">item2</label>
      <input type="checkbox" name="todo" id="item2" />
      <label htmlFor="item3">item3</label>
      <input type="checkbox" name="todo" id="item3" />
      <label htmlFor="item4">item4</label>
      <input type="checkbox" name="todo" id="item4" />
    </main>
  );
}
export default MainContent;
