import React from 'react';
import PropTypes from 'prop-types';
import NoteForm from '../note-form/note-form';

// I am stuck on how to update a note. I am getting an error:
// Uncaught TypeError: _this.props.handleComplete is not a function. I am not able to figure out how
// to get it to work.
class NoteItem extends React.Component {
  render() {
    const { title, content } = this.props.note;
    return (
      <li>
        {title} : {content}
        <button onClick={this.props.handleRemoveNote.bind(null,
          this.props.note)}> X</button>
        <NoteForm note={this.props.note} handleComplete={this.handleUpdateNote}/>
      </li>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object,
  handleRemoveNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};

export default NoteItem;
