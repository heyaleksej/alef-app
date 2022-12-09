<template>
  <Header />
  <Content />
  <Gallery />
  <Footer />
</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery"
import Content from "@/components/Content";

export default {
  name: 'App',
  components: {
    Content,
    Header,
    Footer,
    Gallery,
  }
}

</script>

