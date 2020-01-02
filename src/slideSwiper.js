import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

const SwiperMixin = {
    components: {
        swiper, swiperSlide,
    },
    data(){
        return{
            swiperOption: {
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                direction: 'horizontal',
                spaceBetween: 0,
                mousewheel: true,
                parallax: true,
                speed: 800,
                updateOnWindowResize: true,
                simulateTouch:false,
                breakpoints: {
                    799: {
                        simulateTouch:true,
                        slidesPerView: 1
                    }
                }
            },
        }
    },
    computed: {
        swiper(){
            return this.$refs.Swiper.swiper;
        }
    },
    methods: {
        goToFirst(){
            this.swiper.slideTo(0, 800);
        }
    }
}
export default SwiperMixin;


