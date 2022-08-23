import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";






function App() {
  const [noteItems, setNoteItem] = useState([]);
  function addNote(newNote) {
     
    setNoteItem(preItem =>{
      return [...preItem,newNote];
    });
   
}
function deletItem(id)
{
  console.log("delet is trigger");
  setNoteItem(preItem =>{
    return preItem.filter((item,index) =>{
      return index !== id;
    });
  });
}
  // {items.map((todoItem, index) => (
  //   <ToDoItem
  //     key={index}
  //     id={index}
  //     text={todoItem}
  //     onChecked={deleteItem}
  //   />
  // ))}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      
   
       {noteItems.map((item,index) =>(
              <Note key={index} title={item.title} content={item.content} delet = {deletItem} id={index} />
       ))}
      <Footer />
    </div>
  );
}

export default App;
