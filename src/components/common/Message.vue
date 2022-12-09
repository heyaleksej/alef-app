<template>
  <div class='wrapper'>
    <div class='box-outer'>
      <div class='main_box' :class="{ none: !infoMessage }">
        <p class="message">{{ infoMessage }}</p>
        <div class='bar top'></div>
        <div class='bar right delay'></div>
        <div class='bar bottom delay'></div>
        <div class='bar left'></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    infoMessage: {}
  }
}
</script>

<style scoped lang="scss">


* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
}


.wrapper {
  display: flex;
}

.none {
  display: none;
}

.message {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 0;
  @media screen and (max-width: 300px) {
    font-size: 12px;

  }

}


.box-outer {
  overflow: hidden;
  margin: 1px;
  width: 20rem;
  height: 50px;

}

.main_box {
  width: 20rem;
  position: relative;
  background: white;
  border: 1px solid #333333;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
}

.bar {
  position: absolute;
  width: 5rem;
  height: 0.5rem;
  background: #fff;
  transition: all var(--timing) linear;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.bar.delay {
  animation-delay: .5s;
  -webkit-animation-delay: .5s;
}

.top {
  top: -0.5rem;
  left: -0.5rem;
}

.right {
  top: 1.8rem;
  right: -2.8rem;
  transform: rotate(90deg);
}

.bottom {
  bottom: -0.5rem;
  left: -0.5rem;
}

.left {
  top: 1.8rem;
  left: -2.8rem;
  transform: rotate(90deg);
}
//animation
@-webkit-keyframes h-move {
  0% {left: -0.5rem;}
  100% {left: 20rem;}
}

@keyframes h-move {
  0% {left: -0.5rem;}
  100% {left: 20rem;}
}

.top,
.bottom {
  -webkit-animation-name: h-move;
  animation-name: h-move;
}

@-webkit-keyframes v-move {
  0% {top: -0.5rem;}
  100% {top: 22.8rem;}
}

@keyframes v-move {
  0% {top: -0.5rem;}
  100% {top: 22.8rem;}
}

.right,
.left {
  -webkit-animation-name: v-move;
  animation-name: v-move;
}
</style>