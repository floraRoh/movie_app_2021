import React from "react";
import PropTypes from "prop-types";
import "./Movie.scss";

/**
 * movies component는 state를 필요로 하지 않는다. 그래서 만약에 component가 state를 필요로 하지 않을 경우에는 이게 class component가 될 필요가 없다.
 */
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movies__movies">
      <div className="movies__poster">
        <img src={poster} alt={title} title={title} />
      </div>
      <div className="movies__data">
        <h3 className="movies__title">{title}</h3>
        <h4 className="movies__year">{year}</h4>
        <ul className="genres">
          {genres.map((genres, i) => (
            <li key={i} className="genres__genre">
              {genres}
            </li>
          ))}
          {/* map에 있는 각각의 item은 key가 필요하다 */}
        </ul>
        <p className="movies__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propsTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
