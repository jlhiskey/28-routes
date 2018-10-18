import React from 'react';
import NoteForm from "../note-form/note-form";
import uuid from 'uuid/v4';


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
            return <li key={currentNote.id}>
              {currentNote.title} : {currentNote.content}
            </li>
          })
        }
      </ul>
    );
  };

  handleAddNote = (note) => {
    note.createdOn = new Date();
    note.id = uuid();
    note.editing = false;
    note.completed = false;
    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
      }
    });
  };

  // handleRemoveNote = (note) => {
  //   let arr = [...this.state.notes];
  //
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].id === note.id) {
  //       arr.splice(i, 1);
  //     }
  //   }
  //
  //   this.setState({
  //       notes: arr,
  //     }
  //   );
  // };

  render() {
    return (
      <section>
        <h2>Dashboard</h2>
        <p>Add new Note</p>
        <NoteForm handleAddNote={this.handleAddNote}/>
        <p>Here is a list of all your notes that you have created:</p>
        { this.renderNotes() }
      </section>
    );
  }
}

export default Dashboard;
