import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function PageOne() {
  const contentList = useSelector((state) => state);

  return (
    <div>
      <ul>
        <Link to="/">홈페이지</Link>
        <br />
        <Link to="/pageone">1번 페이지</Link>
        <br />
        <Link to="/pagetwo">2번 페이지</Link>
      </ul>
      첫번째 페이지 입니다.
      {contentList
        .filter((ele) => ele.payload.title === "aaa")
        .map((ele) => (
          <div>
            <input defaultValue={ele.payload.title} />
            <br />
            <textarea defaultValue={ele.payload.content} />
          </div>
        ))}
    </div>
  );
}
