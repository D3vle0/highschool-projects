import styled, { css } from "styled-components";
const StyledButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid red;
    color: red;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 20px;
    ${(props) =>
        props.primary &&
        css`
            background: pink;
            color: white;
        `}
`;

export default StyledButton;