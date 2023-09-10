<template>
    <div class="left_page">
        <article>
            <!-- header -->
            <header> Intro </header>
            <!-- main body -->
            <p>
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp• Joining this project offers a unique opportunity 
                to refine your UI/UX skills. You'll also gain valuable startup 
                collaboration experience, a vital asset for your future career. Your contributions will 
                drive Voithos' growth and build an impressive portfolio showcasing your innovative design 
                and development expertise. <br>
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp• For more details, please review our Voithos 
                Proposal document <a href="https://shorturl.at/egH46" style="color: blue">here</a>.
            </p>
            <p>
                If you're eager to enhance your web development skills, work on an exciting AI-driven project, 
                and leave your mark on the digital landscape, I invite you to explore these opportunities 
                further. Feel free to reach out for any inquiries or to express your interest. 
                My email is danielzf.liu@mail.utoronto.ca, and you can also find me on my 
                <a href="https://www.linkedin.com/in/danielzfliu/" style="color: blue">linkedin</a>. 
                In case the proposal links don't work, they are number 7 and 46 in the list of proposals.<br>
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                Best Regards, Daniel Liu
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