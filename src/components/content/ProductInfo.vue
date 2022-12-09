<template>
  <div class="info">
    <h1 class="title">{{ productTitle }}</h1>
    <p class="code">Арт. 02194/05</p>
    <a href="" class="reviews">
      <div>Отзывы</div>
      <Rating/>
      255 отзывов
      <img class="angle" :src="require(`@/assets/icons/arrow.svg`)" alt="arrow">
    </a>

    <div class="price">
      <div class="price-discount"> 800 ₽</div>
      <div class="price-old">1 500 ₽</div>

      <a href="">
        <img class="angle" :src="require(`@/assets/icons/arrow.svg`)" alt="arrow">
      </a>
    </div>

    <div class="sale">
      <p class="sale-block">скидка -36%</p>
      <p class="sale-block">акция -20%</p>
    </div>

    <SelectSize :options="options"/>

    <div class="underlined">Определить размер</div>
    <Message :infoMessage="infoMessage"/>
    <div class="add-cart">
      <div class="add-cart-quantity">
        <div class="add-cart-change" @click="increment">
          <img :src="require(`@/assets/icons/plus.svg`)" alt="plus">
        </div>
        <div class="add-cart-total">{{ quantity }}</div>
        <div class="add-cart-change" @click="decrement">
          <img :src="require(`@/assets/icons/minus.svg`)" alt="minus">
        </div>
      </div>

      <button type="button" class="add-cart-cart black-btn" @click="addToCart">Добавить в корзину</button>

      <button type="button" class="add-cart-fav black-btn" @click="addToFavorite">
        <img :src="require(`@/assets/icons/white-heart.svg`)" alt="fav">
      </button>
    </div>

    <div class="underlined" @click="addToCart">Купить в 1 клик</div>

    <div class="line"></div>

    <div class="links">
      <a href="" class="underlined">
        <img src="../../assets/icons/t-short.svg" alt="Иконка одежды">
        Описание товара</a>
      <a href="" class="underlined">
        <img src="../../assets/icons/time.svg" alt="Иконка часов">
        Доставка и возврат</a>
      <a href="" class="underlined">
        <img src="../../assets/icons/payment.svg" alt="Иконка оплаты">
        Способы оплаты</a>
    </div>

  </div>
</template>

<script>
import Rating from "@/components/common/Rating";
import SelectSize from "@/components/common/SelectSize";
import Message from "@/components/common/Message";

export default {
  name: "ProductInfo",
  components: {Message, SelectSize, Rating},
  data() {
    return {
      isSelectOpen: false,
      size: "Выбрать размер",
      quantity: 1,
      maxQuantity: 10,
      productTitle: "Пижама для девочек",
      infoMessage: "",
      options: [
        "S",
        "M",
        "L",
        "XL",
      ]
    }
  },

  methods: {

    clearMessage: function () {
      setTimeout(() => {
        return this.infoMessage = null
      }, 3000);
    },

    increment: function () {
      return this.quantity < this.maxQuantity ? this.quantity++ : this.quantity

    },
    decrement: function () {
      return this.quantity <= 0 ? null : this.quantity--

    },

    addToFavorite: function () {
      this.clearMessage()
      return this.infoMessage = `Товар ${this.productTitle}  добавлен в избранное`
    },

    addToCart: function () {
      this.clearMessage()
      return this.quantity > 0
          ? this.infoMessage = `Товар в количестве ${this.quantity === 1
              ? this.quantity + ' ' + 'единицы'
              : this.quantity + ' ' + 'единиц'}  добавлен в корзину`
          : this.infoMessage = "Пожалуйста, укажите количество"

    },
  },
}
</script>


<style scoped lang="scss">
@import "../../assets/styles/variables";
.angle {
  display: flex;
  transform: rotate(270deg);
  padding-top: 5px;
}

.info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.title {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #333333;
}

.code {
  font-size: 12px;
  line-height: 16px;
  margin: 8px 0;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  letter-spacing: 0.04em;
  color: #828282;

}

.reviews {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 10px 0;
  font-size: 14px;

  div {
    font-size: 14px;
    line-height: 20px;
    color: #333333;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
}

.price {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 10px 0;
  gap: 10px;


  &-discount {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    text-transform: uppercase;
    color: #333333;
  }
}

.price-old {
  font-size: 14px;
  line-height: 20px;
  -webkit-text-decoration-line: line-through;
  text-decoration-line: line-through;
  color: #828282;
}

.sale {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.sale-block {
  border: 1px solid #333333;
  font-size: 12px;
  line-height: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -ms-flex-line-pack: center;
  letter-spacing: 0.04em;
  color: #333333;
  padding: 5px 10px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  align-items: center;
}

.message {
  height: 30px;
}

.message.active {
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.04em;
  border: 1px solid gray;
  display: flex;
  text-align: center;
}


.add-cart {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 15px;

  &-quantity {
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

    img{
      display: flex;
      align-items: center
    }

    &:hover,
    &:active {
      background: #a6a6a6;
    }

  }

  &-total {
    min-width: 30px;
    display: flex;
    justify-content: center;
  }

  &-cart {
    padding: 12px 30px;
  }

  &-fav {
    padding: 14px;
  }

}

.underlined {
  margin-bottom: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
  color: #333333;

  &:hover,
  &:active {
    opacity: 0.7;
  }
}

.line {
  padding-top: 20px;
  border-bottom: 0.5px solid #C4C4C4;
  margin-bottom: 20px;
  width: 90%;
}

.select__button.active + div {
  -webkit-transform: scaleY(1);
  -ms-transform: scaleY(1);
  transform: scaleY(1);
  opacity: 1;
}

.select__button.active :nth-child(2) svg {
  -webkit-transform: rotateZ(360deg) scaleY(-1);
  -ms-transform: rotate(360deg) scaleY(-1);
  transform: rotateZ(360deg) scaleY(-1);
  opacity: 1;
}

.hide {
  opacity: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.black-btn {
  background: #333333;
  border: 1px solid #333333;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 4px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;


  img {
    -webkit-transition: stroke 0.7s;
    -o-transition: stroke 0.7s;
    transition: stroke 0.7s;
    fill: aqua;
  }

  &:hover,
  &:active {
    color: #333333;
    background: #fff;
    border: 1px solid gray;

    img {
      filter: invert(.5) sepia(1) saturate(100) hue-rotate(0deg);
    }
  }
}


//tablets
@media screen and (min-width: $breakpoint-sm) and (max-width: $breakpoint-lg) {
  .line {
    width: unset;
    margin-left: unset;
  }

  .info {
    max-width: 50%;
    padding: 0 10px;
  }

  .add-cart {
    flex-direction: unset;
    margin-top: 10px;
    gap: 5px;
    padding-bottom: 20px;
    &-quantity{
      margin-bottom: 20px;
    }
  }
  .black-btn {
    width: 60%;
    height: 50px;
  }
  .add-cart {
    &-cart {
      width: 60%;
    }

    &-fav {
      width: 50px;
    }
  }

}

//mobile
@media screen and (max-width: $breakpoint-sm) {

  .add-cart {
    flex-direction: unset;
    margin-top: 5px;
    gap: 4px;
    padding-bottom: 10px;
    &-quantity{
      margin-bottom: 10px;
    }
  }
  .black-btn {
    width: 60%;
    height: 50px;
  }
  .line {
    width: 100vw;
    margin-left: -20px;
  }

  .info {
    max-width: 100%;
    padding: 0 20px;
  }

  .add-cart {
    &-cart {
      width: 60%;
    }

    &-fav {
      width: 50px;
    }
  }
}


</style>