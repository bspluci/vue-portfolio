<template>
   <div class="footer">
      <div class="jh_full">
         <div class="jh_wrap">
            <div class="jh_ft_box">
               <div class="jh_ft_name">PARK JUNG HO</div>
               <div class="jh_ft_explan">Frontend Dev</div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
   position: initial;
   bottom: 0;
}
.footer .jh_full {
   background: #2c3e50;
   color: #fff;
}
.jh_ft_box {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 50px 0;
}
.jh_ft_box .jh_ft_name,
.jh_ft_box .jh_ft_explan {
   font-size: 18px;
   font-weight: bold;
}
</style>
