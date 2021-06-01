<template>
   <li class="post" v-on:click="show">
      <div class="post_title">
         <h2>{{ Postings.name }}</h2>
      </div>
      <div class="post_imgwrap">
         <img :src="require(`@/assets/images/${Postings.image}.jpg`)" />
      </div>
   </li>
</template>

<script>
import EventBus from "../bus.js";

export default {
   props: {
      Postings: Object,
   },
   methods: {
      show() {
         EventBus.$emit("show", true);
      },
   },
};
</script>

<style>
.post {
   display: block;
   width: 30%;
   margin: 50px 0;
   cursor: pointer;
}
.post_title > h2 {
   font-size: 24px;
   font-weight: normal;
   padding-bottom: 10px;
}
.post_imgwrap > img {
   width: 100%;
   height: 100%;
   max-width: 500px;
   border: 1px solid #ccc;
}
</style>
