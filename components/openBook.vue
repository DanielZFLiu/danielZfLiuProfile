<template>
        <div 
            
            class="open_book_canvas flex justify-center items-center">
            <div class="book_cover_left">
                <div class="left_page_header"></div>
                <div class="left_page">
                    <article>
                        <!-- header -->
                        <header> Intro </header>
                        <!-- heading -->
                        <h2> A Brief Intro </h2>
                        <!-- heading decoration -->
                        <div class="flex justify-center items-center">
                            <div class="header_decoration"></div>
                            <img class="header_decoration_middle" src="../assets/header_decoration.svg" alt="header decoration">
                            <div class="header_decoration"></div>
                        </div>
                        <!-- main body -->
                        <p>
                            As the great H.P. Lovecraft once said: "I like coffee exceedingly." 
                            I found myself agreeing with this sentiment more and more
                            as time drags on; the more I code and study, the less something light 
                            could lift me, and only the most dark and soulless of coffee could
                            enrich my spirit. Such is only fitting, as the world of coding is too 
                            creative and exciting to be taken lightly. One needs calm and balance 
                            to work with the tools they are gifted with.
                        </p>
                        <p>
                            It is unfortunate that I lacked these traits. I knew
                        </p>
                        <!-- footer -->
                        <footer>1</footer>
                    </article>
                </div>
                <div class="left_page_footer"></div>
            </div>
            <div class="book_spine"></div>
            <div class="book_cover_right">
                <div class="right_page_header"></div>
                <div class="right_page">
                    <article>
                        <!-- header -->
                        <header>Daniel Liu</header>
                        <p>
                           the importance of them, but the gap between knowing 
                           and doing is insurmountable. To my inability, I replied with the sole 
                           logical response: an existential crisis, the only common
                           trait among men. Nihilism took a hold of me shortly after,
                           but before long it dawned on me that chaos is no way to live your life.
                        </p>
                        <p>
                            I chose what most people chose, to dedicate my life on finding an answer.
                            Three fields hold potential. The world wide web, a hivemind, the
                            interconnected web of human society. AI, our first attempt at
                            creating something greater than us, a monster in the making.
                            And finally, writing, what we teach with. I will bet my sanity that
                            the H.P.Lovecraft collection sitting on my shelf will outlast this 
                            library, and probably me.
                        </p>
                        <p>
                            And thus I have decided: to serve the collective, to explore, and to extend
                            history. With luck, one of these paths will lead me to the answer I'm seeking.
                        </p>
                        <footer>2</footer>
                    </article>
                </div>
                <div class="right_page_footer"></div>
            </div>
        </div>
</template>

<script setup>

</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Crimson+Text:400,700,900,400italic,700italic,900italic|Playfair+Display:400,700,900,400italic,700italic,900italic|Rock+Salt:400);

@font-face {
  font-family: "EBGaramond";
  src: local("EBGaramond"),
    url("../assets/EBGaramond-VariableFont_wght.ttf") format("truetype");
}

.open_book_canvas{
    --ceramic-white: #FEFEFA;
    --soap-stone-white: #FBFBFE;

    /* position */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    /* interaction */
    z-index: 1;

    opacity: 0;
    animation: showOpenBook forwards 1s;
}

@keyframes showOpenBook {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}


/* ******************************************************************** */
/* *********************************Book******************************* */
/* ******************************************************************** */
.book_cover_left{
    /* shape */
    width: 35vw;
    height: 45vw;
    border-top: solid rgb(121, 121, 121) 1px;
    border-bottom: solid rgb(121, 121, 121) 1px;
    border-left: solid rgb(121, 121, 121) 1px;
    border-top-left-radius: 1vw;
    border-bottom-left-radius: 1vw;

    /* inner shape */
    background-color: #592720;
    position: relative;
}

.left_page_header{
    /* position */
    margin-left: 5%;
    margin-top: 1%;

    /* shape */
    width: 95%;
    height: 10%;
    transform: rotate(-2deg);
    border-top-right-radius: 25%;

    /* inner shape */
    background-color: var(--ceramic-white);
    border-top: solid rgb(121, 121, 121) 1px;

    /* position */
    position: absolute;

    /* interaction */
    z-index: 1;
}

.left_page{
    /* position */
    position: absolute;
    margin-left: 5%;
    margin-top: 8%;

    /* shape */
    width: 95%;
    height: 90%;

    /* inner shape */
    background-color: var(--ceramic-white);
    padding-left: 2.5vw;
    padding-right: 2.5vw;

    /* interaction */
    z-index: 2;
}

.left_page header{
    font-family: 'Crimson Text';
    font-weight: bold;
    font-size: 0.9vw;
    text-transform: uppercase;
}

