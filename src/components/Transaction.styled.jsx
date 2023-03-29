import styled from "styled-components";

export const Table = styled.table`
    width: 350px;
    margin: 20px auto;
    border-radius: 2px;
    background-color: white;
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
`;

export const  TrHead = styled.tr`
    height: 40px;
    background: #00bcd5;
    color: white;
    text-align: center;
    text-transform: uppercase;
    th {
        width: calc(100% / 3);
        :not(:last-child) {
          border-right: 1px solid #99d7f9;
        }
      }
`;


export const  TrRow = styled.tr`
  height: 40px;
  text-align: center;
  text-transform: capitalize;
  &:nth-of-type(even) {
    background-color: #e2e2e2;
  }
  td {
    :not(:last-child) {
      border-right: 1px solid #d5d4d4;
    }
  }
`;
