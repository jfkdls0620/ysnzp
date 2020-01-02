<template>
    <div class="container">
        <div class="section__swiper-wrap sub-wrap">
            <swiper :options="swiperOption" ref="Swiper">
                <swiper-slide class="section__title">
                    <div>
                        <div class="title-img title-img__request"></div>
                        <h2>REQUEST</h2>
                        <p>용산집은 일반적인 에이전시와 다릅니다.<br>
                            한 땀 한 땀 정성어린 손길로 최고의 결과물을 선물하겠습니다.</p>
                    </div>
                </swiper-slide>
                <swiper-slide class="section__request">
                    <div class="input-wrap">
                        <h3>용산집과 프로젝트를 시작해 보세요</h3>
                        <div class="input-box-wrap">
                            <h4>우리에게 누구인지 알려주세요</h4>
                            <div class="input-box">
                                <label for="input_name">이름</label>
                                <input type="text" id="input_name" placeholder="Name">
                            </div>
                            <div class="input-box">
                                <label for="input_position">직책</label>
                                <input type="text" id="input_position" placeholder="Position">
                            </div>
                            <div class="input-box">
                                <label for="input_company">기관 혹은 기업</label>
                                <input type="text" id="input_company" placeholder="Company">
                            </div>
                            <div class="input-box">
                                <label for="input_email">이메일</label>
                                <input type="text" id="input_email" placeholder="Email">
                            </div>
                            <div class="input-box">
                                <label for="input_number">전화번호</label>
                                <input type="number" id="input_number" placeholder="Phone Number">
                            </div>
                            <div class="input-box">
                                <label for="input_site">사이트 주소(선택)</label>
                                <input type="text" id="input_site" placeholder="Web Site">
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="section__request">
                    <div class="input-wrap input-wrap_check">
                        <h4>어떤 종류의 프로젝트 인가요?</h4>
                        <ul>
                            <li>
                                <input type="radio" id="check_web" name="project_radio" value="반응형 웹">
                                <label for="check_web">
                                    <span>반응형 웹</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="check_app" name="project_radio" value="모바일 앱">
                                <label for="check_app">
                                    <span>모바일 앱</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="check_software" name="project_radio" value="소프트웨어">
                                <label for="check_software">
                                    <span>소프트웨어</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </swiper-slide>
                <swiper-slide class="section__request">
                    <div class="input-wrap">
                        <div class="input-box-wrap">
                            <h4>예산과 일정은 어떻게 되나요?</h4>
                            <div class="input-box">
                                <label for="input_pay">예산</label>
                                <select name="" id="input_pay">
                                    <option v-for="payItem in data.pay" :key="payItem.value" :value="payItem.value">{{payItem.title}}</option>
                                </select>
                            </div>
                            <div class="input-box">
                                <label for="input_day">일정</label>
                                <select name="" id="input_day">
                                    <option v-for="dayItem in data.day" :key="dayItem.value" :value="dayItem.value">{{dayItem.title}}</option>
                                </select>
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
import SwiperMixin from '../slideSwiper'

export default {
    mixins: [ SwiperMixin ],
    name: 'Request',
    components: {
        'main-footer': mainFooter
    },
    data() {
        return {
            data:{
                pay:[
                    {title : '예산을 선택하세요' , value : 0},
                    {title : '500이하' , value : 500},
                    {title : '1000이하' , value : 1000},
                ],
                day:[
                    {title : '일정을 선택하세요' , value : 0},
                    {title : '30일' , value : 30},
                    {title : '60일' , value : 60},
                ]
            }
        }
    },
    computed: {

    },
    methods: {

    }
}
</script>

