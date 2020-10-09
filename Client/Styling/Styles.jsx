import styled, { css } from 'styled-components';

export const Button = styled.button`
position: center;
justify-content: space-around;
vertical-align: middle;
width: 8%;
height: 30px;
font-size: 12px;
color: rgb(255, 255, 255);
background-color: rgb(204, 0, 0);
border-color: rgb(204, 0, 0);
border-width: 1px;git
border-style: solid;
border-radius: 4px;
margin: 0px 0px 10px 645px;
cursor: pointer;
:hover {
background-color: rgb(135, 0, 0);
border-color: rgb(135, 0, 0);
}
`;


export const FiveStars = styled.span`
overflow: hidden;
letter-spacing: 1px;
margin: -20px 0px;
color: rgb(255, 214, 2);
width: 200%;
&:before {
  content: "\\2605\\2605\\2605\\2605\\2605";
  -webkit-text-stroke: 0.75px rgb(204, 136, 14);
}
 `;

 export const FourStars = styled.span`
overflow: hidden;
letter-spacing: 1px;
margin: -20px 0px;
color: rgb(255, 214, 2);
width: 200%;
&:before {
  content: "\\2605\\2605\\2605\\2605";
  -webkit-text-stroke: 0.75px rgb(204, 136, 14);
}
 `;

 export const ThreeStars = styled.span`
overflow: hidden;
letter-spacing: 1px;
margin: -20px 0px;
color: rgb(255, 214, 2);
width: 200%;
&:before {
  content: "\\2605\\2605\\2605";
  -webkit-text-stroke: 0.75px rgb(204, 136, 14);
}
 `;

export const TwoStars = styled.span`
overflow: hidden;
letter-spacing: 1px;
margin: -20px 0px;
color: rgb(255, 214, 2);
width: 200%;
&:before {
  content: "\\2605\\2605";
  -webkit-text-stroke: 0.75px rgb(204, 136, 14);
}
 `;

export const OneStar = styled.span`
overflow: hidden;
letter-spacing: 1px;
margin: -20px 0px;
color: rgb(255, 214, 2);
width: 200%;
&:before {
  content: "\\2605";
  -webkit-text-stroke: 0.75px rgb(204, 136, 14);
}
 `;