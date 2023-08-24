<template>
    <div class="main">
        <div class="canvas flex justify-center items-center">
            <div class="book_cover_left">
                <div class="left_page_header"></div>
                <div class="left_page"></div>
                <div class="left_page_footer"></div>
            </div>
            <div class="book_cover_right">
                <div class="right_page_header"></div>
                <div class="right_page"></div>
                <div class="right_page_footer"></div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
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
/* *********************************Book******************************* */
/* ******************************************************************** */
.book_cover_left{
    /* shape */
    /* border: solid black 1px; */
    width: 35vw;
    height: 45vw;
    border: solid white 1px;

    /* inner shape */
    background-color: #592720;
    position: relative;
}

.left_page_header{
    /* position */
    margin-left: 5%;
    margin-top: 1%;

    /* shape */
    width: 95%;
    height: 10%;
    transform: rotate(-2deg);
    border-top-right-radius: 25%;

    /* inner shape */
    background-color: var(--ceramic-white);
    border-top: solid rgb(121, 121, 121) 1px;

    /* position */
    position: absolute;

    /* interaction */
    z-index: 1;
}

.left_page{
    margin-left: 5%;
    margin-top: 8%;

    width: 95%;
    height: 90%;
    background-color: var(--ceramic-white);

    position: absolute;
}

.left_page_footer{
    /* position */
    margin-left: 5%;
    margin-top: 115%;

    /* shape */
    width: 95%;
    height: 10%;
    transform: rotate(2deg);
    border-bottom-right-radius: 25%;

    /* inner shape */
    background-color: var(--ceramic-white);
    border-bottom: solid rgb(121, 121, 121) 1px;

    /* position */
    position: absolute;

    /* interaction */
    z-index: 1;
}

.book_cover_right{
    /* shape */
    width: 35vw;
    height: 45vw;
    
    /* inner shape */
    background-color: #592720;
    position: relative;
}

.right_page_header{
    /* position */
    margin-right: 5%;
    margin-top: 1%;

    /* shape */
    width: 95%;
    height: 10%;
    transform: rotate(2deg);
    border-top-left-radius: 25%;

    /* inner shape */
    background-color: var(--ceramic-white);
    border-top: solid rgb(121, 121, 121) 1px;

    /* position */
    position: absolute;

    /* interaction */
    z-index: 1;
}

.right_page{
    margin-right: 5%;
    margin-top: 8%;

    width: 95%;
    height: 90%;
    background-color: var(--ceramic-white);

    position: absolute;
}

.right_page_footer{
    /* position */
    margin-right: 5%;
    margin-top: 115%;

    /* shape */
    width: 95%;
    height: 10%;
    transform: rotate(-2deg);
    border-bottom-left-radius: 25%;

    /* inner shape */
    background-color: var(--ceramic-white);
    border-bottom: solid rgb(121, 121, 121) 1px;

    /* position */
    position: absolute;

    /* interaction */
    z-index: 1;
}
</style>