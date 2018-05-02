import React, { Component } from 'react';
import './App.css';

//Importando FIREBASE
import firebase from 'firebase';
import {DB_CONFIG} from './config/config';
import 'firebase/database';

import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';

class App extends Component {

  constructor(){
    super(); //Hereda todo los metodos de Component
    
    this.state = {
      notes:[
        /*{
          noteId: 1,
          noteContent: 'note 1'
        },
        {
          noteId: 2,
          noteContent: 'note 2'
        }*/
      ]
    };
    

    //FIREBASE
    this.app = firebase.initializeApp(DB_CONFIG); //Para requerir la conexion a firebase
    this.db= this.app.database().ref().child('notes'); //Para conexion a la BD
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  //Componente q se ejecuta despues de haber cargado la vista
  componentDidMount(){
    console.log('componentDidMount');
    const {notes} = this.state;

    console.log(notes);

    //Metodo escucha cuando se agrege un dato en la BD
    this.db.on('child_added' , snap => {
      notes.push({
        noteId:snap.key,
        noteContent:snap.val().noteContent
      })
      this.setState({notes});
      
    })

    //Metodo eschucha cuando se elimina un dato en ñla BD
    this.db.on('child_removed', snap =>{
      console.log(this.state);
      for(let i=0; i<notes.length;i++){
        console.log(notes[i].noteContent);
        if(notes[i].noteId == snap.key){
          console.log("ENtro");
          notes.splice(i, 1);
          console.log(this.state);
     
        }
      }
      
      this.setState({notes});
      
    })

  }

  removeNote(noteId){
    this.db.child(noteId).remove();
  }

  addNote(note){
    console.log("addNote");
    /*
    let {notes} = this.state;
    notes.push({
      noteId: notes.length + 1,
      noteContent:note
    });
    */
   this.db.push().set({noteContent:note});

  //this.setState({notes});

  }


  render() {
    console.log('render');
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
                            removeNote={this.removeNote}
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
