import styled from "styled-components";

export let SectionContenedor = styled.section`
    width: 350px;  
    margin: auto;
    background-color: white;
`;

export let TitleStatistics = styled.h2`
    padding-top: 20px;
    color: #7f8185;
    text-align: center;
`;


export let ListUl = styled.ul`
display: flex;
justify-content: space-between;
width: 100%;
margin: 0;
padding: 0;
`;

export let List= styled.li`
display: flex;
align-items: center;
flex-direction: column;
padding: 10px 0;
width: 100%;

`;

export const Label = styled.span`
    margin-top: 5px;
`;

export const Percentage = styled.span`
  
  font-weight: bold;
  text-align: center;
`;
