<template>
  <footer class="footer">
      <div class="container">
        <div class="nav">
          <div>
            <h6 class="title">Покупателям</h6>
            <ul class="list">
              <li class="item"><a href="">Каталог</a></li>
              <li class="item"><a href="">Акции</a></li>
              <li class="item"><a href="">Бренды</a></li>
            </ul>
          </div>

          <div>
            <h6 class="title">О нас</h6>
            <ul class="list">
              <li class="item"><a href="">О компании</a></li>
              <li class="item"><a href="">Новости</a></li>
              <li class="item"><a href="">Команда</a></li>
            </ul>
          </div>
        </div>

        <div class="sale">
          <h6 class="title">Узнайте первыми о новинках и акциях</h6>
          <form
                action="https://vuejs.org/"
                method="post"
                class="form">
            <img @click="resetMail" src="../assets/icons/close.svg">
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

  .nav {
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

  .title {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 8px;
  }

  .item {
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

  .sale {
    margin-left: auto;
  }

  .form {
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
    .nav {
      gap: 100px;
    }
  }

  @media screen and (max-width: $breakpoint-xxs) {
    .nav {
      gap: 50px;
    }
  }

  @media screen and (max-width: 400px) {
    .nav {
      gap: 0;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .body {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .sale {
      margin-top: 38px;
      margin-left: 0;
      width: 100%;
    }
  }

}

</style>

