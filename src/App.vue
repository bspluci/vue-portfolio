<template>
   <div id="app">
      <Body :Postings="Postings" />
      <Footer />
   </div>
</template>

<script>
import Footer from "./components/Footer";
import Body from "./components/Body";
import Postdata from "./assets/postdata.js";

export default {
   name: "App",
   data() {
      return {
         Postings: Postdata,
      };
   },
   components: {
      Footer: Footer,
      Body: Body,
   },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700;900&display=swap");
@import "./components/Reset.css";
@import "./components/Common.css";
</style>
