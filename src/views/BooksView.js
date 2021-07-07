import React, { Component } from "react";
import BookList from "../components/BookList";
import axios from "axios";

class BooksView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:4040/books");

    this.setState({ books: response.data });
  }

  render() {
    return (
      <div className="container-fluid">
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default BooksView;
