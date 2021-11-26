<template>
  <main>
    <section id="login" class="container">
      <h2>Login</h2>
      <p>Usuário</p>
      <input type="text" />
      <p>Senha</p>
      <input type="password" />

      <button class="button-pink" @click="$router.push('MyAccount')">
        Entrar
      </button>

      <a href="/">Esqueceu a senha?</a>

      <button class="button-white">Cadastra-se</button>
    </section>
  </main>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
};
</script>

<style scoped>

#login {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin-bottom: 30px;
}

p {
  align-self: flex-start;
}

#login input {
  width: 100%;
  margin: 7px 0 15px 0;
  height: 40px;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid black;
}

.button-pink {
  width: 100%;
  margin: 15px 0;
}

button:last-child {
  width: 50%;
  margin: 40px 0;
}

@media (min-width: 700px) {
  #login {
    max-width: 400px;
  }

  .button-pink {
    width: auto;
    align-self: flex-end;
  }

  a {
    position: relative;
    top: -45px;
    left: 55px;
  }

  button:last-child {
    position: relative;
    top: -45px;
  }
}
</style>