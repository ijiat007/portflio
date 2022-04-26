<template>
  <header :class="{ fix: isFix }">
      <h1>JUYOUNG SUNG</h1>
      <ul class="nav" v-scroll-spy-active v-scroll-spy-link>
      <li>
        <a>Menu 1</a>
      </li>
      <li>
        <a>Menu 2</a>
      </li>
    </ul>
    </header>

    <main v-scroll-spy>
      <div>
        11111
      </div>
      <div>
        22222
      </div>
    </main>

    <footer>© juyoung.sung. All Rights Reserved.</footer>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      isFix: false,
    }
  },

  mounted() {
    // window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    // onScroll() {
    //   const scrollTop = window.scrollY;
    //   const nav = document.getElementById("nav");
    //   const topPos = nav.offsetTop;
    //   setTimeout(() => {
    //     this.isFix = scrollTop > topPos
    //   }, 100);
    //   console.log(topPos, scrollTop);
    // },
  }
}
</script>

<style lang="scss">
main {

  > div {
    height: 100vh;
    border: 1px solid red;
  }
}
</style>
