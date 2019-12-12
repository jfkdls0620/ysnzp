<template>
  <div class="container">
    <div class="button">
      <router-link to="/SelectPicture">이미지업로드</router-link>
    </div>
    <button type="button" class="show__video-btn"  @click="showModal = true">영상보기</button>
    <transition name="modal" id="modal-template" v-if="showModal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body" style="text-align: center">
              <slot name="body" >
                <p>default body</p>
                <button class="modal-default-button" @click="showModal = false" style="display: inline-block">
                  닫기
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'Main',
  data(){
    return{
      showModal:false
    }
  }
}

</script>

