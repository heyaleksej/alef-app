<template>
  <div class="wrapper"
       :tabindex="0"
       @blur="isOpen = false">
    <div class="selected"
         :class="{ open: isOpen }"
         @click="isOpen = !isOpen">
      {{ selected }}
              <img class="select__button-arrow"
                   :src="require(`../../assets/icons/arrow.svg`)"
                   alt="arrow">
    </div>
    <div class="items" :class="{ hidden: !isOpen }">
      <div
          v-for="(option, i) of options"
          :key="i"
          @click="
          selected = option;
          isOpen = false;
          $emit('onClick', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  components: {},
  props: {
    options: {},
  },
  setup() {
    let selected = 'Выберите размер'
    let isOpen = ref(false);
    return {selected, isOpen};
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 40px;
  line-height: 40px;
  max-width: 300px;
  margin-bottom: 0.5em
}

.selected {
  display: flex;
  position: relative;
  justify-content: space-between;
  padding-left: 2em;
  border: 1px solid #666666;
  cursor: pointer;
  height: 100%;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  padding-right: 20px;

  img {
    transition: all 0.8s ease;
  }
}

.selected.open {
  img {
    transform: rotate(180deg);
  }
}

.items {
  background-color: white;
  border: 1px solid black;
  transition: all 0.3s ease;
}

.items div {
  padding-left: 2em;
  cursor: pointer;
  font-size: 14px;
}

.items div:hover {
  background-color: #333333;
  color: white;
}

.hidden {
  visibility: hidden;
  opacity: 0;
}
</style>

