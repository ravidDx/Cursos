import React, { Component } from 'react';
import './App.css';

import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';

class App extends Component {

  constructor(){
    super(); //Hereda todo los metodos de Component
    
    this.state = {
      notes:[
        {
          noteId: 1,
          noteContent: 'note 1'
        },
        {
          noteId: 2,
          noteContent: 'note 2'
        }
      ]
    };
    this.addNote = this.addNote.bind(this);

  }

  removeNote(){

  }

  addNote(note){
    console.log("addNote");
    let {notes} = this.state;
    notes.push({
      noteId: notes.length + 1,
      noteContent:note
    });

    this.setState({notes});

  }


  render() {
    return (
      <div className="notesContainer">
        <div className="notesHeader">
          <h1>React y Firebase App</h1>
        </div>

        <div className="notesBody">
          <ul>
            {
              this.state.notes.map(note => {
                //return(<li key={note.noteId} >{note.noteContent}</li>)
                //retorna un componente
                return ( <Note
                            noteContent={note.noteContent}
                            noteId={note.noteId}
                            key={note.noteId}
                          />)
              })
            }
          </ul>
        </div>

        <div className="notesFooter">
            <NoteForm addNote={this.addNote}/>
        </div>

      </div>
    );
  }
}

export default App;
