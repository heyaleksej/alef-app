<template>
  <footer class="footer">
      <div class="container">
        <div class="footer__nav">
          <div class="nav-wrapper">
            <h6 class="footer__title">Покупателям</h6>
            <ul class="footer__list">
              <li class="footer__item"><a href="">Каталог</a></li>
              <li class="footer__item"><a href="">Акции</a></li>
              <li class="footer__item"><a href="">Бренды</a></li>
            </ul>
          </div>

          <div>
            <h6 class="footer__title">О нас</h6>
            <ul class="footer__list">
              <li><a href="">О компании</a></li>
              <li><a href="">Новости</a></li>
              <li><a href="">Команда</a></li>
            </ul>
          </div>
        </div>

        <div class="footer__sale">
          <h6 class="footer__title">Узнайте первыми о новинках и акциях</h6>
          <form
                action="https://vuejs.org/"
                method="post"
                class="footer__form">
            <img @click="resetMail" src="./../assets/close.svg">
            <input type="email" v-model="email" name="email" placeholder="Адрес электронной почты" formnovalidate/>
            <button type="submit">Подписаться</button>
          </form>
        </div>
      </div>
  </footer>
</template>

<script>

export default ({
  data() {
    return {email: null}
  },

  methods: {
    resetMail: function () {
      return this.email = "";
    }
  }
})
</script>

<style scoped lang="scss">
@import "./src/assets/styles/variables";

.footer {
  margin-bottom: 20px;
  margin-top: auto;
  @media screen and (max-width: $breakpoint-xxs) {
    display: block;
  }

  &__nav {
    color: #333333;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    gap: 200px;
    margin-bottom: 40px;

  }

  &__title {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  &__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 8px;
  }

  &__item {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.04em;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;

    &:hover,
    &:active {
      opacity: 0.4;
    }
  }

  &__sale {
    margin-left: auto;
  }

  &__form {
    width: 100%;
    position: relative;
    margin-top: 10px;

    img {
      position: absolute;
      cursor: pointer;
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
      right: 14px;
      top: 8px;

      &:hover,
      &:active {
      transform: rotate(90deg);
      }
    }

    input {
      width: 100%;
      padding: 8px 0 8px 8px;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid #C4C4C4;
      margin-bottom: 35px;
      transition: all 0.3s;


      &:hover,
      &:active {
        border-bottom: 1px solid #333333;

        &::placeholder {
          color: #333333;
        }
      }
    }

    button {
      background: #FFFFFF;
      border: 1px solid #333333;
      padding: 8px 28px;
      font-size: 14px;
      line-height: 20px;
      margin-left: auto;

      &:hover,
      &:active {
        background: #333333;
        color: #fff;
      }
    }
  }

  @media screen and (max-width: $breakpoint-sm) {
    &__nav {
      gap: 100px;
    }
  }

  @media screen and (max-width: $breakpoint-xs) {
    &__nav {
      gap: 50px;
    }
  }

  @media screen and (max-width: 400px) {
    &__nav {
      gap: 0;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    &__body {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    &__sale {
      margin-top: 38px;
      margin-left: 0;
      width: 100%;
    }
  }

}

</style>