.left_page h2{
    /* position */
    padding-top: 2vw;
    margin-bottom: 1vw;

    /* font */
    font-family: 'Playfair Display';
    font-size: 4vw;
    font-weight: 700;
    letter-spacing: 0.125em;
    line-height: 5vw;
    text-align: center;
    text-transform: uppercase;
}

.header_decoration{
    /* shape */
    border: solid 0 #000;
    border-width: 0.15em 0;
    height: 0.5vw;
    width: 45%;
}

.header_decoration_middle{
    /* shape */
    width: 1.5vw;
    /* position */
    margin-left: 2%;
    margin-right: 2%;
}

.left_page p{
    text-indent: 2.5vw;
    font-family: 'Crimson Text';
    font-size: 1.3vw;
    line-height: 2vw;
}

.left_page p:first-of-type{
    /* position */
    margin-top: 1vw;

    /* font */
    font-family: 'Crimson Text';
    font-size: 1.3vw;
    text-indent: 0;
    line-height: 2vw;
}

.left_page p:first-of-type::first-letter{
    /* position */
    float: left;

    /* font */
    font-family: 'Playfair Display';
    font-size: 4vw;
    font-weight: 700;
    letter-spacing: 0.05em;
    line-height: 2.5vw;

    /* inner shape */
    padding: 0.15em 0.05em 0 0;
    text-transform: uppercase;
}

.left_page footer{
    position: absolute;
    bottom: 0.6vw;
    font-family: 'Crimson Text';
    font-weight: bold;
    font-size: 0.9vw;
    text-transform: uppercase;
}

.left_page_footer{
    /* position */
    margin-left: 5%;
    margin-top: 115%;

    /* shape */
    width: 95%;
    height: 10%;
    transform: rotate(2deg);
    border-bottom-right-radius: 25%;

    /* inner shape */
    background-color: var(--ceramic-white);
    border-bottom: solid rgb(121, 121, 121) 1px;

    /* position */
    position: absolute;

    /* interaction */
    z-index: 1;
}

.book_spine{
    position: absolute;
    width: 5vw;
    height: 45vw;
    background: linear-gradient(to right, transparent 0%,rgba(0,0,0,0.2) 46%,rgba(0,0,0,0.5) 49%,rgba(0,0,0,0.6) 50%,rgba(0,0,0,0.5) 51%,rgba(0,0,0,0.2) 52%,transparent 100%);
    z-index: 3;
}

.book_cover_right{
    /* shape */
    width: 35vw;
    height: 45vw;    
    border-top: solid rgb(121, 121, 121) 1px;
    border-bottom: solid rgb(121, 121, 121) 1px;
    border-right: solid rgb(121, 121, 121) 1px;
    border-top-right-radius: 1vw;
    border-bottom-right-radius: 1vw;
    
    /* inner shape */
    background-color: #592720;
    position: relative;
}

.right_page_header{
    /* position */
    margin-right: 5%;
    margin-top: 1%;

    /* shape */
    width: 95%;
    height: 10%;
    transform: rotate(2deg);
    border-top-left-radius: 25%;

    /* inner shape */
    background-color: var(--ceramic-white);
    border-top: solid rgb(121, 121, 121) 1px;

    /* position */
    position: absolute;

    /* interaction */
    z-index: 1;
}

.right_page{
    /* position */
    margin-right: 5%;
    margin-top: 8%;
    position: absolute;

    /* shape */
    width: 95%;
    height: 90%;

    /* inner shape */
    background-color: var(--ceramic-white);
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    
    /* interaction */
    z-index: 2;
}

.right_page header{
    /* font */
    font-family: 'Crimson Text';
    font-weight: bold;
    font-size: 0.9vw;
    text-transform: uppercase;

    /* shape */
    width: 100%;

    /* inner shape */
    text-align: right;

    /* position */
    float: right;
    margin-bottom: 1vw;
}

.right_page p:first-of-type{
    text-indent: 0;
}

.right_page p{
    /* font */
    text-indent: 2.5vw;
    font-family: 'Crimson Text';
    font-size: 1.3vw;
    line-height: 2vw;
}

.right_page footer{
    right: 2.5vw;
    position: absolute;
    bottom: 0.6vw;
    font-family: 'Crimson Text';
    font-weight: bold;
    font-size: 0.9vw;
    text-transform: uppercase;
}

.right_page_footer{
    /* position */
    margin-right: 5%;
    margin-top: 115%;

    /* shape */
    width: 95%;
    height: 10%;
    transform: rotate(-2deg);
    border-bottom-left-radius: 25%;

    /* inner shape */
    background-color: var(--ceramic-white);
    border-bottom: solid rgb(121, 121, 121) 1px;

    /* position */
    position: absolute;

    /* interaction */
    z-index: 1;
}
</style>