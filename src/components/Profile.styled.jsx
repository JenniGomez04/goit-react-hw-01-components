//import styled from "@emotion/styled";
import styled from "styled-components";

export const DivContenedor = styled.div`
  display: block;
  width: 350px;
  margin: 20px auto;
  background-color: #f3f6f9;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  padding: 30px 0;
  background-color: white;


  .name{
    color: #122236;
    font-size: 19px;
    font-weight: 700;
    margin-bottom: 0px;
  }

  .tag,
  .location {
    margin-bottom: 0px;
    color: #8795a3;
  }
`;

export const Img = styled.img`
  width: 20%;
  margin: 0 auto;
`;

export const ListStats = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
  list-style: none;
  
`;

export const StatsLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  padding-right: 30px;
  border-right: 1px solid #ccc;

  &:last-child {
    border-right: none;
  }

  .label {
    font-size: 16px;
    color: #777;
    margin-bottom: 10px;
  }

  .quantity {
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }
`;

/*
export const ListStats = styled.ul`
  display: flex;
  justify-content: space-around;
  text-align: center;
  list-style: none;
  padding: 0;
  
`;

export const StatsLi = styled.li`
  display: grid;
`;

export const SpanLabel = styled.span`
  color: #f1f1f1;
  font-size:;
`;
*/

