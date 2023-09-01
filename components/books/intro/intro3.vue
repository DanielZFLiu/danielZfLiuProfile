<template>
    <div class="left_page">
        <article>
            <!-- header -->
            <header> Intro </header>
            <!-- main body -->
            <p>
                AI, our inaugural foray into birthing a dominion superior to our own, 
                a nascent monstrosity. Lastly, the realm of the written word, an 
                instrument of instruction, a vessel for legacy. And thus, resolute 
                is my resolve: to bestow upon the collective my contribution, 
                to chart uncharted territories, to elongate the annals of history. 
                With fortune's favor, one among these trajectories shall unveil 
                the sought-after answer.
            </p>
            <!-- footer -->
            <footer>3</footer>
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
    margin-bottom: 1vw;
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
    text-indent: 0;
    font-family: 'Crimson Text';
    font-size: 1.3vw;
    line-height: 2vw;
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