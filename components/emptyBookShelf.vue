<template>
    <div class="shelf shadow-xl">
        <ShelfRow bg_text="" :book_names="[]" :book_classes="[]" :book_descriptions="[]" :book_links="[]"/>
        <ShelfRow bg_text="" :book_names="[]" :book_classes="[]" :book_descriptions="[]" :book_links="[]"/>
        <ShelfRow bg_text="" :book_names="[]" :book_classes="[]" :book_descriptions="[]" :book_links="[]"/>
        <ShelfRow bg_text="" :book_names="[]" :book_classes="[]" :book_descriptions="[]" :book_links="[]"/>
        <ShelfRow bg_text="" :book_names="[]" :book_classes="[]" :book_descriptions="[]" :book_links="[]"/>
    </div>
</template>

<script setup>


</script>

<style scoped>
.shelf{
    /* shape */
    width: 50vw;
    height: 75vw;
    border: solid rgb(237, 237, 237) 0.5px;

    /* inner shape */
    background-color: var(--ceramic-white);
    padding: 2vw;
}
</style>