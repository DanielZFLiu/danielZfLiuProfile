<template>
        <div 
            class="open_book_canvas flex justify-center items-center"
            id="openBook">
            <div class="h-full w-full fixed" @click = "closeBook"></div>
            <div class="book_cover_left">
                <button @click="turn_left" class="absolute w-full h-full"></button>
                <div class="left_page_header"></div>
                    <component :is="pages[page_counter]"></component> 
                <div class="left_page_footer"></div>
            </div>
            <div class="book_spine"></div>
            <div class="book_cover_right">
                <button @click="turn_right" class="absolute w-full h-full"></button>
                <div class="right_page_header"></div>
                    <component :is="pages[page_counter + 1]"></component> 
                <div class="right_page_footer"></div>
            </div>
        </div>
</template>

<script>
export default {
    mounted() { },
    data() {
        return {
            page_counter: 0,
        };
    },
    methods: {
        // book closing animation
        closeBook() {
            const book = document.getElementById('openBook');
            book.style.opacity = 0;
            setTimeout(() => {
                book.style.display = 'none';
            }, 1000);
        },
        turn_left(){
            if (this.page_counter != 0) {
                this.page_counter -= 2;
            }
        },
        turn_right(){
            if (this.page_counter + 2 != this.pages.length) {
                this.page_counter += 2;
            }
        },
    },
    props: {
        id: String,
    },
    setup(props){
        // https://github.com/nuxt/nuxt/issues/14036
        // resolveComponent accepts string, not variables
        let pages;
        if (props.id === "intro") {
            let page1 = resolveComponent('BooksIntroIntro1');
            let page2 = resolveComponent('BooksIntroIntro2');
            let page3 = resolveComponent('BooksIntroIntro3');
            let page4 = resolveComponent('BooksIntroIntro4');
            pages = [page1, page2, page3, page4];
        }
        else if(props.id === "center"){
            let left_page = resolveComponent('BooksCenterTutorialCenter1');
            let right_page = resolveComponent('BooksCenterTutorialCenter2');
            pages = [left_page, right_page];
        }
        else if(props.id === "csc301"){
            let left_page = resolveComponent('Books301PitchPitch1');
            let right_page = resolveComponent('Books301PitchPitch2');
            let page3 = resolveComponent('Books301PitchPitch3');
            let page4 = resolveComponent('BooksIntroIntro4');
            pages = [left_page, right_page, page3, page4];
        }
        return {pages};
    },
    mounted(){
        // book opening animation
        const book = document.getElementById('openBook');
        book.style.opacity = 1;
    }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Crimson+Text:400,700,900,400italic,700italic,900italic|Playfair+Display:400,700,900,400italic,700italic,900italic|Rock+Salt:400);

@font-face {
  font-family: "EBGaramond";
  src: local("EBGaramond"),
    url("../assets/EBGaramond-VariableFont_wght.ttf") format("truetype");
}

.open_book_canvas{
    --ceramic-white: #FEFEFA;
    --soap-stone-white: #FBFBFE;

    /* position */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    /* interaction */
    z-index: 1;

    /* inner shape */
    opacity: 0;
    transition: opacity 1s;
    /* animation: openBook 0.5s forwards; */
}

/* @keyframes openBook {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
} */

/* @keyframes closeBook {
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
        display: none;
    }
} */


/* ******************************************************************** */
/* *********************************Book******************************* */
/* ******************************************************************** */
.book_cover_left{
    /* shape */
    width: 35vw;
    height: 45vw;
    border-top: solid rgb(121, 121, 121) 1px;
    border-bottom: solid rgb(121, 121, 121) 1px;
    border-left: solid rgb(121, 121, 121) 1px;
    border-top-left-radius: 1vw;
    border-bottom-left-radius: 1vw;

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

.book_spine{
    position: absolute;
    width: 5vw;
    height: 45vw;
    background: linear-gradient(to right, transparent 0%,rgba(0,0,0,0.2) 46%,rgba(0,0,0,0.5) 49%,rgba(0,0,0,0.6) 50%,rgba(0,0,0,0.5) 51%,rgba(0,0,0,0.2) 52%,transparent 100%);
    z-index: 3;
}

.book_cover_right{
    /* shape */
    width: 35vw;
    height: 45vw;    
    border-top: solid rgb(121, 121, 121) 1px;
    border-bottom: solid rgb(121, 121, 121) 1px;
    border-right: solid rgb(121, 121, 121) 1px;
    border-top-right-radius: 1vw;
    border-bottom-right-radius: 1vw;
    
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