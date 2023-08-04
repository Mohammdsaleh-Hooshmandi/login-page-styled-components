import styled from "styled-components";
import { Fragment, useState } from "react";

import EmailInput from "../Components/EmailInput";
import PasswordInput from "../Components/PasswordInput";
import Button from "../Components/Button";
import Spinner from "../Components/Spinner";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    h1 {
        font-size: 5rem;
        font-family: "Kaushan Script";
        user-select: none;
    }
`;

const ContentsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 950px) {
        flex-direction: column;
    }
`;

const FromWrapper = styled.form`
    width: 50%;
    border: .2rem solid #ccc;
    padding: 2rem;
    border-radius: 1rem;
    margin-top: 2rem;
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 950px) {
        width: 100%;
    }
`;

const Contents = styled.div`
    width: 50%;
    padding-left: 3rem;

    h2 {
        font-family: "Open Sans";
        font-size: 3rem;
        margin: 1rem 0;
    }

    p {
        font-family: "Open Sans";
        font-size: 1.6rem;
    }

    @media (max-width: 950px) {
        width: 100%;
    }
`;

function LoginPage() {
    const [showSpinner, setShowSpinner] = useState(false);

    function submitHandler(event) {
        event.preventDefault();
        setShowSpinner(true);
    }

    return (
        <Wrapper>
            <h1>Login Page</h1>

            <ContentsWrapper onSubmit={submitHandler}>
                <FromWrapper>
                    {
                        showSpinner ? <Spinner /> :
                        <Fragment>
                            <EmailInput />
                            <PasswordInput />
                        </Fragment>
                    }
                    
                    

                    <Button>
                        Login
                    </Button>
                </FromWrapper>

                <Contents>
                    <h2>
                        Company Policy
                    </h2>

                    <p>
                        Microdosing food truck hoodie jean shorts wolf dreamcatcher tofu church-key blu
                        e bottle distillery. Af bespoke narwhal pickled austin taiyaki, tofu fam tousled stump
                        town cronut activated charcoal. Roof party adaptogen you probably haven't heard of them art
                        party, dreamcatcher mixtape ugh keffiyeh etsy lyft affogato snackwave chia cold-pressed. Humbleb
                        rag seitan kombucha succulents fingerstache bitters health goth direct trade drinking vinegar intell
                        igentsia vinyl tattooed slow-carb tacos. Vaporware jianbing tote bag polaroid man braid copper mug microdo
                        sing direct trade put a bird on it mixtape godard vinyl cliche try-hard. Art party DIY artisan lumbersexual, kickstarter hell of viral. Vexillologist blue bottle paleo freegan plaid +1 chicharrones narwhal.
                    </p>
                </Contents>
            </ContentsWrapper>
        </Wrapper>
    );
}

export default LoginPage;