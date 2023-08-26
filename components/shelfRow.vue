<template>
    <div class="row_shape mb-[2vw]">
        <div class="absolute w-full h-full tooltip" :data-tip="bg_text">
            <p class="background_text absolute">{{bg_text}}</p>
        </div>

        <Book v-for="(name, index) in book_names" :title="name" :description="book_descriptions[index]" :link="book_links[index]" :class="book_classes[index]"/>
    </div>
</template>

<script setup>
    const { bg_text, book_names, book_classes, book_descriptions, book_links} = defineProps(['bg_text', 'book_names', 'book_classes', 'book_descriptions', 'book_links']);
</script>

<style scoped>
/* Shelf Style */
.row_shape{
    /* position */
    position: relative;

    /* shape */
    height: 10vw;

    /* inner shape */
    box-shadow: -2px -2px 2px #efefea inset, 2px 2px 2px #efefea inset;
}

.row_shape:hover{
    z-index: 1;
}

.background_text{
    /* position */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* font */
    font-family: EBGaramond;
    font-size: 2.5vw;
    color: rgb(209, 209, 209);
}

/* Book Designs */
.epoch{
    background-color: #121212;
    color: #E8E92B;
    height: 5vw;
    transform: translateY(1.5vw);
}

.exride{
    background-color: #2563eb;
    color: white;
    height: 5.5vw;
    transform: translateY(1.25vw);
}

.daniel{
    background-color: #8b8289;
    color: #B2BEB5;
    font-weight: bold;
    font-style: italic;
    height: 5vw;
    transform: translateY(1vw);
}

.blog{
    background-color: #3D0C02;
    color: #60898f;
    font-weight: bold;
    border-right: solid rgb(56, 56, 56) 1px;
    height: 8vw;
    transform: translateY(-1vw);
}

.voithos{
    background-color: #cba5a5;
    color: #F0FFFF;
    height: 6vw;
    transform: translateY(1vw);
}

.linkedin{
    background-color: #0072b1;
    color: white;
    font-weight: bold;
    font-style: italic;
}
</style>