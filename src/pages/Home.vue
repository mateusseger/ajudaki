<template>
    <main>

        <div id="boas-vindas" class="container">
        
            <img src="@/assets/banner.jpeg" alt="banner" id="banner">

            <h2>Tempos difíceis podem ser superados quando somos solidários com o próximo. Peça ajuda ou ajude algúem.</h2>
            
        </div>
    </main>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {

        }
    }
}
</script>

<style scoped>

main {
    display: flex;
    align-items: center;
}

#boas-vindas {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

#banner {
    width: 400px;
}

h2 {
    max-width: 55vw;
}

@media (min-width:700px) {
    #banner {
        width: 550px;
    }
}
</style>