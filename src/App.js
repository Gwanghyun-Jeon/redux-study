import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeAction } from "./redux/action.js";
import { createStore } from "redux";
import { reducer } from "./redux/reducer.js";
import { Contentbox } from "./components/content.js";

const Main = styled.div`
  margin: 0 auto;
  width: 500px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 0 auto; */
  width: 50%;
`;
const Title = styled.input`
  background-color: white;
  color: black;
  width: 100%;
  margin-top: 15px;
  margin-right: 25px;
`;
const Content = styled.textarea`
  background-color: white;
  color: black;
  margin-top: 5px;
  margin-right: 25px;
  width: 100%;
`;

function App() {
  const dispatch = useDispatch();
  const contentList = useSelector((state) => state);
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  // console.log(contentList);
  // console.log(inputTitle, inputContent);
  console.log(contentList);
  return (
    <Main>
      <Header>
        <PostArea>
          <Title onChange={(e) => setInputTitle(e.target.value)} value={inputTitle} />
          <Content onChange={(e) => setInputContent(e.target.value)} value={inputContent} />
        </PostArea>
        <button
          onClick={() => {
            dispatch(makeAction("ADD_ITEM", { title: inputTitle, content: inputContent }));
          }}
        >
          submit
        </button>
      </Header>
      <Body>{contentList && contentList.map((ele, idx) => <Contentbox key={idx} data={ele} />)}</Body>
    </Main>
  );
}
export const store = createStore(reducer);
export default App;
