<template>
  <div class="wrapper ">
    <div class="wrapper-main">
      <img :src="require(`../../assets/img/` + productPhoto)"
           :key="productPhoto" alt="Фото товара"/>
    </div>

    <div class="wrapper-mini">
      <img v-for="(item, idx) in photos"
           :id="idx"
           :key="item"
           @click="changePhoto($event)"
           :src="require(`../../assets/img/` + item)"
           class="wrapper-item"
           alt="Фото товара">
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      productPhoto: "img06.png",
      photos: [
        "img06.png",
        "img07.png",
        "img08.png",
        "img09.png",
        "img10.png",
      ],
    }
  },

  methods: {
    changePhoto: function (event) {
      let idf = event.currentTarget.id;
      this.productPhoto = this.photos[idf];
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables";

.wrapper {
  position: relative;
  width: 50%;

  &-main {
    overflow: hidden;
    height: auto;

    img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }

  &-item {
    z-index: 2;
    width: 70px;
    height: 91px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.5s;

    &:hover,
    &:active {
      opacity: 0.6;
    }
  }

  &-mini {
    position: absolute;
    top: 3%;
    left: 3%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 3vh;
  }
}
//tablets
@media screen and (min-width: $breakpoint-sm) and (max-width: $breakpoint-lg) {
  .wrapper {
    &-main {
      min-height: 430px;
    }

    &-item {
      z-index: 2;
      width: 50px;
      height: auto;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      cursor: pointer;
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 1s;

    }

    &-mini {
      position: absolute;
      top: 3%;
      left: 3%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      gap: 3vh;
    }
  }
}

//mobile
@media screen and (min-width: 300px) and (max-width: $breakpoint-sm) {
  .wrapper {
    width: 100%;
    &-main {
    min-height: 530px;
    }

    &-item {
      z-index: 2;
      width: 50px;
      height: auto;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      cursor: pointer;
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 1s;

      &:hover,
      &:active {
        opacity: 0.6;
      }
    }

    &-mini {
      position: absolute;
      top: 3%;
      left: 3%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      gap: 3vh;
    }
  }
}

//iphone se, galaxy fold(low res)
@media screen and (max-width: 321px) {
  .wrapper {
    width: 100%;
    &-main {
    min-height: 330px;
    }

    &-item {
      z-index: 2;
      width: 40px;
      height: auto;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      cursor: pointer;
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 1s;

    }
    &-mini {
      position: absolute;
      top: 2%;
      left: 2%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      gap: 1vh;
    }
  }
}

</style>