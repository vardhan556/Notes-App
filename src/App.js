import logo from './logo.svg';
import './App.css';
import NotesList from './components/NotesList';
import {useState} from 'react';
import {useEffect} from 'react';
import {nanoid} from 'nanoid';
import React from 'react'

const App = () => {
  const [notes, setNotes] = useState([
    {
      id : nanoid(),
      text : "this is my first note",
      date : '15/05/2024'
    },
    {
      id : nanoid(),
      text : "this is my second note",
      date : '15/05/2024'
    },
    {
      id : nanoid(),
      text : "this is my new note",
      date : '15/05/2024'
    }
  ])

  const AddNote = (text) =>{
    // console.log(text)
    const date = new Date()
    const newNote = {
      id : nanoid(),
      text : text,
      date : date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) =>{
    const newNotes = notes.filter((note)=>note.id!=id)
    setNotes(newNotes)
  }

  
  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('notes-data'))
    if(savedNotes){
      setNotes(savedNotes)
    }
  } ,[])
  useEffect(()=>{
    localStorage.setItem('notes-data', JSON.stringify(notes))
  },[notes])
  return (
    <div className='container'>
      <NotesList notes={notes} handleAddNote={AddNote} handleDeleteNote={deleteNote}></NotesList>
    </div>
  )
}

export default App
