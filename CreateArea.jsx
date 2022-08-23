import React, { useState } from "react";

function CreateArea(props) {

  const [blog, setBlog] = useState({
    title: "",
    content: ""
  });


  // const[items,setItems] = useState([]);

  function handleChange(event) {
    //  var name = event.target.name;
    //  var newValue = event.target.value;

    const { name, value } = event.target

    setBlog(prevValue => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content
        }
      }
      else if (name === "content") {
        return {
          title: prevValue.title,
          content: value
        }
      }
    })
  }
  function addItem(event) {

    props.onAdd(blog);
    setBlog(
      {
        title: "",
        content: ""
      }
    );
    event.preventDefault();
  }

  return (
    <div>
      <form  >
        <input name="title" placeholder="Title" onChange={handleChange} value={blog.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={blog.content} />
        <button onClick={addItem} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
