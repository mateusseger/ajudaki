<template>
  <main>
    <section id="request-help" class="container">
      <h2>Novo pedido de ajuda</h2>

      <nav class="nav-tabs">
        <ul>
          <li id="desc">
            <input type="radio" name="tab" class="tab" id="tab1" checked />
            <label for="tab1">Descrição</label>
            <div class="content">
              <input
                type="text"
                placeholder="Título do seu pedido (seja breve)*"
                required
              />

              <textarea
                name="description"
                placeholder="Conte um pouco sobre você e/ou o porque você precisa de ajuda*"
                required
              ></textarea>
            </div>
          </li>
          <li id="photos">
            <input type="radio" name="tab" class="tab" id="tab2" />
            <label for="tab2">Fotos</label>
            <div class="content">
              <h4>Selecione as fotos que deseja cadastrar no pedido*</h4>
              <label for="file">Escolher arquivos</label>
              <input type="file" id="file" name="myfile" accept="image/png, image/jpeg" multiple>
            </div>
          </li>
          <li id="contact">
            <input type="radio" name="tab" class="tab" id="tab3" />
            <label for="tab3">Contato</label>
            <div class="content">
              <input type="cel" placeholder="Digite seu número de telefone*" required>
              <input type="email" placeholder="Digite seu e-mail*" required>
            </div>
          </li>
          <li id="ways-to-help">
            <input type="radio" name="tab" class="tab" id="tab4" />
            <label for="tab4">Banco</label>
            <div class="content">
              <h4> Chave PIX:</h4>
              <input type="text" placeholder="Informe sua chave PIX">

              <h4> Dados Bancários:</h4>
              <input type="text" placeholder="Informe o código da agência">
              <input type="text" placeholder="Informe o número da conta">
              <input type="text" placeholder="Informe seu CPF">
              <input type="text" placeholder="Informe o banco">
            </div>
          </li>
        </ul>
        <div class="aux"></div>
      </nav>

      <button class="button-pink">Criar Campanha</button>
      <button class="button-white">Cancelar</button>
    </section>
  </main>
</template>

<script>
export default {
  name: "RequestHelp",
  data() {
    return {};
  },
};
</script>

<style scoped>
#request-help {
  display: flex;
  flex-direction: column;
}

.aux {
  height: 450px;
}

input[type="text"],
input[type="cel"],
input[type="email"],
textarea {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid black;
}

#desc .content textarea {
  height: 350px;
}

#photos .content input {
  display: none;
}

#photos .content label {
  font-size: 16px;
  display: flex;
  font-weight: 600;
  text-decoration: underline;
  align-items: center;
  height: 40px;
  width: 165px;
  margin-top: 15px;
  border-radius: 7px;
}

#photos .content label:hover {
  background-color: #e0e0e0;
  opacity: 1;
}

#ways-to-help .content h4 {
  margin-bottom: 10px;
}

#ways-to-help .content h4:nth-child(3) {
  margin-top: 10px;
}

#ways-to-help .content input {
  padding: 5px;
  margin-bottom: 5px;
}

button {
  margin-bottom: 15px;
}
</style>