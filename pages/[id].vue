<template>
    <div class="main">
        <div class="canvas">
            <OpenBook :id='id'/>

            <div class="title">
                Library of Vita
            </div>

            <div class="shelves flex">
                <!-- empty book shelves -->
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>
                <EmptyBookShelf/>

                <!-- Current Book Shelf -->
                <div class="shelf shadow-xl">
                    <ShelfRow bg_text="Work" 
                    :book_names="['Epoch', 'ExRide', 'Voithos']" 
                    :book_classes="['epoch', 'exride', 'voithos']"
                    :book_descriptions="['2023 July - Now | Full Stack Developer | Epoch develops eye-catching brands, designs beautiful websites, and delivers campaigns that stand out from the norm.', 
                    '2023 July - Now | Main Web Developer | ExRide eliminates the stress and risks linked to selling cars privately.',
                    '2023 August - Now | An AI assisted productivity app that aims to revolutionize the way productivity app works.']"
                    :book_links="['https://epochdesign-landing.vercel.app/', 'https://exride.ca/', '']"/>

                    <ShelfRow bg_text="About Me" 
                    :book_names="['Intro', 'LinkedIn']" 
                    :book_classes="['daniel', 'linkedin']"
                    :book_descriptions="['An obscure introduction', 
                    'A professional introduction']"
                    :book_links="['/intro', 'https://www.linkedin.com/in/danielzfliu']"/>

                    <ShelfRow bg_text="Blog" 
                    :book_names="['LLM&LTM', 'Centering', 'CSC301']" 
                    :book_classes="['blog', 'blog2', 'blog2']"
                    :book_descriptions="['How to enable long term memory in large language models',
                    'How to center elements when building websites', 'A brief pitch for my fellow classmates in CSC301']"
                    :book_links="['', '/center', '/csc301']"/>

                    <!-- redundant rows -->
                    <section>
                        <ShelfRow bg_text="" :book_names="[]" :book_classes="[]" :book_descriptions="[]"/>
                        <ShelfRow bg_text="" :book_names="[]" :book_classes="[]" :book_descriptions="[]"/>
                    </section>
                </div>

                <EmptyBookShelf/>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { id } = useRoute().params;
</script>

<style scoped>
/* ******************************************************************** */
/* ****************************General Classes************************* */
/* ******************************************************************** */
@font-face {
  font-family: "EBGaramond";
  src: local("EBGaramond"),
    url("../assets/EBGaramond-VariableFont_wght.ttf") format("truetype");
}

.main{
    --ceramic-white: #FEFEFA;
    --soap-stone-white: #FBFBFE;
}

.canvas{
    /* inner shape */
    background-color: var(--soap-stone-white);

    /* position */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    /* interaction */
    overflow-y: auto;
    overflow-x: hidden;
}

/* scrollbar Track */
::-webkit-scrollbar-track {
    background: var(--soap-stone-white);
}



/* ******************************************************************** */
/* *********************************Title****************************** */
/* ******************************************************************** */
.title{
    /* position */
    margin-top: 2vw;
    margin-left: auto;
    margin-right: auto;

    /* font */
    font-size: 3.5vw;
    opacity: 0.7;
    font-family: EBGaramond;

    /* shape */
    height: min-content;
    width: max-content;
}


/* ******************************************************************** */
/* ****************************Shelves********************************* */
/* ******************************************************************** */
.shelves{
    /* position */
    margin-top: 3vw;
    margin-left: calc(-55vw * 19 - 30vw);

    /* shape */
    width: max-content;

    /* inner shape */
    gap: 5vw;
}

.shelf{
    /* shape */
    width: 50vw;
    height: 62vw;
    border: solid rgb(237, 237, 237) 0.5px;
    border-radius: 1%;

    /* inner shape */
    background-color: var(--ceramic-white);
    padding: 2vw;
}

</style>