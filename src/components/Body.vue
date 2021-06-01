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

<style>
section.body {
   display: flex;
   align-items: center;
   padding: 50px 0;
   min-height: calc(100vh - 100px);
}
.post_list {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   text-align: left;
}
</style>
