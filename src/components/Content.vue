<template>
  <section class="product">
    <div class="container">
      <div class="product__body">
        <Carousel/>
      </div>
    </div>
  </section>
</template>

<script>
import Carousel from "@/components/Carousel";

export default {
  name: "Content",
  components: {
    Carousel
  }
}


</script>

<style scoped lang="scss">
.product {

  margin-top: 70px;

  &__body {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 30px;
  }
}


</style>