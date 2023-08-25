<template>
    <div class="book tooltip" :data-tip="description">
        <a :href="link">
            {{ title }}
        </a>
    </div>
</template>

<script>
export default {
    mounted() { },
    data() {
        return {
        };
    },
    methods: {
        // externalLink(){
        //     if (this.link.includes('/')) {
        //         return true;
        //     }
        //     else{
        //         return false;
        //     }
        // }
    },
    props: {
        title: String, 
        description: String, 
        link: String,
    },
    setup(props){
    }
}
</script>

<style scoped>
.book{
    /* shape */
    width: 2.5vw;
    height: 7vw;
    border-radius: 5px;

    /* position */
    margin-top: 3vw;

    /* inner shape */
    display: inline-flex;
    justify-content: center;
    align-items: center;

    /* font */
    font-family: EBGaramond;
}

.book:hover{
    /* interaction */
    z-index: 1;
}

.book a{
    /* shape */
    transform: rotate(90deg);

    /* font */
    font-size: 1.2vw;
}
</style>