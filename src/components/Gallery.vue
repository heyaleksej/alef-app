<template>
  <div class="photos">
    <div class="container__main">
      <a href="" class="photos__styles">Посмотреть все стили</a>
        <GalleryItem/>
    </div>
  </div>
</template>

<script>
import GalleryItem from "@/components/GalleryItem";

export default {
  name: 'App',
  components: {
    GalleryItem
  },
  imgNames: ['img01', 'img02', 'img03', 'img04', 'img05'],
  photos: [
    "img01.png",
    "img02.png",
    "img03.png",
    "img04.png",
    "img05.png",
  ]
}
</script>

<style scoped lang="scss">

.photos {
  margin-bottom: 100px;

  &__styles {
    font-size: 14px;
    line-height: 20px;
    -webkit-text-decoration-line: underline;
    text-decoration-line: underline;
    color: #333333;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    margin: 28px 0;

    &:hover,
    &:active {
      opacity: 0.7;
    }
  }
}
</style>