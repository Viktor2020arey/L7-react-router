import React, { Component } from "react";
import axios from "axios";
import routes from "../routes";

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

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.books);
  };

  render() {
    const { imgUrl, title, author, descr } = this.state;

    return (
      <div className="container-fluid">
        <button type="button" onClick={this.handleGoBack}>
          Вернуться назад
        </button>

        <img src={imgUrl} alt={title} />
        <h2>{title}</h2>
        {author && <p>Автор:{author.name}</p>}
        <p>{descr}</p>
      </div>
    );
  }
}

export default BookDetailsView;
