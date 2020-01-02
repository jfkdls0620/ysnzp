<template>
    <div class="container">
        <div class="section__swiper-wrap sub-wrap">
            <swiper :options="swiperOption" ref="Swiper">
                <swiper-slide class="section__title">
                    <div>
                        <div class="title-img"></div>
                        <h2>GOOD PORTFOLIO</h2>
                        <p>용산집의 포트폴리오를 소개합니다.</p>
                    </div>
                </swiper-slide>
                <swiper-slide v-for="(item, index) in getPortfolio" :key="index" class="sub-list">
                    <div>
                        <div :style="{backgroundImage: `url(${getImgUrl(item)}`}" class="thumnail"></div>
                        <dl>
                            <dt>{{item.title}}</dt>
                            <dd>{{item.content}}</dd>
                            <dd>{{item.date}}</dd>
                        </dl>
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
    name: 'Portfolio',
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

