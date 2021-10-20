import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.scss";

function Movie({ id, year, title, summary, poster, genres, url }) {
  return (
    <Link
      to={{
        pathname: `/Movie/${id}`,
        state: { title, year, summary, poster, genres },
      }}
    >
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
          </ul>
          <p className="movies__summary">{summary.slice(0, 140) + "..."}</p>
        </div>
      </div>
    </Link>
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
