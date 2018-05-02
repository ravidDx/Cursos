import React, {Component} from 'react';
import './NoteForm.css';

class NoteForm extends Component{
    constructor(){
        super();
        this.addNote = this.addNote.bind(this);
        
    }

    addNote(){
        console.log(this.textInput.value);
        this.props.addNote(this.textInput.value);
        this.textInput.value='';
        this.textInput.focus();

    }

    render(){
        return(
            <div className="NoteForm">
                <input type="text" placeholder="Write a note" ref={input => {this.textInput = input;}}/>
                <button onClick={this.addNote}>Add Note</button>
            </div>
        )
    }
}

export default NoteForm;