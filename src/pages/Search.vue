<template>
  <main>
    <section id="search" class="container">
      <h2>Termo pesquisado: {{ term }}</h2>
      <header>
        <h4>Filtros</h4>
        <select name="select">
          <option value="value1">Mais relevantes</option>
          <option value="value1">Mais recentes</option>
          <option value="value1">Mais antigos</option>
        </select>
      </header>

      <ul class="filters">
        <li><a href="">Em dinheiro</a></li>
        <li><a href="">Roupas</a></li>
        <li><a href="">Brinquedos</a></li>
        <li><a href="">Materiais de construção</a></li>
        <li><a href="">Alimentos</a></li>
        <li><a href="">Mão de obra</a></li>
      </ul>

      <div class="result-set">
        <div
          class="request"
          v-for="(request, index) in requests"
          :key="index"
          @click="$router.push('OfferHelp')"
        >
          <img src="@/assets/help-me.png" alt="help-me" />
          <div>
            <h4>{{ request.title }}</h4>
            <p>{{ request.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      term: "Título da ajuda",
      requests: [
        {
          title: "Título da ajuda",
          desc: "Breve descrição do objetivo alcançado",
          img: "",
        },
        {
          title: "Título da ajuda",
          desc: "Breve descrição do objetivo alcançado",
          img: "",
        },
        {
          title: "Título da ajuda",
          desc: "Breve descrição do objetivo alcançado",
          img: "",
        },
        {
          title: "Título da ajuda",
          desc: "Breve descrição do objetivo alcançado",
          img: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
#search {
  display: flex;
  flex-direction: column;
}

#search h2 {
  margin-bottom: 30px;
}

#search header {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}

#search header select {
  border-radius: 5px;
}

#search .filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 30px;
}

.filters li {
  margin: 0 15px 20px 0;
}

.filters li a {
  text-decoration: none;
  padding: 5px;
  border: 1px solid var(--color-grey);
  border-radius: 7px;
}

.request {
  border: 1px solid var(--color-grey);
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  cursor: pointer;
  transition: 0.2s;
}

.request:hover {
  box-shadow: -1px -1px 11px 1px rgba(0, 0, 0, 0.41);
}

.request img {
  border: 1px solid var(--color-grey);
  border-radius: 10px;
  width: 150px;
}

.request h4,
p {
  padding: 5px 10px;
}

@media (min-width: 700px) {
.result-set {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

  .request {
    flex-direction: column;
    width: 250px;
    margin-right: 30px;
  }

  .request img {
    width: 250px;
    height: 120px;
    object-fit: cover;
  }

  .request img,
  p {
    margin-bottom: 5px;
  }
}
</style>