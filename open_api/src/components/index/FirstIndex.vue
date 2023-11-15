<template>
    <div class="first-index">
        <div class="first-index__wrap">
            <div class="first-index__title">
                <span data-aos="fade-up">MARKER</span>
            </div>
            <div class="first-index__content" data-aos="fade-up" data-aos-delay="200">
                <div class="first-index__content__left">
                    <div class="left-wrap">
                        <div class="left-wrap__text">
                            <h1>자유로운 형태의<br> 마커를 올려보세요.</h1>
                            <p>지도 위에 마커를 올려서 특정 장소를 <br> 표시할 수 있고
                                장소 명칭이나 간단한 소개글도 <br> 함께 표시할 수 있습니다.
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
                <div class="first-index__content__right">
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
    .first-index {
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
                background: url("@/assets/img/first-back.png");
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