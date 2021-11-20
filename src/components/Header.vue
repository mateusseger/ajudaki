<template>
    <header>

        <nav class="container">

            <router-link to="/">
                <img src="@/assets/logo.png" alt="ajudaki" id="logo">Ajudaki
            </router-link>

            <div id="search" :class="{active:searchActive}">
                <input placeholder="Pesquisar">
            </div>

            <div id="menu-right">

                <span v-on:click="openSearch"><i class="fas fa-search fa-lg"></i></span>

                <button class="active" @click="$router.push('RequestHelp')">Pedir Ajuda</button>

                <button @click="$router.push('Login')">Minha Conta</button>

            </div>
        </nav>

    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            searchActive: false
        }
    },
    methods: {
        openSearch: function() {
            this.searchActive = !this.searchActive
        }
    }
}
</script>

<style scoped>

header {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
}

nav {
    display: flex;
    height: 70px;
    align-items: center;
    justify-content: space-between;
}

nav a {
    display: flex;
    align-items: center;
    font-family: 'IBM Plex Sans Bold';
    font-size: 24px;
}

#logo {
    width: 40px;
}

button {
    border: 1px solid var(--color-grey);
    border-radius: 7px;
    background-color: #ffffff;
    color: var(--color-grey);
}

button.active {
    display: none;
    margin-right: 30px;
    background-color: var(--color-pink);
    color: #ffffff;
    border: 1px solid var(--color-pink);
}

#search {
    display: none;
    position: absolute;
    top: 75px;
    left: 0;
}

#search.active {
    display: flex;
}

#search input {
    width: 100vw;
    height: 40px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid var(--color-grey);
    
}

#search input:focus {
    outline: 0;
}

.fa-search {
    cursor: pointer;
    color: var(--color-grey);
    transition: 0.2s opacity;
    margin-right: 30px;
} 

.fa-search:hover {
    opacity: 0.8;
}

@media (min-width:700px) {
    button.active {
        display: inline;
    }

    .fa-search {
        display: none;
    }

    #search {
        display: flex;
        position: relative;
        top:0;
    }

    #search input {
        height: 30px;
        width: 25vw;
        border: none;
        background-color: #E0E0E0;
        border-radius: 7px;
    }
    #search input::placeholder {
        color: var(--color-grey);
    }
    
}

</style>