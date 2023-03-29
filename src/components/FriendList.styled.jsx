import styled from "styled-components";

export const Ul = styled.ul`
  margin: 10px auto 0 auto;
  width: 350px;
  padding: 0;
`;

export const LiFriendItem = styled.li`
  height: 90px;
  display: flex;
  margin-bottom: 10px;
  justify-content: start;
  align-items: center;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.4);

  img{
    margin-left: 12px;
    margin-right: 10px;
  }

  p{
    color: #090909;
    font-size: 18px;
    font-weight: 600;
  }

`;

export const StatusSpan = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${(props) => (props.status ? "green" : "red")};
  border-radius: 50%;
  margin-left: 15px;
`;





