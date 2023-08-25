<template>
    <div class="right_page">
        <article>
            <!-- header -->
            <header>Daniel Liu</header>
            <p>
                know of their importance, but the gap between knowing 
                and doing is insurmountable. To my inability, I replied with the sole 
                logical response: an existential crisis, the only common
                trait among men. Nihilism took a hold of me shortly after,
                but eventually it dawned on me that chaos is no way to live.
            </p>
            <p>
                That takes us to the present. I am but a young man seeking answer,
                and to me, three fields hold potential. The world wide web, a hivemind, the
                interconnected web of human society. AI, our first attempt at
                creating something greater than us, a monster in the making.
                And finally, writing, what we teach with, what is passed on.
            </p>
            <p>
                And thus I have decided: to contribute to the collective, to explore, and to 
                extend history. With luck, one of these paths will lead me to the answer I'm seeking.
            </p>
            <footer>2</footer>
        </article>
    </div>
</template>

<script setup>

</script>

<style scoped>
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

</style>
