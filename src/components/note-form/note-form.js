import React from 'react';
import Dashboard from "../dashboard/dashboard";
import PropTypes from 'prop-types';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNote(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="content"
          placeholder="Add Note"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type="submit">Create New Note</button>
      </form>
    );
  }
}

NoteForm.propTypes = {
  handleAddNote : PropTypes.func,
};


export default NoteForm;
