import "./App.css";
import { useEffect } from "react";

const URL = "http://www.omdbapi.com/?apikey=547b227e";
function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${URL} & S= ${title}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
}

export default App;
