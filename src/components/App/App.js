import "../../index.css";
import React, { useEffect, useState } from "react";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import api from "../../utils/api";

function App() {
  const [collection, setCollection] = useState([]);
  const [isAboutPopupOpen, setIsAboutOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  const [movieId, setMovieId] = useState("");
  const [movieData, setMovieData] = useState({});
  const [genres, setGenres] = useState("");

  // GET the "now playing" collection with  brief data
  // to display on the post cover
  // GET movieId from each object
  useEffect(() => {
    api.getCollection().then((data) => {
      setCollection(data.results);
    });
  }, []);

  //Pass the movieId
  // Load The extended movie data from the individual movies object
  useEffect(() => {
    api
      .getMovieData(movieId)
      .then((movieData) => {
        setMovieData(movieData);
        const genreString = movieData.genres.map((item) => item.name);
        setGenres(genreString.join(" | "));
      })
      .catch((err) => console.error(`Error: ${err.status}`));
  }, [selectedPost]);

  function handlePostClick(post) {
    setSelectedPost(post);
    setMovieId(post.id.toString());
  }
  function handleAboutPopupOpen() {
    setIsAboutOpen(true);
  }
  function handleClosePopup() {
    setIsAboutOpen(false);
  }

  return (
    <section className="page">
      <Header />
      <Nav />
      <About
        isOpen={isAboutPopupOpen}
        onClose={handleClosePopup}
        movieData={movieData}
        genres={genres}
      />
      <Main
        collection={collection}
        onAboutPopupClick={handleAboutPopupOpen}
        onPostClick={handlePostClick}
        isOpen={isAboutPopupOpen}
      />

      <Preloader />
      <Footer />
    </section>
  );
}

export default App;
