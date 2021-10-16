import React from "react";
import PropTypes from "prop-types";
import "./Movie.scss";

/**
 * movies component는 state를 필요로 하지 않는다. 그래서 만약에 component가 state를 필요로 하지 않을 경우에는 이게 class component가 될 필요가 없다.
 *  
 * ++++ 
 * 이제 state를 갖기 위해 class component를 가질 필요가 없다 => 왜냐면, react hook이 해주니까
 */
function Movie({ id, year, title, summary, poster, genres, url }) {
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
        <p className="movies__summary">{summary.slice(0, 140) + "..."}</p>
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
