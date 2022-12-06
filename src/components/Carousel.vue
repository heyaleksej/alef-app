<template>
  <div class="wrapper">
    <div class="wrapper-main">
      <img :src="require(`../assets/img/` + productPhoto)"
           :key="productPhoto" alt="Фото с товаром"/>
    </div>

    <div class="wrapper-mini">
      <img v-for="(item, idx) in photos"
           :id="idx"
           :key="item"
           @click="changePhoto($event)"
           :src="require(`../assets/img/` + item)"
           class="wrapper-item"
           alt="Фото с товаром">
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
        "img07.png",
        "img08.png",
        "img09.png",
        "img10.png",
      ],
    }
  },

  methods: {
    changePhoto: function (event) {
      let targetId = event.currentTarget.id;
      this.productPhoto = this.photos[targetId];
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;

  &-main {
    overflow: hidden;
    width: 686px;
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

</style>