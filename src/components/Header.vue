<template>
  <header class="header"
          :class="{ 'navbar__hidden': !showHeader}">
    <div class="container">
      <a class="logo" href="/"><img src="../assets/icons/logo.svg" alt="logo"></a>
      <div class="icons">
        <a href="/" class="icon">
          <img src="../assets/icons/people.svg"/>
        </a>
        <a href="/" class="icon">
          <img src="../assets/icons/heart.svg"/>
        </a>
        <a href="/" class="icon">
          <img src="../assets/icons/cart-header.svg"/>
        </a>
        <a id="burgerMenu">
          <button class="burgerMenu__btn icon"
                  v-on:click="navOpen=!navOpen"
                  v-bind:class="{active:navOpen}"
                  tabindex="0"
                  @blur="navOpen=false">
            <span class="top"></span>
            <span class="mid"></span>
            <span class="bottom"></span>
          </button>
          <transition name="translateX">
            <nav v-show="navOpen"
                 >
              <div class="burgerMenu__wrapper">
                <ul class="burgerMenu__list container">
                  <li class="burgerMenu__item"><a href="">постельное белье</a></li>
                  <li class="burgerMenu__item"><a href="">одежда для улицы</a></li>
                  <li class="burgerMenu__item"><a href="">одежда для дома</a></li>
                </ul>
              </div>
            </nav>
          </transition>
        </a>
      </div>
    </div>
  </header>
</template>

<script>

export default ({
  data: () => ({
    showHeader: true,
    lastScrollPosition: 0,
    scrollOffset: 40,
    navOpen: false
  }),
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.scrollOffset) {
        return
      }
      this.showHeader = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  }
})

</script>

<style lang="scss" scoped>

@import "./src/assets/styles/variables";

.header {
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  height: 40px;
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
  transform: translateY(0);
  transition: transform 300ms linear;

  @media(max-width: 767px) {
    position: fixed;
    z-index: 80;
    width: 100%;
    height: 68px;
  }

  .container {
    height: 100%;
    justify-content: space-between;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 auto;
  }

  .logo {
    max-width: 67px;
    max-height: 22px;
    line-height: 16px;
  }

  .icons {
    display: flex;

    .icon {
      align-items: center;
      justify-content: center;
      margin-left: 20px;
      transition: all 0.3s ease 0s;
      padding: 4px;

      &:hover {
        filter: contrast(5%) brightness(130%) sepia(60%);
      }
    }
  }
}

.navbar__hidden {
  box-shadow: none;
  transform: translateY(-100%);
}

/** burger **/
#burgerMenu {
  nav {
    height: calc(100% - 40px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100vw;
  }

  .burgerMenu {
    &__btn {
      display: block;
      background: white;
      border: none;
      width: 40px;
      position: relative;
      z-index: 100;
      appearance: none;
      cursor: pointer;
      outline: none;
      filter: none;

      span {
        display: block;
        width: 18px;
        height: 1px;
        margin: auto;
        background: #333333;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: all .4s ease;

        &.top {transform: translateY(-8px)}
        &.bottom {transform: translateY(8px);}
      }

      &.active {
        .top {transform: rotate(-45deg);}
        .mid {
          transform: translateX(-20px) rotate(360deg);
          opacity: 0;
        }
        .bottom {transform: rotate(45deg)}
      }
    }

    &__list {
      display: block;
      right: 0;
      margin-top: 40px;
      list-style: none;
      background: white;
      width: 100%;
      @media(max-width: 767px) {
        margin-top: 67px;
      }
    }

    &__item {
      a {
        display: flex;
        padding: 30px;
        justify-content: flex-end;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
    }
  }
}

.translateX-enter {
  transform: translateX(-200px);
  opacity: 0;
}

.translateX-enter-active, .translateX-leave-active {
  transform-origin: top left 0;
  transition: .2s ease;
}

.translateX-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}


</style>