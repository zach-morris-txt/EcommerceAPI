import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 22vw;
  margin: 3px;
`;

const Image = styled.img`
  width: 21vw;
  object-fit: fill;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
  background-color: rgba(0,0,0,.8);
`;

const Top = styled.div`
  height: 65%;
`

const Title = styled.h1`
  color:white;
  margin: 0px 0px 20px 0px;
  text-align: center;
  text-decoration: none;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  width: 90%;
  height: 25%;
  text-decoration: none;
  background-color: #8f474d;
  color: black;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Link to={`/products/${item.cat}`} style={{display: "flex", justifyContent: "center", textDecoration: "none"}}>
      <Container>
        <Image src={item.img} />
        <Info>
          <Top>
            <Title>{item.title}</Title>
          </Top>
          <Button>SHOP NOW</Button>
        </Info>
      </Container>
    </Link>
  );
};

export default CategoryItem;
