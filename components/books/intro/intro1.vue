<template>
    <div class="left_page">
        <article>
            <!-- header -->
            <header> Intro </header>
            <!-- heading -->
            <h2> A Brief Intro </h2>
            <!-- heading decoration -->
            <div class="flex justify-center items-center">
                <div class="header_decoration"></div>
                <img class="header_decoration_middle" src="../../../assets/header_decoration.svg" alt="header decoration">
                <div class="header_decoration"></div>
            </div>
            <!-- main body -->
            <!-- <p>
                As the great H.P. Lovecraft once said: "I like coffee exceedingly." 
                I found myself agreeing with this sentiment more and more
                as time drags on; the more I code and study, the less something light 
                could lift me, and only the most dark and soulless of coffee could
                enrich my spirit. Such is only fitting, as the craft of coding is too 
                creative and exciting to be taken lightly. One needs calm and balance 
                to work with the tools they are gifted with.
            </p>
            <p>
                It is unfortunate that I still lack these traits. I
            </p> -->
            <p>
                As the illustrious H.P. Lovecraft once articulated, 
                "I am excessively fond of coffee." This sentiment now ensnares
                 my very being in a vise-like grip as the relentless march of time unfurls. 
                 The deeper I delve into the intricate labyrinth of code and study, 
                 the more apparent it becomes that ethereal frivolities cannot hoist 
                 my weary soul from the abyss. Only the darkest and most void-like 
                 brews of coffee have the potency to embolden my spirit. Such an 
                 inclination is but fitting, for the arcane artistry of coding is 
                 far too profound and
            </p>
            <!-- footer -->
            <footer>1</footer>
        </article>
    </div>
</template>

<script setup>

</script>

<style scoped>
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
</style>