import React, { useEffect, useState } from "react";
import axios from "axios";

const Giphy = () => {
  const [gif, setGif] = useState(null);

  useEffect(() => {
    //axios works on promises so need to async/await it
    const fetchData = async () => {
      const results = await axios(
        "https://api.giphy.com/v1/gifs/search?api_key=Nvzay8HdzAT0WHi6NztEYu4WrN1FQcVY&q=cheeseburgers&limit=1&rating=pg"
      );
      setGif(results.data.data[0].images.fixed_height.url)
      console.log(gif)
    };

    fetchData();
  }, []);

  return (
    <div className="container gif-image">
      <img src={gif}/>
    </div>
  );
};

export default Giphy;
