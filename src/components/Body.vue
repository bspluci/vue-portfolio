<template>
   <div class="body">
      <div class="jh_full">
         <div class="jh_wrap">
            <ul class="post_list">
               <Post :Postings="Postings[i]" v-for="(as, i) in Postings" v-bind:key="i" />
            </ul>
         </div>
      </div>
   </div>
</template>

<script>
import Post from "./Post.vue";

export default {
   props: {
      Postings: Array,
   },
   components: {
      Post: Post,
   },
};
</script>

<style>
.post_list {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   text-align: left;
}
</style>
