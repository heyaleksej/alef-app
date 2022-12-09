<template>
  <div class="buy-quantity">
    <div class="buy-change" @click="IncreaseQuantity">
      <svg width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.46387 9.59277H7.28027V10.5361H4.46387V13.4482H3.51367V10.5361H0.710938V9.59277H3.51367V6.66699H4.46387V9.59277Z"
            fill="#333333"/>
      </svg>
    </div>
    <div class="buy-num">{{ newQuantity }}</div>
    <div class="buy-change" @click="IncreaseQuantity">
      <svg width="7" height="20" viewBox="0 0 7 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.560547 11.7666V10.7275H6.43945V11.7666H0.560547Z" fill="#333333"/>
      </svg>
    </div>
  </div>
</template>

<script>

export default {
  name: "ItemCounter",
  data() {
    return {
      newQuantity: 0,
    }
  },
  props: {
    quantity: {}
  },
  methods: {

    IncreaseQuantity: function () {
      this.newQuantity = this.quantity
      return this.newQuantity++
    },
    DecreaseQuantity: function () {
      return this.props.quantity--
    },


  },
}
</script>

<style scoped lang="scss">
.buy {

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 40px 0 6px 0;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 8px;

  &-quantity {
    max-width: 145px;
    max-height: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.04em;
    color: #333333;
    background: #F2F2F2;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    gap: 20px;
  }

  &-change {
    cursor: pointer;
    padding: 12px 20px;

    &:hover,
    &:active {
      background: #a6a6a6;
    }

  }

  &-num {
    padding: 12px 0;
  }

  &-cart {
    padding: 12px 28px;
  }

  &-fav {
    padding: 14px;
  }

}

</style>