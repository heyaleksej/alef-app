<template>
  <header class="header">
    <div class="container header__container">
      <a class="header__logo" href="/"><img src="../assets/img/logo.svg" alt="Логотип" class="header__logo"></a>
      <div class="header__icons">
        <a href="/" class="header__icon">
          <img src="./../assets/people.svg"/>
        </a>
        <a href="/" class="header__icon">
          <img src="./../assets/heart.svg"/>
        </a>
        <a href="/" class="header__icon">
          <img src="./../assets/cart.svg"/>
        </a>
        <button @click.stop="menuToggle" ref="burger" class="header__burger">
          <span></span>
        </button>
      </div>
      <div @click.self="menuToggle" ref="menu" class="menu">
        <ul class="menu__content">
          <li><a href="" class="link-underline">Постельное белье</a></li>
          <li><a href="" class="link-underline">Одежда для дома</a></li>
          <li><a href="" class="link-underline">Одежда для улицы</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import {ref, onMounted} from "vue";

const burger = ref();
const header = ref();
const menu = ref();
const menuToggle = () => {
  burger.value.classList.toggle("_active-menu");
  menu.value.classList.toggle("_active-menu");
  document.body.classList.toggle('_fixed')
};
let lastKnownScrollY = 0
let currentScrollY = 0
let ticking = false
const classes = {
  pinned: "_visible",
  unpinned: "_hidden",
}
const onScroll = () => {
  currentScrollY = window.pageYOffset
  requestTick();
}
const requestTick = () => {
  if (!ticking) {
    requestAnimationFrame(update)
  }
  ticking = true
}
const update = () => {
  if (currentScrollY < lastKnownScrollY) {
    pin()
  } else if (currentScrollY > lastKnownScrollY) {
    unpin()
  }
  lastKnownScrollY = currentScrollY
  ticking = false
}
const pin = () => {
  if (header.value.classList.contains(classes.unpinned)) {
    header.value.classList.remove(classes.unpinned)
    header.value.classList.add(classes.pinned)
  }
}
const unpin = () => {
  if (
      header.value.classList.contains(classes.pinned) ||
      !header.value.classList.contains(classes.unpinned)
  ) {
    header.value.classList.remove(classes.pinned)
    header.value.classList.add(classes.unpinned)
  }
}
onMounted(() => {
  document.addEventListener("scroll", onScroll, false)
})
</script>

<!--<script>-->

<!--const scrollOffset = 80;-->
<!--export default ({-->
<!--  data() {-->
<!--    return ({-->
<!--      show: false,-->
<!--      showNavbar: true,-->
<!--      lastScrollPosition: 0,-->
<!--    });-->
<!--  },-->
<!--  mounted() {-->
<!--    this.lastScrollPosition = window.pageYOffset;-->
<!--    window.addEventListener('scroll', this.onScroll);-->
<!--  },-->
<!--  beforeUnmount() {-->
<!--    window.removeEventListener('scroll', this.onScroll);-->
<!--  },-->

<!--  methods: {-->

<!--    onScroll() {-->
<!--      if (window.pageYOffset < 0) {-->
<!--        return-->
<!--      }-->
<!--      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < scrollOffset) {-->
<!--        return-->
<!--      }-->
<!--      this.showNavbar = window.pageYOffset < this.lastScrollPosition;-->
<!--      this.lastScrollPosition = window.pageYOffset;-->
<!--    }-->
<!--  },-->
<!--});-->
<!--</script>-->


<!--<style scoped lang="scss">-->

<!--.header {-->
<!--  width: 100vw;-->
<!--  border-bottom: 1px solid #E0E0E0;-->
<!--  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);-->
<!--  position: fixed;-->
<!--  height: 50px;-->
<!--  background: #fff;-->
<!--  z-index: 3;-->
<!--  transition: 0.3s all ease-out;-->
<!--  display: flex;-->
<!--  align-items: center;-->

<!--  &__relative {-->
<!--    position: relative;-->
<!--    width: 100%;-->
<!--  }-->

<!--  @media screen and (max-width: 768px) {-->
<!--    & {-->
<!--      border-bottom: none;-->
<!--      -webkit-box-shadow: none;-->
<!--      box-shadow: none;-->
<!--    }-->
<!--  }-->

<!--  &__body {-->
<!--    display: -webkit-box;-->
<!--    display: -ms-flexbox;-->
<!--    display: flex;-->
<!--    -webkit-box-pack: justify;-->
<!--    -ms-flex-pack: justify;-->
<!--    justify-content: space-between;-->
<!--    -webkit-box-align: center;-->
<!--    -ms-flex-align: center;-->
<!--    align-items: center;-->
<!--  }-->

