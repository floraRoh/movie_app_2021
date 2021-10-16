import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    /** const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
     * console.log(movies.data.data.movies);
     * 위에껀 너무 나열이야
     *
     * movies 라는 const를 선언할건데 아래처럼 선언이 가능하다.
     */
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    this.setState({ movies, isLoading: false }); // movies(setState의 movies) : movies(axios에서 온 movies) 는 movies로 축약 가능
  };
  async componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
    /**
     * fetch()
     * fetch가 있지만 axios가 더 좋다한다
     *
     * application은 render한다
     */
    // const movies =axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <>
        <div>
          {isLoading
            ? "Loading..."
            : movies.map((movie) => {
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                  />
                );
              })}
        </div>
      </>
    );
  }
}

export default App;
