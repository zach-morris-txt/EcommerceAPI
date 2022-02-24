import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 32px 0px 18px 0px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;


const Categories = () => {
  return (
    <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
    </Container>
  );
};

export default Categories;
