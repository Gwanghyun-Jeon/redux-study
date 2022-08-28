import { createStore } from "redux";
import { reducer } from "./redux/reducer.js";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Main.js";
import { PageOne } from "./page/PageOne.js";
import { PageTwo } from "./page/PageTwo.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pageone" element={<PageOne />}></Route>
      <Route path="/pagetwo" element={<PageTwo />}></Route>
    </Routes>
  );
}
export const store = createStore(reducer);
export default App;
