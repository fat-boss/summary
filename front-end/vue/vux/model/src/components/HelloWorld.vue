<template>
  <div class="hello">
    <group>
      <cell title="title" value="value"></cell>
      <cell title="title2" value="value2"></cell>
      <cell-box is-link>
        long long long long long long long long long long long long long
      </cell-box>
    </group>
  </div>
</template>

<script>
  import { Cell, Group, CellBox } from 'vux'
export default {
  name: 'HelloWorld',
  components: {
    Cell, Group, CellBox
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
