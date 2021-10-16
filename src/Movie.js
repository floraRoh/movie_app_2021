import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

/**
 * movies component는 state를 필요로 하지 않는다. 그래서 만약에 component가 state를 필요로 하지 않을 경우에는 이게 class component가 될 필요가 없다.
 */
function Movie({ id, year, title, summary, poster }) {
  return (
    <div className="movies__movies">
      <div className="moives__data">
        <h3 className="movies__title">{title}</h3>
        <h4 className="movies__year">{year}</h4>
        <p className="movies__summary">{summary}</p>
      </div>
      <img src={poster} alt={title} title={title} />
    </div>
  );
}

Movie.propsTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
