<template>
   <section class="body">
      <div class="jh_full">
         <div class="jh_wrap">
            <ul class="post_list">
               <Post
                  :Postings="Postings[i]"
                  v-for="(as, i) in Postings"
                  v-bind:key="i"
                  v-on:click.native="postNum(i)"
               />
            </ul>
         </div>
      </div>
   </section>
</template>

<script>
import Post from "./Post.vue";
import EventBus from "../bus.js";

export default {
   props: {
      Postings: Array,
   },
   components: {
      Post: Post,
   },
   methods: {
      postNum(i) {
         EventBus.$emit("num", i);
      },
   },
};
</script>
