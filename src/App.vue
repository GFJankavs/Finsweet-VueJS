<template>
  <Navigation></Navigation>
  <router-view />
  <Footer></Footer>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
<script>
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default {
  components: {
    Footer,
    Navigation,
  },
};
</script>
