<template>
   <li class="post">
      <div class="post_title">
         <h2>{{ Postings.name }}</h2>
         <p>완료일 : {{ Postings.date }}</p>
      </div>
      <div class="post_exp">
         <p>사용플러그인: {{ Postings.plugin }}</p>
         <p>사용언어: {{ Postings.lan }}</p>
         <p>{{ Postings.explan }}</p>
      </div>
      <div class="post_imgwrap">
         <img :src="require(`@/assets/images/${Postings.image}.png`)" />
      </div>
      <a class="post_link" :href="`http://${Postings.url}`" target="_blank">사이트 이동하기</a>
   </li>
</template>

<script>
export default {
   props: {
      Postings: Object,
   },
};
</script>

<style>
.post {
   width: 30%;
   margin: 50px 0;
}
.post_imgwrap > img {
   width: 100%;
   height: 100%;
   max-width: 500px;
   border: 1px solid #ccc;
}
</style>
