import { Link } from "react-router-dom";

export function PageTwo() {
  return (
    <div>
      <ul>
        <Link to="/">홈페이지</Link>
        <br />
        <Link to="/pageone">1번 페이지</Link>
        <br />
        <Link to="/pagetwo">2번 페이지</Link>
      </ul>
      두번째 페이지 입니다.
    </div>
  );
}
