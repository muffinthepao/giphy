import React, { useState, useEffect } from "react";
import Giphy from "./components/Giphy";
import Form from "./components/Form";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "../src/components/Form.css";

function App() {
  const [gif, setGif] = useState(null);
  const [gifIsLoading, setGifIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [searchQuery, setSearchQuery] = useState("monkey");

  //axios works on promises so need to async/await it
  const fetchGif = async () => {
    setGifIsLoading(true);
    setIsError(false);

    try {
      const results = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          api_key: "Nvzay8HdzAT0WHi6NztEYu4WrN1FQcVY",
          q: searchQuery,
          limit: 1,
          rating: "pg",
        },
      });
      setGif(results.data.data[0].images.fixed_height.url);
      setGifIsLoading(false);
    } catch (error) {
      setIsError(true)
      console.log(error)
    }
  };

  const handleSubmit = (input) => {
    setSearchQuery(input);
    fetchGif(searchQuery)
    
  };

  //initial load mount
  useEffect(() => {
    fetchGif();
  }, []);

  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form handleSubmit={handleSubmit} />
      <Giphy gif={gif} gifIsLoading={gifIsLoading} />
    </div>
  );
}

export default App;
