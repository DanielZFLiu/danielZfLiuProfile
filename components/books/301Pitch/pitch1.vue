<template>
    <div class="left_page">
        <article>
            <!-- header -->
            <header> CSC301 Piazza Post </header>
            <!-- heading -->
            <h2> A Brief Pitch </h2>
            <!-- heading decoration -->
            <div class="flex justify-center items-center">
                <div class="header_decoration"></div>
                <img class="header_decoration_middle" src="../../../assets/header_decoration.svg" alt="header decoration">
                <div class="header_decoration"></div>
            </div>

            <p>
                Dear CSC301 Classmates, I hope this message finds you all in 
                good health and high spirits. I'm Daniel Liu, a fourth-year student, 
                and I'm thrilled to introduce you to two exciting partner proposals, 
                both of which I'm involved in. <br>
            </p>
            <p>
                <b>Epoch Design & Development</b> <br>
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp• Epoch is a web design and development firm 
                founded by Finn Williams. We're dedicated to unleashing creativity in web projects. <br>
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp• Our proposal focuses on an open-source widget 
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