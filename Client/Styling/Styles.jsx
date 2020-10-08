import styled, { css } from 'styled-components';

export const Button = styled.button`
position: center;
width: 100%;
height: 30px;
font-size: 12px;
padding: 0 4px;
color: rgb(255, 255, 255);
background-color: rgb(204, 0, 0);
border-color: rgb(204, 0, 0);
border-width: 1px;
border-style: solid;
border-radius: 4px;
margin: 0px 475px 8px 475px;
cursor: pointer;
:hover {
background-color: rgb(135, 0, 0);
border-color: rgb(135, 0, 0);
}
`;

export const Stars = styled.span`
overflow: hidden;
letter-spacing: 1px;
margin: -20px 0px;
color: rgb(255, 214, 2);
&:before {
  content: "\\2605\\2605\\2605\\2605";
  -webkit-text-stroke: 0.75px rgb(204, 136, 14);
}
 `;
