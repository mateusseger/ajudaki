<template>
  <main>
    <section id="welcome" class="container">
      <img src="@/assets/banner.jpeg" alt="banner" />
      <h2>
        Tempos difíceis podem ser superados quando somos solidários com o
        próximo. Peça ajuda ou ajude alguém.
      </h2>
    </section>

    <button @click="$router.push('RequestHelp')">Pedir ajuda</button>

    <section id="content" class="container">
      <section
        class="request-section"
        v-for="(section, index) in sections"
        :key="index"
      >
        <h3>{{ section.titleSection }}</h3>
        <div
          class="request"
          v-for="(request, index) in section.requests"
          :key="index"
        >
          <img src="@/assets/help-me.png" alt="help-me" />
          <div>
            <h4>{{ request.title }}</h4>
            <p>{{ request.desc }}</p>
          </div>
        </div>
        <a href="/">Ver mais</a>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      sections: [
        {
          titleSection: "Ajuda que dá resultado",
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
          ],
        },
        {
          titleSection: "Objetivos quase alcançados",
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
          ],
        },
        {
          titleSection: "Novos pedidos de ajuda",
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
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>

#welcome {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 45px;
}

#welcome img {
  width: 400px;
}

h2 {
  max-width: 55vw;
}

button {
  background-color: var(--color-pink);
  color: #ffffff;
}

#content {
  display: flex;
  flex-direction: column;
  margin: 60px 0 30px 0;
}

.request-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
}

.request-section h3,
a {
  margin-bottom: 25px;
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
  #welcome img {
    width: 550px;
  }

  #content {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .request-section {
    max-width: 250px;
    margin: 0 30px;
  }

  .request {
    flex-direction: column;
    width: 250px;
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

@media (min-width: 850px) {
  button {
    display: none;
  }
}
</style>