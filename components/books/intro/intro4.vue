<template>
    <div class="right_page">
        <article>

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
