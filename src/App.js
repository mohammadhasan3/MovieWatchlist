// import "./App.css";

//Stores
import movieStore from "./stores/movieStore";

//Components
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <>
      <h1>Mohammad's and Yousef's favourite movies</h1>
      <MoviesList />
    </>
  );
}

export default App;
