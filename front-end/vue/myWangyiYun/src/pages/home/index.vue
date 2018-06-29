<template>
  <div style="height: 100vh;" :class="{'cannotOver': drawerVisibility}">
    <header>
      <div id="icon">
        <div @click="toggleMenu()">
          <i class="iconfont icon-zhankai"></i>
        </div>
        <div id="tab">
          <i class="iconfont icon-tab1"></i>
          <i class="iconfont icon-tab2"></i>
          <i class="iconfont icon-tab3"></i>
        </div>
        <div>
          <icon type="search"></icon>
        </div>
      </div>
    </header>
    <div style="height: 1.57rem;"></div>
    <div>13</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>

    <my-menu></my-menu>
  </div>
</template>

<script>
  import { Drawer,Icon } from 'vux'
  import { mapMutations,mapState } from 'vuex'
  import MyMenu from '@/components/menu'
  export default {
    name: 'home',
    data: function () {
      return {
      }
    },
    methods: {
      ...mapMutations(['toggleMenu'])
    },
    computed: {
      ...mapState(['drawerVisibility']),
      drawerV: {
        get: function () {
          return this.drawerVisibility
        },
        set: function (val) {
          this.toggleMenu()
        }
      }
    },
    components: {
      Drawer,Icon,MyMenu
    }
  }
</script>

<style scoped lang="scss">
  header {
    background-color: #e3463a;
    height: 1.57rem;
    width: 100%;
    z-index: 10;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0.5rem 0.2rem 0 0.2rem;
    position: fixed;
    left: 0;
    top: 0;
  }
  .cannotOver {
    overflow: hidden;
  }
  .zHigh {
    z-index: 100 !important;
  }
  #icon {
    display: flex;
    justify-content: space-between;
    i {
      font-size: 20px;
      color: white;
    }
    icon {
      color: white;
    }
  }
  #tab {
    width: 35%;
    display: flex;
    justify-content: space-between;
  }
</style>
