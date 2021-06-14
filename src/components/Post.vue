<template>
   <li class="post" v-on:click="show">
      <div class="post_title">
         <h2>{{ Postings.name }}</h2>
      </div>
      <div class="post_imgwrap">
         <img :src="require(`../assets/images/${Postings.image}.jpg`)" />
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
