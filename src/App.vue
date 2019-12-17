<template>
  <div id="app" :class="{active: isActive}">
    <header>
      <div class="header-inner">
        <h1><router-link to="/">main</router-link></h1>
        <div class="menu-trigger" @click="activate">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="section__menu">
        <ul>
          <li><router-link to="/Company">회사소개</router-link></li>
          <li><router-link to="/">사람들</router-link></li>
          <li><router-link to="/Portfolio">포트폴리오</router-link></li>
          <li><router-link to="/">프로젝트 가이드</router-link></li>
          <li><router-link to="/">기술목록</router-link></li>
          <li><router-link to="/">의뢰하기</router-link></li>
        </ul>
      </div>
    </header>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      isActive: false,
    }
  },
  created() {
    document.title = "용산집::YSNZP";
  },
  methods :{
    activate(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

