<template>
  <div class="container">
    <div class="section__swiper-wrap">
      <swiper :options="swiperOption" class="section__main">
        <swiper-slide class="section__title">
          <div class="section__step01">
            <h2>HARDWARE<br>WEARS<br>SOFTWARE</h2>
            <p>하드웨어와 소프트웨어<br>모든 면에서 탁월한 용산집</p>
            <router-link to="/Company"><span>용산집 알아보기</span></router-link>
          </div>
        </swiper-slide>
        <swiper-slide v-for="item in portfolioData" :key="item.title" class="section__portfolio">
          <div class="section__portfolio-step">
              <dl>
                <dt><span>PORTFOLIO #{{item.idx}}</span></dt>
                <dd>{{item.title}}</dd>
              </dl>
              <router-link to="/Portfolio">LEARN MORE</router-link>
            <div :style="{backgroundImage: `url(${getImgUrl(item)}`}"></div>
          </div>
        </swiper-slide>
        <swiper-slide class="section__service">
          <div>
            <div class="img-box">
              <img src="../assets/images/port/dummy-04.jpg" alt="">
            </div>
            <div class="text-box">
              <dl>
                <dt>
                  <span>전문 서비스 분야 #1</span>
                  E-Commerce
                </dt>
                <dd>
                  결제모듈이 필요한<br>모든 형태의 반응형 웹 / 모바일 앱
                </dd>
              </dl>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="section__service">
          <div>
            <div class="text-box">
              <dl>
                <dt>
                  <span>전문 서비스 분야 #2</span>
                  Application
                </dt>
                <dd>
                  다중 플랫폼으로 서비스하는<br>모든 종류의 Restful API 기반 어플리케이션
                </dd>
              </dl>
            </div>
            <div class="img-box">
              <img src="../assets/images/port/dummy-05.jpg" alt="" style="width: 65%;">
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="section__service">
          <div>
            <div class="img-box">
              <img src="../assets/images/port/dummy-04.jpg" alt="">
            </div>
            <div class="text-box">
              <dl>
                <dt>
                  <span>전문 서비스 분야 #3</span>
                  Software
                </dt>
                <dd>
                  임베디드, BLE, 키오스크 등<br>운영체제 환경에서 사용하는 소프트웨어
                </dd>
              </dl>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>

import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'Main',
  components: {swiper, swiperSlide},
  data(){
    return{
      portfolioData:[],
      swiperOption: {
        slidesPerView:'auto',
        direction: 'horizontal',
        spaceBetween: 0,
        mousewheel: true,
        parallax: true,
        simulateTouch:false,
        speed:600
      },
    }
  },
  methods :{
    getList(){
      this.$http.get('http://localhost:3000/items')
          .then((res)=>{
            //console.log('getList', res.data)
            this.portfolioData = res.data;
          });
    },
    getImgUrl(frame) {
      try {
        const currentImageName = `${frame.src}`;
        return require('../assets/images/port/' + currentImageName);
      } catch{
        return require('../assets/logo.png');
      }
    },
  },
  mounted(){
    this.getList();
  }
}

</script>

