<template>
    <div class="third-index">
        <div class="third-index__wrap">
            <div class="third-index__title">
                <span data-aos="fade-up">CONTENT</span>
            </div>
            <div class="third-index__content" data-aos="fade-up" data-aos-delay="200">
                <div class="third-index__content__right">
                </div>
                <div class="third-index__content__left">
                    <div class="left-wrap">
                        <div class="left-wrap__text">
                            <h1>원하는 컨텐츠를<br> 표시할 수 있습니다.</h1>
                            <p>지도 위에 HTML로 구현 가능한 모든 컨텐츠를 <br>올릴수 있습니다. 
                                CSS를 이용하여 자유롭게 <br>꾸며보세요.
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
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .third-index {
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
                background: url("@/assets/img/third-back.png");

                .left-wrap {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 80px;
                    height: 100%;
                    &__text {
                        color: #000;
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
                background: url("@/assets/img/marker-map.png");
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