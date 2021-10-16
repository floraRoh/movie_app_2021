import React from 'react';
import PropTypes from 'prop-types';

/**
 * movies component는 state를 필요로 하지 않는다. 그래서 만약에 component가 state를 필요로 하지 않을 경우에는 이게 class component가 될 필요가 없다.
 */
function Movie({id, year, title, summary, poster}) {
  return(
   <>
   <h3>{id}</h3>
   <h4>{title}</h4>
   <img src={poster} />
   </> 
  )
}

Movie.propsTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

export default Movie;