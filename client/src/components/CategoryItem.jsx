import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 22vw;
  margin: 3px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  width: 100%;
  height: 20vh;
  background-color: rgba(0,0,0,.8);
`;

const Title = styled.h1`
  color:white;
  margin: 0px 0px 20px 0px;
  text-align: center;
`;

const Button = styled.button`
  bottom: 0px;
  border: none;
  padding: 10px;
  width: 90%;
  text-decoration: none;
  background-color: white;
  color:gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`} stye={{display: "flex", alignItem: "center", justifyContent: "center", textDecoration: "none"}}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
