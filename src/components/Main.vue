<template>
  <div class="container">
    <div class="section__swiper-wrap">
      <swiper :options="swiperOption" class="section__main" ref="Swiper">
        <swiper-slide class="section__title">
            <div class="section__step01">
                <h2>HARDWARE<br>WEARS<br>SOFTWARE</h2>
                <p>하드웨어와 소프트웨어<br>모든 면에서 탁월한 용산집</p>
                <router-link to="/Company"><span>용산집 알아보기</span></router-link>
                <div class="scroll-area mobile">
                    <span>SCROLL</span>
                </div>
            </div>
            <div class="scroll-area">
                <span>SCROLL</span>
            </div>
        </swiper-slide>
        <swiper-slide v-for="(item, index) in getPortfolio.slice(0, 3)" :key="index" class="section__portfolio">
          <div class="section__portfolio-step">
              <dl>
                  <dt><span>PORTFOLIO #{{index + 1}}</span></dt>
                  <dd>{{item.title}}</dd>
              </dl>
              <router-link to="/Portfolio" class="learn-btn">LEARN MORE</router-link>
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
            <div class="img-box mt">
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
        <swiper-slide class="section__show">
            <div class="section__show-wrap">
                <div>
                    <div class="section__show-box">
                        <dl>
                            <dt>프로세스 소개</dt>
                            <dd>일반적인 에이전시의 의뢰 검토와 다릅니다.<br>
                                용산집은 고객의 예산과 현황, 요구사항을 종합적으로<br>
                                검토하여 전문 기능 정의서 수준의 RFP(제안 의뢰서)<br>
                                를 계약 전에 작성합니다.</dd>
                        </dl>
                        <router-link to="/" class="learn-btn">SHOW PROCESS</router-link>
                    </div>
                </div>
                <div>
                    <div class="section__show-box">
                        <dl>
                            <dt>클라이언트를 위한<br>가이드 제공</dt>
                            <dd>프로세스가 생소하시다구요?<br>
                                커뮤니케이션을 위한 교육도 마다하지 않습니다.<br>
                                클라이언트들이 자주 하는 질문들을 모았습니다.</dd>
                        </dl>
                        <router-link to="/" class="learn-btn">SHOW GUIDELINE</router-link>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="section__footer">
            <main-footer/>
            <div class="turn__btn" @click="goToFirst"><span>TURN BACK</span></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import mainFooter from '../components/footer'
import portfolio from "../assets/portfolio"
import SwiperMixin from '../slideSwiper'

export default {
    mixins: [ SwiperMixin ],
    name: 'Main',
    components: {
        'main-footer': mainFooter
    },
    data() {
        return {
        }
    },
    computed: {
        getPortfolio(){
            return portfolio.items.map((item) => {
                return item;
            })
        }
    },
    methods: {
        getImgUrl(frame) {
            try {
                const currentImageName = `${frame.src}`;
                return require('../assets/images/port/' + currentImageName);
            } catch {
                return require('../assets/logo.png');
            }
        }
    }
}

</script>

