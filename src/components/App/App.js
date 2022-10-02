import "../../index.css";
import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import api from "../../utils/api";
import README from "../README/README";

function App() {
  // The 4 separate collections of data, halloween is implemented via search query
  const [nowPlaying, setNowPlaying] = useState([]);
  const [comingSoon, setComingSoon] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [halloween, setHalloween] = useState([]);

  const [isAboutPopupOpen, setIsAboutOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [movieId, setMovieId] = useState("");
  const [movieData, setMovieData] = useState({});
  const [genres, setGenres] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //State for the page number selected
  const [topRatedPage, setTopRatedPage] = useState("");

  // activating and deactivating different pages-
  const [isHomepageActive, setIsHomepageActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  const [isReadmeActive, setIsReadmeActive] = useState(false);
  const [isComingSoonActive, setIsComingSoonActive] = useState(false);
  const [isNowPlayingActive, setIsNowPlayingActive] = useState(false);
  const [isTopRatedActive, setIsTopRatedActive] = useState(false);

  function handleIsReadmeActive() {
    handleCloseMobileMenu();
    setIsReadmeActive(true);
    setIsHomepageActive(false);
    setIsComingSoonActive(false);
    setIsNowPlayingActive(false);
    setIsTopRatedActive(false);
  }

  // Open Homepage, else close
  function handleIsHomepageActive() {
    handleCloseMobileMenu();
    setIsHomepageActive(true);
    setIsNowPlayingActive(false);
    setIsTopRatedActive(false);
    setIsComingSoonActive(false);
    setIsReadmeActive(false);
  }
  // Open Coming Soon, else close
  function handleIsComingSoonActive() {
    handleCloseMobileMenu();
    setIsComingSoonActive(true);
    setIsNowPlayingActive(false);
    setIsTopRatedActive(false);
    setIsHomepageActive(false);
    setIsReadmeActive(false);
  }
  // Open Now Playing, else close
  function handleIsNowPlayingActive() {
    handleCloseMobileMenu();
    setIsNowPlayingActive(true);
    setIsTopRatedActive(false);
    setIsComingSoonActive(false);
    setIsHomepageActive(false);
    setIsReadmeActive(false);
  }
  // Open Top Rated, else close
  function handleIsTopRatedActive() {
    handleCloseMobileMenu();
    setIsTopRatedActive(true);
    setIsComingSoonActive(false);
    setIsNowPlayingActive(false);
    setIsHomepageActive(false);
    setIsReadmeActive(false);
  }

  // GET the "now playing" collection with  brief data
  // to display on the post cover
  // GET movieId from each object

  useEffect(() => {
    setIsLoading(true);
    api
      .getNowPlaying()
      .then((data) => {
        setNowPlaying(data.results);
        setIsLoading(false);
      })
      .catch((err) => console.error(`Error: ${err.status}`));
  }, []);

  // GET "coming soon" collection
  useEffect(() => {
    setIsLoading(true);
    api
      .getComingSoon()
      .then((data) => {
        setComingSoon(data.results);
        setIsLoading(false);
      })
      .catch((err) => console.error(`Error: ${err.status}`));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    api
      .getHalloweenTitles()
      .then((data) => {
        setHalloween(data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(`Error: ${err.status}`));
  }, []);
  //Pass the movieId
  // Load The extended movie data from the individual movies object

  function handleSimilarMovies(movieId) {
    if (selectedPost) {
      setIsLoading(true);
      api
        .getSimilarMovies(movieId)
        .then((data) => {
          setSimilarMovies(data.results);
          setIsLoading(false);
        })
        .catch((err) => console.error(`Error: ${err.status}`));
    }
  }
  // Load top rated, also functionality to pass in a page number for mulitple pages.
  function handleTopRated(page) {
    setIsLoading(true);
    api
      .getTopRated(page)
      .then((data) => {
        setTopRated(data.results);
        setIsLoading(false);
      })
      .catch((err) => console.error(`Error: ${err.status}`));
  }
  // Extended movie data for the modal.
  function handleAboutMovieData(movieId) {
    if (selectedPost) {
      setIsLoading(true);
      api
        .getMovieData(movieId)
        .then((movieData) => {
          setMovieData(movieData);
          const genreString = movieData.genres.map((item) => item.name);
          setGenres(genreString.join(" | "));
          setIsLoading(false);
        })
        .catch((err) => console.error(`Error: ${err.status}`));
    }
  }
  // Pass in a search query requests results imediately.
  function handleSearch(search) {
    if (search) {
      setIsLoading(true);
      api
        .searchMovie(search)
        .then((data) => {
          setSearchResults(data.results);
          setIsLoading(false);
        })
        .catch((err) => console.error(`Error: ${err.status}`));
    }
  }
  // Searches every time a character is added
  // or removed from the input
  useEffect(() => {
    handleSearch(search);
  }, [search]);

  // Loads the extended info popup each time a post is selected
  // If the same post is opened and reopened, the load doesn't change.
  useEffect(() => {
    handleAboutMovieData(movieId);
  }, [selectedPost]);

  useEffect(() => {
    handleSimilarMovies(movieId);
  }, [selectedPost]);

  // Passes in the page number to recieve specific page data
  useEffect(() => {
    handleTopRated(topRatedPage);
  }, [topRatedPage]);

  // Click on esc key, closes the popup.
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.keyCode === 27) {
        handleClosePopup();
      }
    };
    window.addEventListener("keydown", handleEscClose);
    return () => window.removeEventListener("keydown", handleEscClose);
  }, []);

  function handlePostClick(post) {
    setSelectedPost(post);
    setMovieId(post.id.toString());
    setIsAboutOpen(true);
  }
  function handleAboutPopupOpen() {
    return setIsAboutOpen(true);
  }

  function handleMobileMenuOpen() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  function handleCloseMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function handleClosePopup() {
    setSelectedPost(null);
    setSimilarMovies([]);
    setIsAboutOpen(false);
  }

  return (
    <section className="page">
      <Header
        search={search}
        setSearch={setSearch}
        isOpen={isMobileMenuOpen}
        handleOpen={handleMobileMenuOpen}
        onClose={handleCloseMobileMenu}
        handleIsHomepageActive={handleIsHomepageActive}
        isHomepageActive={isHomepageActive}
        isReadmeActive={isReadmeActive}
      />

      <Nav
        setSearch={setSearch}
        search={search}
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMobileMenu}
        isComingSoonActive={isComingSoonActive}
        isNowPlayingActive={isNowPlayingActive}
        isTopRatedActive={isTopRatedActive}
        handleNowPlaying={handleIsNowPlayingActive}
        handleComingSoon={handleIsComingSoonActive}
        handleTopRated={handleIsTopRatedActive}
      />
      <Redirect path="/" to="/home" />
      <Switch>
        <Route path="/home">
          <Home
            halloween={halloween}
            nowPlaying={nowPlaying}
            comingSoon={comingSoon}
            topRated={topRated}
            onAboutPopupClick={handleAboutPopupOpen}
            onPostClick={handlePostClick}
            isOpen={isAboutPopupOpen}
          />
        </Route>

        <Route path="/halloween">
          <Main
            pageTitle={"Halloween"}
            path="/halloween"
            collection={halloween}
            onAboutPopupClick={handleAboutPopupOpen}
            onPostClick={handlePostClick}
            isOpen={isAboutPopupOpen}
            pageButtonStyle="directory__container-hidden"
            mainContentStyles="limited__halloween-page"
            starSize={20}
            ratingStyle={"post__rating"}
          />
        </Route>
        <Route path="/now-playing">
          <Main
            pageTitle={"Now Playing"}
            collection={nowPlaying}
            onAboutPopupClick={handleAboutPopupOpen}
            onPostClick={handlePostClick}
            isOpen={isAboutPopupOpen}
            pageButtonStyle={"directory__container-hidden"}
          />
        </Route>
        <Route path="/coming-soon">
          <Main
            pageTitle={"Coming Soon"}
            path="/coming-soon"
            collection={comingSoon}
            onAboutPopupClick={handleAboutPopupOpen}
            onPostClick={handlePostClick}
            isOpen={isAboutPopupOpen}
            pageButtonStyle={"directory__container-hidden"}
          />
        </Route>
        <Route path="/top-rated">
          <Main
            setTopRatedPage={setTopRatedPage}
            pageTitle={"Top Rated Movies"}
            path="/coming-soon"
            collection={topRated}
            onAboutPopupClick={handleAboutPopupOpen}
            onPostClick={handlePostClick}
            isOpen={isAboutPopupOpen}
            pageButtonStyle={"directory__container"}
          />
        </Route>
        <Route path="/search">
          <Main
            pageTitle={"Search Results: "}
            closePopup={handleClosePopup}
            path="/search"
            collection={searchResults}
            onAboutPopupClick={handleAboutPopupOpen}
            onPostClick={handlePostClick}
            isOpen={isAboutPopupOpen}
            pageButtonStyle={"directory__container-hidden"}
          />
        </Route>
        <Route to="/readme">
          <README />
        </Route>
      </Switch>

      <About
        isOpen={isAboutPopupOpen}
        onClose={handleClosePopup}
        movieData={movieData}
        genres={genres}
        collection={similarMovies}
        onPostClick={handlePostClick}
        onAboutPopupOpen={handleAboutPopupOpen}
      />
      <Footer handleReadme={handleIsReadmeActive} />
      <Preloader isLoading={isLoading} preloadStyles={"preloader__app"} />
    </section>
  );
}

export default App;
