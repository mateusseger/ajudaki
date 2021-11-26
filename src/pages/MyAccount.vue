<template>
  <main>
    <section id="my-account" class="container">
      <h2>Minha Conta</h2>

      <nav class="nav-tabs">

        <ul>

          <li>
            <input type="radio" name="tab" class="tab" id="tab1" checked />
            <label for="tab1">Dados cadastrais</label>
            <div class="content">

              <img src="@/assets/perfil.png" alt="Perfil">
              <label for="file">Alterar foto de perfil</label>
              <input type="file" id="file">
              

              <input
                type="text"
                placeholder="Nome"
                required
              />

              <input
                type="text"
                placeholder="Sobrenome"
                required
              />

              <input
                type="number"
                placeholder="Idade"
                required
              />

              <input
                type="text"
                placeholder="Endereço"
                required
              />

              <input
                type="number"
                placeholder="CEP"
                required
              />

              <input
                type="text"
                placeholder="Cidade"
                required
              />

              <input
                type="text"
                placeholder="Estado"
                required
              />

              <button class="button-pink">Salvar</button>

            </div>
          </li>

          <li>
            <input type="radio" name="tab" class="tab" id="tab2" />
            <label for="tab2">Minhas campanhas</label>
            <div class="content">
              <div class="request">

              </div>


            </div>
          </li>

        </ul>
      </nav>
    </section>



  </main>
</template>

<script>
export default {
  name: "MyAccount",
  data() {
    return {};
  },
};
</script>

<style scoped>

#my-account {
  display: flex;
  flex-direction: column;
}

.nav-tabs img{
  width: 100px;
  border-radius: 7px;
}

.nav-tabs .content label {
  font-size: 16px;
  text-decoration: underline;
  display: flex;
  align-items: center;
  height: 40px;
  width: 165px; 
  font-weight: 600;
  margin: 5px 0 15px 0;
  border-radius: 7px;
}

.nav-tabs .content label:hover {
  background-color: #e0e0e0;
  opacity: 1;
}

.nav-tabs input[type="file"] {
  display: none;
}

.content {
  display: none;
  position: absolute;
  width: 90%;
  left: 5%;
  margin-top: 25px;
}

input[type="text"],
input[type="number"],
input[type="email"] {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid black;
}

@media (min-width: 700px) {
  #my-account {
    align-items: center;
  }

  .nav-tabs .content  {
    align-items: center;
  }

  .nav-tabs input {
    width: 100%;
    max-width: 400px;
  }
}

</style>