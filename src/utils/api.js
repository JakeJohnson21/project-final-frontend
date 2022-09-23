class Api {
  constructor() {
    this._baseUrl = "https://api.themoviedb.org/3";
    this._headers = {
      "Content-Type": "application/json",
    };
    this._params =
      "?api_key=76239737fcb56e90c3d478b1c0274706&language=en-US&region=US";
  }
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  getCollection() {
    return fetch(`${this._baseUrl}/movie/now_playing${this._params}&page=1`, {
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
