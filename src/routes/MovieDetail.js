import React from "react";
import "../components/Movie.scss";

class MovieDetail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const {
      location: {
        state: { title, year, summary, poster, genres },
      },
    } = this.props;
    if (true) {
      return (
        <div className="movies detail">
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
        </div>
      );
    } else {
      return <div>정보를 찾지 못했습니다.</div>;
    }
  }
}
export default MovieDetail;
