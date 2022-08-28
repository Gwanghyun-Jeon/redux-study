import styled from "styled-components";

const ContentTitle = styled.div`
  /* width: 200px; */
  border: none;
  border-radius: 10px 10px 0px 0px;
  background-color: lightblue;
  padding: 5px;
  margin-top: 3px;
  word-wrap: break-word; /* IE 5.5-7 */
  white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
  white-space: pre-wrap; /* current browsers */
`;
const ContentBody = styled.div`
  /* width: 200px; */
  border-radius: 0px 0px 10px 10px;
  background-color: lightblue;
  padding: 5px;
  margin-bottom: 3px;
  word-wrap: break-word; /* IE 5.5-7 */
  white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
  white-space: pre-wrap; /* current browsers */
`;

export function Contentbox({ data }) {
  return (
    <>
      <ContentTitle>{data.title}</ContentTitle>
      <ContentBody>{data.content}</ContentBody>
    </>
  );
}
