import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// import HomeView from "./views/HomeView";
// import AuthorsView from "./views/AuthorsView";
// import BooksView from "./views/BooksView";
// import NotFoundView from "./views/NotFoundView";
// import BookDetailsView from "./views/BookDetailsView";
import routes from "./routes";
import AppBar from "./components/AppBar";

const HomeView = lazy(() =>
  import("./views/HomeView.js" /* webpackChunkName: "home-view" */)
);
const AuthorsView = lazy(() =>
  import("./views/AuthorsView.js" /* webpackChunkName: "authors-view" */)
);
const BooksView = lazy(() =>
  import("./views/BooksView.js" /* webpackChunkName: "books-view" */)
);
const NotFoundView = lazy(() =>
  import("./views/NotFoundView.js" /* webpackChunkName: "not-found-view" */)
);
const BookDetailsView = lazy(() =>
  import(
    "./views/BookDetailsView.js" /* webpackChunkName: "book-detailsView" */
  )
);

const App = () => (
  <>
    <AppBar />

    {/* <button onClick={() => loader().then(console.log)}>Загрузить Home</button> */}
    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route path={routes.authors} component={AuthorsView} />
        <Route exact path={routes.books} component={BooksView} />
        <Route path={routes.bookDetails} component={BookDetailsView} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
