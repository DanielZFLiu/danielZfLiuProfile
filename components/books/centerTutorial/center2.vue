<template>
    <div class="right_page">
        <article>
            <!-- header -->
            <header>Daniel Liu</header>

            <!-- outer_div -->
            <div style="border: solid black 2px;
                border-radius: 1vw;
                height: 5vw;
                font-family: 'Crimson Text';
                font-size: 1.2vw;
                margin-bottom: 4vw;
                top: 3vw;
                
                position: relative;">

                <!-- inner_div -->
                <div style="width: max-content;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);">
                    Vertically and Horizontally Centered
                </div>
            </div>

            <div class="code h-[11vw]">
                .inner_div{<br>
                &nbsp position: absolute;<br>
                &nbsp left: 50%; <br>
                &nbsp top: 50%; <br>
                &nbsp transform: translate(-50%, -50%);<br>
                }
            </div>

            <!-- outer_div -->
            <div style="border: solid black 2px;
                border-radius: 1vw;
                height: 3vw;
                font-family: 'Crimson Text';
                font-size: 1.2vw;
                margin-top: 1vw;
                margin-bottom: 1vw;">

                <!-- inner div -->
                <div style="margin-left: auto; margin-right: auto; width: max-content;">
                    Horizontally Centered
                </div>
            </div>

            <div class="code h-[12.5vw]">
                .outer_div{<br>
                &nbsp text-align: center;<br>
                }<br>
                /* or */<br>
                .inner_div{<br>
                &nbsp margin-left: auto; margin-right: auto;<br>
                }
            </div>

            <!-- https://daniel-zf-liu-profile.vercel.app/center -->

            <!-- footer -->
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
}

.code{
    /* shape */
    border-radius: 1vw;

    /* font */
    font-size: 1vw;
    font-family: monospace;
    color: white;

    /* inner shape */
    background-color: black;
    padding: 1vw;

    /* interaction */
    overflow-y: auto;
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
