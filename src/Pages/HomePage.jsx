import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    h1 {
        font-size: 5rem;
        font-family: "Kaushan Script";
        user-select: none;
    }

    p {
        font-family: "Open Sans";
        font-size: 2rem;
        margin: 2rem 0;
    }
`;

function HomePage() {
    return (
        <Wrapper>
            <h1>Home Page</h1>

            <p>
                I'm baby sustainable typewriter glossier jean shorts. Slow-carb chicharr
                ones cliche, art party hella narwhal echo park marfa try-hard flexitarian.
                 Leggings franzen lumbersexual brunch organic you probably haven't heard of t
                 hem single-origin coffee paleo deep v four loko taxidermy master cleanse. IPh
                 one kitsch prism kickstarter selfies knausgaard. Ethical crucifix fanny pack y
                 ou probably haven't heard of them. Vape tumblr pop-up, flannel plaid gochujang s
                 quid hashtag messenger bag retro keffiyeh pour-over. Seitan hexagon you probably ha
                 ven't heard of them flannel authentic health goth beard disrupt.
            </p>

            <p>
                Unicorn tumeric hell of plaid, raw denim lomo semiotics gochujang su
                cculents tote bag selfies man bun. Pop-up heirloom meh occupy butcher direct tra
                de blue bottle tote bag schlitz. Offal try-hard mumblecore af shoreditch. Godard ar
                tisan retro, biodiesel umami cloud bread unicorn. Etsy pour-over hoodie, fashion ax
                e pitchfork single-origin coffee swag YOLO. Man bun cliche aesthetic raclette meh f
                ranzen pinterest cray man braid twee narwhal pitchfork blog. Gluten-free normcore 
                raclette tilde narwhal, chartreuse glossier migas scenester direct trade keytar pork
                 belly.
            </p>

            <p>
                Microdosing food truck hoodie jean shorts wolf dreamcatcher tofu church-key blu
                e bottle distillery. Af bespoke narwhal pickled austin taiyaki, tofu fam tousled stump
                town cronut activated charcoal. Roof party adaptogen you probably haven't heard of them art
                 party, dreamcatcher mixtape ugh keffiyeh etsy lyft affogato snackwave chia cold-pressed. Humbleb
                 rag seitan kombucha succulents fingerstache bitters health goth direct trade drinking vinegar intell
                 igentsia vinyl tattooed slow-carb tacos. Vaporware jianbing tote bag polaroid man braid copper mug microdo
                 sing direct trade put a bird on it mixtape godard vinyl cliche try-hard. Art party DIY artisan lumbersexual, kickstarter hell of viral. Vexillologist blue bottle paleo freegan plaid +1 chicharrones narwhal.
            </p>

            <p>
                3 wolf moon put a bird on it sartorial vinyl normcore palo santo for
                age vape ramps pug hashtag master cleanse letterpress tofu. Schlitz fam helvet
                ica, you probably haven't heard of them post-ironic kickstarter yuccie. Irony 
                vape blog, XOXO bushwick raclette mixtape succulents gentrify godard kinfolk keytar ban
                h mi church-key neutra. Taxidermy swag fixie raclette irony. Leggings austin forage, yuccie
                 direct trade fashion axe fam seitan prism whatever freegan pop-up pabst post-ironic hell of. Crucifix a
                 rtisan celiac mixtape, mustache letterpress tilde gentrify distillery live-edge woke meh shaman every
                 day carry.
            </p>
        </Wrapper>
    );
}

export default HomePage;