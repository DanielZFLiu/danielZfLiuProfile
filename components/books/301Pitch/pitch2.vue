<template>
    <div class="right_page">
        <article>
            <!-- header -->
            <header>Daniel Liu</header>
            <p>
                library featuring reusable Vue components and code (store pages, admin panels, menus, etc.) 
                designed to benefit all web developers. <br>
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp• By joining us, you'll gain expertise in web 
                development, popular frontend frameworks (Vue, Nuxt, and TailwindCSS), web component 
                design, and teamwork. <br>
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp• For more details, please review 
                our proposal document <a href="https://shorturl.at/gDEMP" style="color: blue">here</a>
                and visit our website <a href="https://www.epochdesign.dev/" style="color: blue">here</a>
            </p>
            <p>
                <b>Voithos</b> <br>
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp• Voithos utilizes cutting-edge AI tools like GPT, 
                embedding, and whisperAI to enhance note-taking and productivity. The students will focus on 
                developing 
                Voithos' frontend, giving students the chance to shape its user experience and interface, 
                enhancing intuitiveness, user-friendliness, and visual appeal. <br>
                To turn the page, click the right edge of the book ----->
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
    margin-bottom: 0.5vw;
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
