import { Routes, Route } from "react-router-dom";
import { Home } from "./Main.js";
import { PageOne } from "./page/PageOne.js";
import { PageTwo } from "./page/PageTwo.js";
import { useState } from "react";
import axios from "axios";

function App() {
  const [trendImage, setTrendImage] = useState([]);
  let temp = [];

  function getImage() {
    axios
      .get(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((res) =>
        res.data.data.map((ele) => {
          temp.push(ele.images.original.url);
        })
      )
      .then(() => setTrendImage(temp))
      .then(console.log(trendImage));
  }

  return (
    <Routes>
      <Route path="/" element={<Home getImage={getImage} />}></Route>
      <Route path="/pageone" element={<PageOne />}></Route>
      <Route path="/pagetwo" element={<PageTwo trendImage={trendImage} />}></Route>
    </Routes>
  );
}
// export const store = createStore(reducer);

export default App;
