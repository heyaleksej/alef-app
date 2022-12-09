<template>
  <section class="product">
    <div class="container container__photo">
      <div class="product__body">
        <Carousel/>
        <ProductInfo/>
      </div>
    </div>
  </section>
</template>

<script>
import Carousel from "@/components/content/Carousel";
import ProductInfo from "@/components/content/ProductInfo";

export default {
  name: "Content",
  components: {
    ProductInfo,
    Carousel
  }
}


</script>

<style scoped lang="scss">
@import "../../assets/styles/variables";


.product {
  margin-top: 70px;

  &__body {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 30px;
    width: 100%;
    @media screen and (max-width: $breakpoint-sm) {
      display: block;
      gap: 10px;
    }
  }
}


</style>