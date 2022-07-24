import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${p => p.theme.space[4]}px;
    font-weight: 500;
    width: 100%;
    &:not(:last-child){
        margin-bottom: ${p => p.theme.space[3]}px;
    }
`;

export const Button = styled.button.attrs({
    type: "button",
})`
width: 75px;
height: 25px;
background: linear-gradient(to right, #0A4918, #53725A);
color: ${p => p.theme.colors.white};
border: 2px solid grey;
border-radius: ${p => p.theme.space[2]}px;
cursor: pointer;
&:hover,
&:focus {
    background: ${p => p.theme.colors.primary};
    color: #13411D;
    box-shadow: 0px 0px 7px #fff;
};
`;