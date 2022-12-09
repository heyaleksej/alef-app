<template>
  <div class="rating">
    <star-rating v-bind:increment="1"
                 v-bind:max-rating="5"
                 :show-rating="false"
                 rating="4"
                 padding="1"
                 border-color="black"
                 border-width="1"
                 inactive-color="white"
                 active-color="black"
                 v-bind:star-size="7" @click="sendRating(rating)">

    </star-rating>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  data() {
    return{
      rating:5,
    }
  },
  methods:{
    sendRating(rating){
      console.log(rating)
      this.$emit('sendRating', rating)
    }
  }
};
</script>

<style scoped>
.rating {
  min-width: 125px;
  padding-left: 8px;
}
</style>