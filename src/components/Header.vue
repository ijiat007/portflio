<template>

  <header :class="{ fix: isFix }">
    <h1>JUYOUNG SUNG <a href="<%= BASE_URL %>SJY.pdf" download>Resume</a></h1>
    <nav id="nav">
      <router-link to="/portflio/">Now</router-link>
      <router-link to="/portflio/prev">Past</router-link>
    </nav>
  </header>

</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isFix: false,
      // pdfLink: require("@/assets/SJY.pdf"),
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const scrollTop = window.scrollY;
      const nav = document.getElementById("nav");
      const topPos = nav.offsetTop;
      setTimeout(() => {
        this.isFix = scrollTop > topPos
      }, 100);
      console.log(topPos, scrollTop);
    },
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  padding: 30px 20px 0;
  text-align: center;
  background: #fff;
  text-align: center;
  transition: all .2s ease-in-out;

  h1 {
    margin-bottom: 20px;
    font-size: 3rem;
    opacity: 1;
    transition: opacity .15s ease-in;

    a {
      display: inline-flex;
      align-items: center;
      font-size: 14px;
      text-decoration: underline;
      vertical-align: middle;
      color: $blue;

      &::after {
        @include svg(arrow, 20, 20, $blue);
        margin-top: 3px;
        content: '';
      }
    }

  }

  nav {
    display: flex;
    justify-content: center;
    max-width: $max;
    margin: 0 auto;
    background: #fff;

    a {
      flex: 1;
      position: relative;
      padding: 10px 20px;
      border: 1px solid $line;
      color: $graya;
      &:not(:last-child) {
        margin-right: -1px;
      }

      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      &.router-link-exact-active {
        z-index: 1;
        border-color: $color;
        background: $color;
        color: #fff;
      }

      @include breakpoint {
        flex: 1 1 auto;
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 1.8rem;
        text-align: center;
      }
    }
  }

  &.fix {
    transform: translateY(-90px);
    padding-left: 0;
    padding-right: 0;
    h1 {
      opacity: 0;
    }
  }
}
</style>
