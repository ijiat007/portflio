<template>
  <Header />

  <router-view />

  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
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
</style>
