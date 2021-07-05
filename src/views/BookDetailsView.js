import React, { Component } from "react";
import axios from "axios";

class BookDetailsView extends Component {
  state = {
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
    author: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;

    const response = await axios.get(
      `http://localhost:4040/books/${bookId}?_expand=author`
    );

    this.setState({ ...response.data });
  }

  render() {
    return (
      <>
        <h1>Страница одной книги {this.props.match.params.bookId}</h1>
        <img src={this.state.imgUrl} alt={this.state.title} />
        <h2>{this.state.title}</h2>
        {this.state.author && <p>Автор:{this.state.author.name}</p>}
        <p>{this.state.descr}</p>
      </>
    );
  }
}

export default BookDetailsView;
