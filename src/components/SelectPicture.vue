<template>
    <div id="select__picture" class="container">
        <section class="section__container">
            <div class="section__container-left" v-bind:style="{ backgroundColor: getBgColor }">
                <div class="section__image-area" id="preview" >
                    <div v-if="url">
                        <button type="button" class="crop__btn" @click.prevent="cropImage">자르기</button>
                        <vue-cropper
                                ref="cropper"
                                :src="url"
                                :viewMode = 3
                                :autoCopArea = 1
                                :zoomOnWheel = false
                                class="vue-cropper"
                                alt="Source Image"
                        />
                    </div>
                    <div v-if="url === ''">
                        <img src="../assets/images/select_start.png" alt="">
                    </div>
                    <div v-if="isCrop">
                        <img :src="cropImg" alt="Cropped Image" ref="img-crop">
                    </div>
                    <div v-if="isCrop2">
                        <button type="button" class="crop__btn" @click.prevent="cropImage2">확인</button>
                        <vue-cropper
                                :src="cropImg"
                                :aspect-ratio = aspectRatio
                                :viewMode = 1
                                :autoCopArea = 1
                                :cropBoxResizable = false
                                :center = true
                                :zoomOnWheel = false
                                class="vue-cropper"
                                ref="cropperSize"
                                alt="Source Image"
                                />
                    </div>
                    <div v-if="cropImg2">
                        <div class="frame-scale">
                            <div class="frame"
                                 :style="{
                                     width: `${getFrameStyle.width}px`,
                                     height: `${getFrameStyle.height}px`,
                                    }">
                                <div class="frame__border"
                                     :style="{
                                     borderImageSource: `url(${getFrontSrc}`,
                                     borderImageSlice: frontPatternSize,
                                     borderImageWidth: frameFrontWidth,
                                     borderImageRepeat: 'initial',
                                    }"
                                ></div>
                                <div class="frame-image" >
                                    <img :src="cropImg2" alt="Cropped" ref="img-cropped">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section__background">
                    <input type="color" id="background__color" v-model="getBgColor">
                    <label for="background__color">배경컬러 바꾸기</label>
                </div>
            </div>
            <div class="section__container-right" :class="getPercentCls">
                <div class="progressbar-wrap">
                    <button type="button" class="left-btn" @click="fnLeftBtn">&lt;</button>
                    <div class="progressbar">
                        <div class="progressbar-inner"></div>
                    </div>
                    <button type="button" class="right-btn" @click="fnRightBtn">&gt;</button>
                </div>
                <div class="section__slide-wrap">
                    <div class="section__slide">
                        <div class="section_title-box">
                            <h1>사진 선택하기</h1>
                            <p>PC에서 사진을 선택해 주세요.</p>
                            <p>가장 적합한 인쇄 사이즈를 추천드립니다.</p>
                        </div>
                        <div class="upload__btn">
                            <input type="file" id="input-upload" @change="onFileChange" ref="file"/>
                            <label for="input-upload">내 PC에서 불러오기</label>
                        </div>
                    </div>
                    <div class="section__slide">
                        <div class="section_title-box">
                            <h1>사이즈 고르기</h1>
                            <p>이미지 해상도를 고려하여,</p>
                            <p>가장 적합한 인쇄 사이즈를 추천드립니다.</p>
                        </div>
                        <div class="section__tab">
                            <div class="section__tab-title">
                                <span>오리지널</span>
                                <span class="on">규격사이즈</span>
                            </div>
                            <div class="section__tab-step">
                                <ul>
                                  <li v-for="(size, index) in sizeList" :key="index"
                                      @click="activate(size.text, size.dataWidth, size.dataHeight)"
                                      :class="{ active : active_el === size.text }" >
                                      <button type="button">{{ size.text }}</button>
                                  </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="section__slide">
                        <div class="section_title-box">
                            <h1>액자 선택하기</h1>
                            <p>이미지 해상도를 고려하여,</p>
                            <p>가장 적합한 인쇄 사이즈를 추천드립니다.</p>
                        </div>
                        <div class="section__swiper-wrap">
                            <swiper :options="swiperOption" class="section__frame-list">
                                <swiper-slide v-for="frame in frameList" :key="frame.src" >
                                    <div @click="fnFrameChange(frame.idx, frame)"
                                         :class="{ on : active_el === frame.idx }"
                                    >
                                        <img :src="getImgUrl(frame)" v-bind:alt="frame.name" >
                                    </div>
                                </swiper-slide>
                            </swiper>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </div>
                    </div>
                    <div class="section__slide">

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import VueCropper from 'vue-cropperjs';
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'cropperjs/dist/cropper.css';
    // require styles
    import 'swiper/dist/css/swiper.css'

    export default {
        name: 'SelectPicture',
        components : {VueCropper, swiper, swiperSlide},
        data(){
            return{
                url: '',
                cropImg: null,
                cropImg2: null,
                isCrop: false,
                isCrop2: false,
                isVertical: false,
                getBgColor : '#f1f1f1',
                percent : 0,
                active_el: 0,
                ratioWidth: 0,
                ratioHeight: 0,
                ratioInchWidth: 0,
                ratioInchHeight: 0,
                totalRatioSize : 0,
                aspectRatio: 0,
                frontSrc: '',
                frontPatternSize: 0,
                frontWidth: 0,
                frameFrontWidth: 0,
                frameStyle: {
                  width: 0,
                  height: 0,
                },
                sizeList:[
                    { text: '5X7(inch)', dataWidth:'7', dataHeight:'5' },
                    { text: '6X8(inch)', dataWidth:'8', dataHeight:'6' },
                    { text: '8X10(inch)', dataWidth:'10', dataHeight:'8' },
                    { text: 'A3', dataWidth:'16.535', dataHeight:'11.693' }
                ],
                frameList:[],
                swiperOption: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                    slidesPerColumn: 2,
                },
                setFrontSrc: null
            }
        },
        computed:{
            getFrontSrc() {
                return this.frontSrc ? require(`@/assets/images/goods/${this.frontSrc}`) : ''
            },
            getFrameStyle() {
                return this.frameStyle
            },
            getPercentCls(){
                let nextCls = "";
                switch (this.percent) {
                    case 50:
                        nextCls = 'next1';
                        break;
                    case 75:
                        nextCls = 'next2';
                        break;
                }
                return nextCls;
            },
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        methods : {
            getFrameSize() {
                const {clientWidth, clientHeight} = this.$refs['img-cropped'];

                this.frameFrontWidth = Math.floor((this.frontWidth * 3.779) / (this.ratioInchWidth * 0.504) * 2);

                let getFrontSize = (this.frameFrontWidth * 2);
                this.frameStyle.width = clientWidth + getFrontSize;
                this.frameStyle.height = clientHeight + getFrontSize;

            },
            onFileChange(){
                const img = this.$refs.file.files[0];
                this.url = URL.createObjectURL(img);
                console.dir()
            },
            cropImage(){
                this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
                this.isCrop = true;
                this.url = null;
                this.percent = 50;
            },
            cropImage2(){
                this.cropImg2 = this.$refs.cropperSize.getCroppedCanvas().toDataURL();
                this.isCrop2 = false;
                this.percent = 75;
            },
            getList(){
              this.$http.get('http://localhost:3000/goods')
                  .then((res)=>{
                    //console.log('getList', res.data)
                    this.frameList = res.data;
                  });
            },
            getImgUrl(frame) {
                try {
                    const currentImageName = `${frame.src}`;
                    return require('../assets/images/goods/' + currentImageName);
                } catch{
                    return require('../assets/images/logo.png');
                }
            },
            activate(el, ratioWidth, ratioHeight){
                this.active_el = el;
                this.isCrop = false;
                this.isCrop2 = true;
                this.aspectRatio = ratioWidth / ratioHeight;

                let inchToMillimeters = 25.4;
                this.ratioInchWidth = ratioWidth;
                this.ratioInchHeight = ratioHeight;

                this.ratioWidth = (ratioWidth * inchToMillimeters);
                this.ratioHeight = (ratioHeight * inchToMillimeters);
                // this.$refs.cropperSize.setCropBoxData({
                //     "width": this.ratioWidth,
                //     "height": this.ratioHeight
                // })
            },
            fnFrameChange(el, frame){
                const currentImageName = `${frame.src}`;
                this.active_el = el;
                this.frontSrc = currentImageName;
                this.frontPatternSize = frame.patternSize;
                this.frontWidth = frame.frontSize;
                this.getFrameSize();
            },
            fnLeftBtn(){
                //if (this.percent === 75) this.percent = 50;
            },
            fnRightBtn(){
                if (this.percent === 50){
                    if(this.ratioWidth === 0) alert("사이즈를 선택해 주세요")
                }
            }
        },
        mounted(){
            this.getList();
        }
    }

</script>