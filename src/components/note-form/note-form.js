import React from 'react';
import PropTypes from 'prop-types';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    const emptyState = {
      title: '',
      content: '',
    };

    this.state = this.props.note ? this.props.note : emptyState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleComplete(this.state);
  };

  render() {
    const buttonText = this.props.note ? 'Update' : 'Create';
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="content"
          placeholder="Content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type="submit">{buttonText} Note</button>
      </form>
    );
  }
}

NoteForm.propTypes = {
  handleAddNote : PropTypes.func,
  handleUpdateNote : PropTypes.func,
};


export default NoteForm;
