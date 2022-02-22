import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 3px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  width: 94%;
  height: 42%;
  background-color: rgba(0,0,0,.6);
`;

const Title = styled.h1`
    color:white;
    margin: 0px 0px 20px 0px;
    text-align: center;
`;

const Button = styled.button`
    bottom: 0;
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`} stye={{display: "flex", alignItem: "center", justifyContent: "center"}}>
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
