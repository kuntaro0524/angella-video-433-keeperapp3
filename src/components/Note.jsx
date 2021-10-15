import React from "react";

// key={eachnote.title}
// id={index}
// title={eachnote.title}
// content={eachnote.note}
// deleteItems={deleteItems}

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.deleteItems(props.id)}>DELETE</button>
    </div>
  );
}

export default Note;
