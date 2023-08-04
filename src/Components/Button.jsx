import styled, {css} from "styled-components";

const Button = styled.button`
    
    color: white;
    
    font-size: 2rem;
    
    
    cursor: pointer;
    margin-top: 1rem;

    ${props =>  props.$primary ?
        css`
            background-color: #fdd54f;
            padding: .5rem 30%;
            border-radius: .5rem;
        `
        :
        css`
            background-color: #f8049c;
            padding: 1.5rem 30%;
            border-radius: 1rem;
            font-weight: bold;
    `}

    &:disabled {
        background-color: #ccc;
        color: #616161;
        cursor: not-allowed;
    }
`;

export default Button;