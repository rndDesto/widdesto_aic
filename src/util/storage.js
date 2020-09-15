const FAV_MOVIE = 'fav_novie';
export function setFavMovie(value) {
  localStorage.setItem(FAV_MOVIE, value);
}

export function getFavMovie() {
  return localStorage.getItem(FAV_MOVIE);
}

export function clearStorages() {
  localStorage.setFavMovie(FAV_MOVIE);
}
