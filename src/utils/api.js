class Api {
  constructor() {
    this._baseUrl = "https://api.themoviedb.org/3";
    this._headers = {
      "Content-Type": "application/json",
    };
    this._params = "?api_key=76239737fcb56e90c3d478b1c0274706";
    this._region = "&language=en-US&region=US";
  }
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }
  getHalloweenTitles() {
    return fetch(
      `${this._baseUrl}/search/movie${this._params}&query=halloween`,
      {
        headers: this._headers,
      }
    ).then((res) => this._getResponseData(res));
  }

  getNowPlaying() {
    return fetch(
      `${this._baseUrl}/movie/now_playing${this._params}${this._region}&page=1`,
      {
        headers: this._headers,
      }
    ).then((res) => this._getResponseData(res));
  }
  getComingSoon() {
    return fetch(
      `${this._baseUrl}/movie/upcoming${this._params}${this._region}&page=1`,
      {
        headers: this._headers,
      }
    ).then((res) => this._getResponseData(res));
  }
  getTopRated(page) {
    return fetch(
      `${this._baseUrl}/movie/top_rated${this._params}${this._region}&page=${page}`,
      {
        headers: this._headers,
      }
    ).then((res) => this._getResponseData(res));
  }

  searchMovie(search) {
    return fetch(
      `${this._baseUrl}/search/movie${this._params}&query=${search}${this._region}`,
      {
        headers: this._headers,
      }
    ).then((res) => this._getResponseData(res));
  }

  getSimilarMovies(movieId) {
    return fetch(`${this._baseUrl}/movie/${movieId}/similar${this._params}`, {
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  getMovieData(movieId) {
    return fetch(`${this._baseUrl}/movie/${movieId}${this._params}`, {
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }
}

const api = new Api();

export default api;
