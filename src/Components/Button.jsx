import styled from "styled-components";

const Button = styled.button`
    background-color: #f8049c;
    color: white;
    font-weight: bold;
    font-size: 2rem;
    padding: 1.5rem 30%;
    border-radius: 1rem;
    cursor: pointer;
    margin-top: 1rem;

    &:disabled {
        background-color: #ccc;
        color: #616161;
        cursor: not-allowed;
    }
`;

export default Button;