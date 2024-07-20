function NoteList({ notes }) {


  return (
    <ul className="shadow-md bg-grey-600">
      { notes.map((note, index) => {
        return <li key={index}> { note } </li>
      } )}
    </ul>
  )
}

export default NoteList