import styled from "styled-components";

const EmailInput = styled.input.attrs(() => ({
    type: "text",
    placeholder: "Username",
    id: "user-name"
}))`
    width: 90%;
    border: .2rem solid #ddd;
    padding: .4rem;
    font-size: 2rem;
    border-radius: .7rem;

    &:focus {
        border-color: #fdd54f;
    }
`;

export default EmailInput;