<template>
  <header>
    <nav class="container">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="ajudaki" id="logo" />Ajudaki
      </router-link>

      <input
        type="text"
        id="search"
        :class="{ active: searchActive }"
        placeholder="Pesquisar"
      />

      <span v-on:click="openSearch"><i class="fas fa-search fa-lg"></i></span>

      <button class="active button-pink" @click="$router.push('RequestHelp')">
        Pedir Ajuda
      </button>

      <button class="button-white" @click="$router.push('Login')">
        Minha Conta
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchActive: false,
    };
  },
  methods: {
    openSearch: function () {
      this.searchActive = !this.searchActive;
    },
  },
};
</script>

<style scoped>
header {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: flex-end;
}

nav a {
  margin-right: auto;
  display: flex;
  align-items: center;
  font-family: "IBM Plex Sans Bold";
  font-size: 24px;
  color: inherit;
}

a {
  text-decoration: none;
}

#logo {
  width: 40px;
}

#search {
  display: none;
  position: absolute;
  top: 75px;
  left: 0;
  width: calc(100vw - 15px);
  padding: 5px 0 5px 10px;
  border: none;
  border-bottom: 1px solid var(--color-grey);
}

#search.active {
  display: inline;
}

input:focus {
  outline: 0;
}

.fa-search {
  cursor: pointer;
  color: var(--color-grey);
  transition: 0.2s;
  margin-right: 30px;
}

.fa-search:hover {
  opacity: 0.8;
}

.button-pink {
  display: none;
  margin-right: 30px;
}

@media (min-width: 700px) {
  nav a {
    margin-right: 0;
  }

  .fa-search {
    display: none;
  }

  #search {
    display: inline;
    position: relative;
    top: 0;
    margin: auto;
    height: 30px;
    max-width: 25vw;
    border: none;
    border-radius: 7px;
    background: #e0e0e0 url("~@/assets/search_black_24dp.svg") no-repeat scroll
      right 10px center;
  }
  #search::placeholder {
    color: var(--color-grey);
  }
}

@media (min-width: 850px) {
  nav a {
    margin-right: 95.58px;
  }

  button.active {
    display: inline;
  }
}
</style>