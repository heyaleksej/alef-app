<template>
  <div class="wrapper container__photo">
    <div class="photos">
      <a href="" class="photos__position">Посмотреть все стили</a>
      <GalleryItem/>
    </div>
  </div>
</template>

<script>
import GalleryItem from "@/components/content/GalleryItem";

export default {
  components: {
    GalleryItem
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables";

.wrapper {
  display: flex;
  flex-direction: column;


  .photos {
    margin-bottom: 100px;
    @media screen and (max-width: $breakpoint-sm) {
      margin-bottom: 20px;
    }

    &__position {
      font-size: 14px;
      line-height: 20px;
      -webkit-text-decoration-line: underline;
      text-decoration-line: underline;
      color: #333333;
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      justify-content: center;
      margin: 28px 0;
      @media screen and (max-width: $breakpoint-sm) {
        justify-content: center;
        display: flex;
        margin: 28px 0;
      }

      &:hover,
      &:active {
        opacity: 0.7;
      }
    }
  }
}
</style>