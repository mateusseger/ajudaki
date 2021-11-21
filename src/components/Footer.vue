<template>
    <footer>
        <a href="/">Sobre nós</a>
        <span>|</span>
        <a href="/">Dúvidas frequentes</a>
        <span>|</span>
        <a href="/">Contato</a>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {

        }
    }
}
</script>

<style scoped>

footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
}

a {
    padding: 15px;
}

span {
    display: none;
}


@media (min-width: 700px) {
    footer {
        flex-direction: row;
        justify-content: center;
    }

    span {
        display: inline;
    }
}
</style>