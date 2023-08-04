import { useState, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 90%;
    margin-top: 2rem;
    display: flex;
    position: relative;
    padding-bottom: 3rem;

    button {
        background-color: white;
        height: 100%;
        width: 10%;
        padding: 1rem 0;
        border: .2rem solid #ddd;
        border-left: none;
        border-radius: 0 .7rem .7rem 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    div {
        position: absolute;
        bottom: 0;
        left: 0;
        font-family: "Open Sans";
        font-size: 1.7rem;
    }
`;

const Input = styled.input`
    width: 90%;
    border: .2rem solid #ddd;
    padding: .4rem;
    font-size: 2rem;
    border-radius: .7rem 0 0 .7rem;

    &:focus {
        border-color: #fdd54f;
    }
`;

function PasswordInput() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    function clickHandler() {
        setShowPassword(prevState => !prevState);
    }

    function inputChangeHandler(event) {
        setPassword(event.target.value)
    }

    return (
        <Container>
            <Input type="password" placeholder="Password" value={password} onChange={inputChangeHandler} />

            <button type="button" onClick={clickHandler}>
                {showPassword ? "Show" : "Hide"}
            </button>

            <div>
                {
                    !showPassword && password
                }
            </div>
        </Container>
    );
}

export default PasswordInput;