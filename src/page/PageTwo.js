import { Link } from "react-router-dom";

export function PageTwo({ trendImage }) {
  console.log(trendImage);
  return (
    <div>
      <ul>
        <Link to="/">홈페이지</Link>
        <br />
        <Link to="/pageone">1번 페이지</Link>
        <br />
        <Link to="/pagetwo">2번 페이지</Link>
      </ul>
      두번째 페이지는 짤방 모음입니다.
      {trendImage.map((ele, idx) => (
        <img key={idx} src={ele} alt={`그림 ${idx}`} />
      ))}
    </div>
  );
}
