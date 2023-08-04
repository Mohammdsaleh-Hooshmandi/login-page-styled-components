import styled, {keyframes} from "styled-components";

const rotate = keyframes`
    from {
        transform: rotateZ(0);
    }

    to {
        transform: rotateZ(360deg);
    }
`;

const Spinner = styled.div`
    width: 5rem;
    height: 5rem;
    margin-bottom: 3rem;
    border: .2rem solid #f8049c;
    border-right: none;
    border-bottom: none;
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
`;

export default Spinner;