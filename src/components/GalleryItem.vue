<template>
  <div class="photos__wrapper">

    <div v-for="(item, idx) in photos"
         :key="item"
         :class="[idx === 0 ? 'photos__main': 'photos__all']"
    >
      <a href="" :class="[idx === 0 ? 'photos__main-photo': 'photos__item']">
        <img :src="require(`../assets/img/` + item)" :alt="'photo'">
        <div class="photos__hover">
          <img src="../assets/icons/show-more.svg" class="photos__slides" alt="photo">
          <div class="photos__center">
            <div class="photos__cart">
              <img src="../assets/icons/cart.svg" alt="cart">
              <p>Узнай, что на мне</p>
            </div>
            <div class="photos__like">
              <img src="../assets/icons/like.svg" alt="like">
              <p>200</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>


<script setup>
const photos = [
  "img01.png",
  "img02.png",
  "img03.png",
  "img04.png",
  "img05.png",
]

</script>

<style scoped lang="scss">
@import "./src/assets/styles/variables";


.photos {
  margin-bottom: 100px;

  &__wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-auto-rows: auto;
    gap: 10px;
    justify-content: center;
    @media screen and (max-width: $breakpoint-sm) {
      grid-template-columns: unset;

    }
  }

  &__main {
    grid-area: 1;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    gap: 10px
  }

  &__main-photo {
    position: relative;
    max-width: 611px;
    max-height: 611px;

    img {
      -o-object-fit: cover;
      object-fit: cover;
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__hover {
    background: #333333;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: white;
    z-index: 20;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;

    &:hover,
    &:active {
      opacity: 0.8;
    }
  }

  &__slides {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 16px;
    right: 16px;
  }

  &__center {
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    z-index: 3;
    height: 100%;

    img {
      width: 48px;
      height: 48px;
      margin-bottom: 7px;
    }
  }

  &__cart {
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    margin-top: auto;
  }

  &__all {
    display: -ms-grid;
    gap: 10px;
    max-height: 300px;
    max-width: 300px;

  }

  &__item {
    position: relative;
    max-width: 100%;
    max-height: 100%;


    img {
      max-width: 100%;
      max-height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }


  &__like {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 16px;
    margin-top: auto;

    img {
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
      margin-right: 6px;
      max-height: 16px;
      max-width: 16px;

      &:hover {
        -webkit-transform: scale(1.3, 1.3);
        -ms-transform: scale(1.3, 1.3);
        transform: scale(1.3, 1.3);
      }
    }
  }


  @media screen and (max-width: 768px) {
    &__body {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      align-items: center;
    }

    &__body {
      gap: 8px;
    }

    &__all {
      gap: 8px;
    }

    &__styles {
      margin: 58px 0;
    }

    & {
      margin-bottom: 30px;
    }
  }

}
</style>