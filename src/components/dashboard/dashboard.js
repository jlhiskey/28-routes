import React from 'react';
import NoteForm from '../note-form/note-form';
import uuid from 'uuid/v4';
import NoteItem from '../note-item/note-item';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.notes = [];
  }

  renderNotes = () => {
    return (
      <ul>
        {
          this.state.notes.map((currentNote) => {
            return  <NoteItem
              note={currentNote}
              handleRemoveNote = {this.handleRemoveNote}
              handleUpdateNote = {this.handleUpdateNote}
            />
          })
        }
      </ul>
    );
  };

  handleRemoveNote = (noteToRemove) => {
    this.setState((previousState) => ({
      notes: previousState.notes.filter(currentNote => currentNote.id !== noteToRemove.id), // ! = =
    }));
  };

  handleAddNote = (note) => {
    note.createdOn = new Date();
    note.id = uuid();
    note.updated = false;
    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
      }
    });
  };

  handleUpdateNote = (updatedNote) => {
    note.updated = true;
    return this.setState((previousState) => {
      return { notes: previousState.notes.map(function (originalNote) {
          if (originalNote.id === updatedNote.id) {
            return updatedNote;
          }
          if (originalNote.id !== updatedNote.id) {
            return originalNote;
          }
        })
      }
    })
  };

  calculateTotalNotes = () => {
    return this.state.notes.length
}

  render() {
    return (
      <section>
        <h2>Dashboard</h2>
        <p>Add new Note</p>
        <NoteForm handleComplete={this.handleAddNote}/>
        <p>List of Saved Notes:</p>
        { this.renderNotes() }
        <p>Total Notes Saved : {this.calculateTotalNotes() } </p>
      </section>
    );
  }
}

export default Dashboard;
