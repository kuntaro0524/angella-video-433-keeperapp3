import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // ノートの情報はここで一元管理できるようにしてみる
  const [notes, setNotes] = useState([]);

  // 追加ボタンが押されたときの挙動を設定しておく
  const pushAddButton = (e, title, note) => {
    e.preventDefault();
    const currNotes = [...notes];
    currNotes.push({ title, note });
    setNotes(currNotes);
  };

  const deleteItems = (index) => {
    const currArray = [...notes];
    const newArray = currArray.filter((eachNote, filter_index) => {
      return index !== filter_index;
    });
    setNotes(newArray);
  };

  return (
    <div>
      <Header />
      <CreateArea pushAdd={pushAddButton} />
      {notes.map((eachnote, index) => {
        return (
          <Note
            key={eachnote.title}
            id={index}
            title={eachnote.title}
            content={eachnote.note}
            deleteItems={deleteItems}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
