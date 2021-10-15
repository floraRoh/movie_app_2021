import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
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
    const { isLoading } = this.state;
    return (
      <>
        <div>{isLoading ? "Loading..." : "we are Ready"}</div>
      </>
    );
  }
}

export default App;