<!--  &__logo {-->
<!--    max-width: 67px;-->
<!--    max-height: 22px;-->
<!--  }-->

<!--  &__icons {-->
<!--    display: -webkit-box;-->
<!--    display: -ms-flexbox;-->
<!--    display: flex;-->
<!--    gap: 24px;-->
<!--    -webkit-box-align: center;-->
<!--    -ms-flex-align: center;-->
<!--    align-items: center;-->

<!--  }-->

<!--  &__icons-item {-->
<!--    padding: 8px;-->

<!--    svg {-->
<!--      -webkit-transition: all 0.3s;-->
<!--      -o-transition: all 0.3s;-->
<!--      transition: all 0.3s;-->
<!--    }-->

<!--    &:hover svg,-->
<!--    &:active svg {-->
<!--      opacity: 0.4;-->
<!--    }-->
<!--  }-->

<!--  &__icons-burger {-->
<!--    display: none;-->

<!--    svg {-->
<!--      z-index: 3;-->
<!--    }-->
<!--  }-->

<!--  &__burger {-->
<!--    background: #fff;-->
<!--    z-index: 2;-->
<!--    width: 100vw;-->
<!--    position: absolute;-->
<!--    left: 0;-->
<!--    top: 0;-->
<!--    padding: 80px 0 0 30px;-->
<!--    text-transform: uppercase;-->
<!--    color: #333333;-->
<!--    font-size: 12px;-->
<!--    -webkit-transition: all 0.1s;-->
<!--    -o-transition: all 0.1s;-->
<!--    transition: all 0.1s;-->

<!--    li {-->
<!--      padding: 15px 0;-->
<!--    }-->
<!--  }-->

<!--  @media screen and (max-width: 768px) {-->
<!--    &__icons-burger {-->
<!--      display: -webkit-box;-->
<!--      display: -ms-flexbox;-->
<!--      display: flex;-->
<!--    }-->

<!--    & {-->
<!--      height: 68px;-->
<!--    }-->
<!--  }-->
<!--}-->

<!--.fade-enter-active,-->
<!--.fade-leave-active {-->
<!--  -webkit-transition: text-shadow 0.3s ease;-->
<!--  -o-transition: text-shadow 0.3s ease;-->
<!--  transition: text-shadow 0.3s ease;-->
<!--}-->

<!--.fade-enter,-->
<!--.fade-leave-to {-->
<!--  opacity: 0;-->
<!--}-->

<!--.navbar__hidden {-->
<!--  box-shadow: none;-->
<!--  transform: translate3d(0, -100%, 0);-->
<!--}-->

<!--</style>-->

<style lang="scss" scoped>
.header {
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 40px;
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
  transition: all 0.6s ease 0s;

  &._hidden {
    transform: translateY(-65px);
  }

  &._visible {
    transform: translateY(0);
  }

  @media(max-width: 767px) {
    position: fixed;
    z-index: 80;
    width: 100%;
    height: 68px;
  }

  &__container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 767px) {
      padding: 0 20px;
    }
  }

  &__logo {
    max-width: 67px;
    max-height: 16px;

    svg {
      max-width: 100%;
    }
  }

  &__icons {
    display: flex;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:first-child) {
      margin-left: 24px;
    }

    transition: all 0.3s ease 0s;
    border-radius: 50%;
    border: 1px solid transparent;
    padding: 4px;

    &:hover {
      border-color: black;
    }
  }

  &__burger {
    display: none;
    @media (max-width: 767px) {
      display: block;
      margin: 2px 0 0 20px;
      position: relative;
      z-index: 2000;
    }
    width: 24px;
    height: 24px;
    padding: 6px 3px;

    &::before,
    &::after,
    span {
      height: 1px;
      width: 18px;
      transition: all 0.3s ease 0s;
      background-color: black;
      display: block;
    }

    &::before {
      content: "";
      margin-bottom: 4px;
    }

    &::after {
      margin-top: 4px;
      content: "";
    }

    &._active-menu {
      span {transform: scale(0);}
      &::before {transform: translateY(4px) rotate(-45deg);}
      &::after {transform: translateY(-6px) rotate(45deg);}
    }
  }
}

.menu {
  display: none;
  @media(max-width: 767px) {
    display: block;
  }
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 100;
  pointer-events: none;

  &__content {
    overflow: auto;
    position: absolute;
    z-index: 200;
    background-color: #fff;
    top: -100%;
    right: 0;
    width: 70%;
    padding: 30px;
    transition: top 0.6s ease 0s;

    li {
      &:not(:last-child) {
        margin-bottom: 30px;
      }

      a {
        display: flex;
        justify-content: end;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
    }
  }

  &._active-menu {
    pointer-events: all;
  }

  &._active-menu &__content {
    top: 80px;
  }
}
</style>