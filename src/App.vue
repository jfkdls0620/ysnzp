<template>
  <div id="app" :class="{active: isActive}">
    <header>
      <div class="header-inner">
        <h1 @click="closed"><router-link to="/">main</router-link></h1>
        <div class="menu-trigger" @click="activate">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="section__menu">
        <div>
          <ul>
            <li v-for="item in data.items" :key="item.name" @click="closed">
              <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
          </ul>
          <ul class="sub-list">
            <li v-for="item in data.subItems" :key="item.name" @click="closed">
              <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="section_bg" @click="closed"></div>
    <router-view></router-view>
<!--    <transition name="page" mode="out-in">-->
<!--    </transition>-->
  </div>
</template>
<script>
export default {
  name: 'app',
  data(){
    return{
      isActive: false,
      data:{
        items:[
          {name : '회사소개' , path : '/Company'},
          {name : '사람들' , path : '/People'},
          {name : '포트폴리오', path : '/Portfolio'},
          {name : '프로젝트 가이드', path: '/Project'},
          {name : '기술목록' , path : '/TechnologyList'},
          {name : '의뢰하기' , path : '/Request'},
        ],
        subItems:[
          {name : '고객센터' , path : '/Service'},
          {name : '사원집' , path : '/Employee'},
          {name : '기술 블로그' , path : '/TechnologyBlog'},
        ]
      }
    }
  },
  created() {
    document.title = "용산집::YSNZP";
  },
  methods :{
    closed(){
      this.isActive = false;
    },
    activate(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

