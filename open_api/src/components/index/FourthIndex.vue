<template>
    <div class="fourth-index">
        <div class="fourth-index__wrap">
            <div class="fourth-index__title">
                <span data-aos="fade-up">WEB / MOBILE</span>
            </div>
            <div class="fourth-index__content" data-aos="fade-up" data-aos-delay="200">
                <div class="fourth-index__content__left">
                    <div class="left-wrap">
                        <div class="left-wrap__text">
                            <h1>모든 모바일 웹 <br>환경을 지원합니다.</h1>
                            <p>스마트폰이나 태블릿 등 터치 디바이스의 <br>웹 브라우저에서도
                                모든 기능을 동일하게 <br>이용하실 수 있습니다.
                            </p>
                        </div>
                        <v-btn class="sample-btn">
                            sample
                            <v-icon large>
                                mdi-arrow-right
                            </v-icon>
                        </v-btn>
                    </div>
                </div>
                <div class="fourth-index__content__right">
                    <img src="@/assets/img/mobile-web.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .fourth-index {
        position: relative;
        width: 100%;
        height: 100vh;
        background: #000;
        &__wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
        &__title {
            color: #fff;
            margin-bottom: 40px;
            >span { font-size: 60px; }
            
        }
        &__content {
            display: flex;
            &__left {
                width: 600px;
                height: 650px;
                background: url("@/assets/img/fourth-back.png");

                .left-wrap {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 80px;
                    height: 100%;
                    &__text {
                        color: #fff;
                        >h1 {
                            font-family: 'notosanskr', sans-serif;
                            font-size: 55px;
                            font-weight: 800;
                            line-height: 1.2;
                            margin-bottom: 40px;
                        }
                        >p { font-size: 22px; }
                    }
                    .sample-btn {
                        display: flex;
                        justify-content: space-between;
                        width: 280px; 
                        height: 60px;
                        padding: 0 30px;
                        border: 2px solid #fff;
                        border-radius: 40px;
                        color: #fff;
                        background: #75A2FF;
                        font-size: 24px;
                    }
                }
            }
            &__right {
                width: 600px;
                height: 650px;
                background: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                background: url("@/assets/img/mobile-web-blur.png");
                >img {
                    width: 500px;
                }
            }
        }
    }
    @keyframes fadeUp {
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>