<template>
   <div id="app">
      <Body :Postings="Postings" />
      <Footer />

      <transition-group name="fade">
         <div class="modal_background" v-if="show" v-on:click="show = !show" :key="Postings[trans].name"></div>
      </transition-group>
      <transition-group name="slide-down">
         <div class="modal_content" v-if="show" :key="Postings[trans].lan">
            <h2 class="modal_contenttitle">{{ Postings[trans].name }}</h2>
            <div
               class="modal_contentimg"
               :style="{
                  'background-image': 'url(' + require(`@/assets/images/${Postings[trans].image}.jpg`) + ')',
               }"
            ></div>
            <div class="modal_textwrap">
               <p class="modal_text">사용언어 : {{ Postings[trans].lan }}</p>
               <p class="modal_text">사용플러그인 : {{ Postings[trans].plugin }}</p>
               <p class="modal_text">설명 : {{ Postings[trans].explan }}</p>
               <a class="modal_link" v-if="Postings[trans].url" :href="Postings[trans].url" target="_blank"
                  >사이트 이동</a
               >
            </div>
         </div>
      </transition-group>
   </div>
</template>

<script>
import Postdata from "./assets/postdata.js";
import Body from "./components/Body";
import Footer from "./components/Footer";
import EventBus from "./bus.js";

export default {
   name: "App",
   data() {
      return {
         Postings: Postdata,
         trans: 0,
         show: false,
      };
   },
   components: {
      Footer: Footer,
      Body: Body,
   },
   methods: {
      closeModal() {
         this.trans = 0;
      },
   },
   mounted() {
      EventBus.$on("num", (data) => {
         this.trans = data;
      });

      EventBus.$on("show", (data) => {
         this.show = data;
      });
   },
};
</script>

<style>
@import "./components/scss/Main.scss";
</style>
