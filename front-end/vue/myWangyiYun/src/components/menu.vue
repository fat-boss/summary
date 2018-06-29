<template>
  <div id="myMenu">
    <transition name="slide">
      <div @click="toggleMenu()" v-if="menuShow" class="wrapper"
           @touchstart="touchstart($event)"
           @touchmove="touchmove($event)"
           @touchend="touchend($event)"
      >
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </div>
    </transition>
    <transition name="opa">
      <div @click="toggleMenu()" v-if="menuShow" class="mengceng"></div>
    </transition>
  </div>
</template>

<script>
  import { mapState,mapMutations } from 'vuex'
  export default {
    name: 'MyMenu',
    props: ['menuWidth'],
    data () {
      return {

      }
    },
    computed: {
      ...mapState(['menuShow'])
    },
    methods: {
      ...mapMutations(['toggleMenu']),
      touchstart (e) {
//        console.log(e)
      },
      touchmove (e) {
//       console.log(e)
      },
      touchend (e) {
//        console.log(123)
//        console.log(e)
      }
    }
  }
</script>

<style scoped lang="scss">
  #myMenu{
    .mengceng {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      height: 100vh;
      z-index: 9999;
      background-color: black;
      opacity: 0.6;
    }
    .wrapper {
      background-color: red;
      position: fixed;
      top: 0;
      left: 0;
      width: 85%;
      height: 100vh;
      z-index: 10000;
    }

    .slide-enter-active {
      transition: all .3s ease-in-out;
      /*transition: transform .38s ease-in-out, opacity .38s ease-in-out .38s;*/
    }
    .slide-leave-active {
      /*transition: all .38s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
      transition: transform .3s ease-in-out, opacity .38s ease-in-out .38s;
    }
    .slide-enter, .slide-leave-to{
      transform: translateX(-100%);
      opacity: 0;
    }

    .opa-enter-active {
      transition: all .38s ease-in-out;
    }
    .opa-leave-active {
      /*transition: all .38s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
      transition: all .38s ease-in-out;
    }
    .opa-enter, .opa-leave-to{
      opacity: 0;
    }

  }
</style>
