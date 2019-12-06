<template>
    <div id="select__picture" class="container">
        <section class="section__container">
            <div class="section__container-left" v-bind:style="{ backgroundColor: color }">
                <div class="section__image-area" id="preview" >
                    <img v-if="url" :src="url" alt="">
<!--                    <div>-->
<!--                        <button v-if="cropperImg" type="button" class="crop__btn">자르기</button>-->
<!--                        <img :src="cropperImg" alt="" ref="img">-->
<!--                    </div>-->
                </div>
                <div class="section__background">
                    <input type="color" id="background__color" v-model="color">
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
                        <div class="upload__btn">
                            <input type="file" id="input-upload" @change="onFileChange" />
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
                                  <li v-for="(size, index) in sizeList" :key="index" @click="activate(size.text, size.dataWidth, size.dataHeight)" :class="{ active : active_el == size.text }" >
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
                    </div>
                    <div class="section__slide">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import Cropper from 'cropperjs';
    import 'cropperjs/dist/cropper.css';

    export default {
        name: 'SelectPicture',
        data(){
            return{
                url: null,
                cropperImg: '',
                cropper: '',
                imgName: '',
                isCrop: false,
                isCrop2: false,
                color : '#ffffff',
                percent : 0,
                active_el: 0,
                ratioWidth: 0,
                ratioHeight: 0,
                sizeList:[
                    { text: '5X7(inch)', dataWidth:'7', dataHeight:'5' },
                    { text: '6X8(inch)', dataWidth:'8', dataHeight:'6' },
                    { text: '8X10(inch)', dataWidth:'10', dataHeight:'8' }
                ],
            }
        },
        mounted(){
            this.initCropper();
        },
        methods : {
            onFileChange(e){
                const img = e.target.files[0];
                this.url = URL.createObjectURL(img);
                this.imgName = img.name;
            },
            initCropper(){
                let cropper = new Cropper(this.file, {
                    viewMode: 1,
                    aspectRatio: 16/9,
                })
                this.cropper = cropper
            },

            fnLeftBtn(){
                //if (this.percent === 75) this.percent = 50;
            },
            fnRightBtn(){
                //if (this.percent === 50) this.percent = 75;
            },
            activate(el, ratioWidth, ratioHeight){
                this.active_el = el;
                this.isCrop = false;
                this.isCrop2 = true;

                let inchToMillimeters = 25.4;
                ratioWidth = (ratioWidth * inchToMillimeters);
                ratioHeight = (ratioHeight * inchToMillimeters);
                console.log(ratioWidth,ratioHeight)
            }
        },
        computed:{
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
        }
    }

</script>