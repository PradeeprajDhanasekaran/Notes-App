import React, { useState, useEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
const NotePage = ({ match, history }) => {
  let noteId = match.params.id;
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  let [note, setNote] = useState('');

  useEffect(() => {
    getNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteId]);

  let getNote = async () => {
    if (noteId === 'new') return
    let responce = await fetch(`/api/notes/${noteId}/`);
    let data = await responce.json();
    setNote(data);
  };

  let createNote = async () => {
    fetch(`/api/notes/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify(note),
    });
  };

  let updateNote = async () => {
    fetch(`/api/notes/${noteId}/update`, {  
      method: "PUT",
      headers: {
        "content-type": "application/json",
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify(note),
    });
  };

  let deleteNote = async () => {
    fetch(`/api/notes/${noteId}/delete`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
  };

  let handleSubmit = () => {
    if(noteId!== 'new' && !note.body.trim()){
      deleteNote()
    }else if(noteId !== 'new'){
      updateNote();
    }else if (noteId === 'new' && note.body.trim() ){
      createNote()
    }
    history.push("/");
  };

  let handleDelete = () => {
    deleteNote();
    history.push("/");
  };


  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        {noteId !== 'new' ? <button onClick={handleDelete}>Delete</button>
        : <button onClick={handleSubmit} >Done</button> }
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
