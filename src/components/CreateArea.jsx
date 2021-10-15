import React, { useState } from "react";

function CreateArea(props) {
  const { pushAdd } = props;

  const [title, setTitle] = useState();
  const [note, setNote] = useState();

  const inputTitle = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };

  const inputNote = (e) => {
    // console.log(e.target.value);
    setNote(e.target.value);
  };

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={inputTitle} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={inputNote}
        />
        <button onClick={(e) => pushAdd(e, title, note)}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
