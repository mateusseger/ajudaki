<template>
  <main>
    <section id="offer-help" class="container">
      <h2>Título da ajuda</h2>

      <div class="carousel">
        <div class="slide fade">
          <div class="numbertext">1 / 3</div>
          <img src="@/assets/slide1.jpg" style="width: 100%;" />
        </div>

        <div class="slide fade">
          <div class="numbertext">2 / 3</div>
          <img src="@/assets/slide2.jpg" style="width: 100%" />
        </div>

        <div class="slide">
          <div class="numbertext fade">3 / 3</div>
          <img src="@/assets/slide3.jpg" style="width: 100%" />
        </div>

        <a class="prev" @click="plusSlides(-1)">&#10094;</a>
        <a class="next" @click="plusSlides(1)">&#10095;</a>
      </div>
      <br />

      <div style="text-align: center">
        <span class="dot" @click="currentSlide(1)"></span>
        <span class="dot" @click="currentSlide(2)"></span>
        <span class="dot" @click="currentSlide(3)"></span>
      </div>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <nav class="nav-tabs">
        <ul>
          <li>
            <input type="radio" name="tab" class="tab" id="tab1" checked />
            <label for="tab1">Cartão</label>
            <div class="content">
              <h4>Valor:</h4>
              <input type="number" min="1" step="any" />

              <h4>Forma de pagamento:</h4>
              <select name="select">
                <option value="value1">Cartão de crédito</option>
                <option value="value2">Cartão de débito</option>
              </select>

              <h4>Número do cartão:</h4>
              <input type="text" />

              <div>
                <div>
                  <h4>Validade:</h4>
                  <input type="text" />
                </div>

                <div>
                  <h4>CVV:</h4>
                  <input type="text" />
                </div>
              </div>
            </div>
          </li>
          <li>
            <input type="radio" name="tab" class="tab" id="tab2" />
            <label for="tab2">PIX</label>
            <div class="content">teste2</div>
          </li>
          <li>
            <input type="radio" name="tab" class="tab" id="tab3" />
            <label for="tab3">Depósito</label>
            <div class="content">teste3</div>
          </li>
          <li>
            <input type="radio" name="tab" class="tab" id="tab4" />
            <label for="tab4">Outros</label>
            <div class="content">teste4</div>
          </li>
        </ul>
        <div class="aux"></div>
      </nav>

      <button class="button-pink">Finalizar pagamento</button>
    </section>
  </main>
</template>

<script>
export default {
  name: "OfferHelp",
  data() {
    return {
      slideIndex: 1,
    };
  },
  methods: {
    plusSlides: function (n) {
      this.showSlides(this.slideIndex += n);
    },

    currentSlide: function (n) {
      this.showSlides((this.slideIndex = n));
    },

    showSlides: function (n) {
      var i;
      var slides = document.getElementsByClassName("slide");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    },
  },
  mounted() {
    this.showSlides(this.slideIndex);
  },
};
</script>

<style scoped>
#offer-help {
  display: flex;
  flex-direction: column;
}

h2 {
  margin-bottom: 30px;
}

.carousel {
  width: 100%;
  position: relative;
}

.slide {
  display: none;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: var(--color-grey);
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px 30px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: var(--color-grey);;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
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
select {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid black;
}

.nav-tabs .content div {
  display: flex;
  justify-content: space-between;
}

.nav-tabs .content div div {
  display: flex;
  flex-direction: column;
}

.aux {
  height: 340px;
}

.button-pink {
  margin-bottom: 30px;
}

@media(min-width: 700px) {
  #offer-help {
    align-items: center;
  }
  .carousel{
    max-width: 600px;
  }
  .nav-tabs {
    width: 100%;

  }
  .content {
   max-width: 600px;
  }

  .button-pink {
    align-self: flex-start;
  }

}
</style>