<template>
  <div class="container">
    <div class="button">
      <router-link to="/SelectPicture">이미지업로드</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

