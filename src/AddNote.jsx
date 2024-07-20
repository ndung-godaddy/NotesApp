import { useState } from "react";

function AddNote({ addNote }) {
  const [textareaValue, setTextareValue]= useState('');


  return (
    <form 
      className="flex flex-col w-1/3"
      onSubmit={ (event) =>{
      event.preventDefault();
      console.log("I want to submit",textareaValue)
      addNote(textareaValue)
      setTextareValue('')
    }}>
      <label
      className="font-bold text-2xl" 
      htmlFor="not-textarea"> Enter your notes </label>
      <textarea 
        id="notes-textarea" 
        name="notes"
        className="text-lg border border-grey-600 min h-24"
        value={ textareaValue }
        onChange={ (event) => {
          setTextareValue(event.target.value)
        }}
        placeholder='what is on your mind?'
      >
      </textarea>
      <button type='submit'>
        Add Note
      </button>
    </form>
  )
}

export default AddNote
