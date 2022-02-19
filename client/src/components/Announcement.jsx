import styled from "styled-components";

const Container = styled.div`
  height: 3vh;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>U.S. & Canada: Free Shipping</Container>;
};

export default Announcement;
