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
                  'background-image': 'url(' + require(`@/assets/images/${Postings[trans].image}.png`) + ')',
               }"
            ></div>
            <div class="modal_textwrap">
               <p class="modal_text">사용플러그인 : {{ Postings[trans].plugin }}</p>
               <p class="modal_text">사용언어 : {{ Postings[trans].lan }}</p>
               <p class="modal_text">설명 : {{ Postings[trans].explan }}</p>
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
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700;900&display=swap");
@import "./components/Reset.css";
@import "./components/Common.css";

.modal_background {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.6);
}
.modal_content {
   overflow-y: scroll;
   position: absolute;
   top: 50%;
   left: 50%;
   width: 1000px;
   height: 600px;
   padding: 50px;
   background: #fff;
   border: 2px solid #444;
   text-align: left;
   transform: translate(-50%, -50%);
}
.modal_content > h2 {
   padding-bottom: 20px;
   font-size: 26px;
   font-weight: bold;
}
.modal_contentimg {
   width: 100%;
   height: 500px;
   margin: 0 auto;
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center 0;
   border: 2px solid #ddd;
}
.modal_textwrap {
   padding: 20px 0 0;
}
.modal_text {
   line-height: 20px;
   padding-bottom: 10px;
}
.modal_text:last-child {
   padding-bottom: 0;
}
.modal_textwrap .fade-enter-active,
.fade-leave-active {
   transition: opacity 0.3s ease-in-out;
}
.fade-enter,
.fade-leave-to {
   opacity: 0;
}
.slide-down-enter-active,
.slide-down-leave-active {
   transition: all 0.3s ease-in-out;
}
.slide-down-enter,
.slide-down-leave-to {
   transform: translate(-55%, -55%);
   opacity: 0;
}
</style>
