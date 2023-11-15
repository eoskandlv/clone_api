<template>
    <div class="fifth-index">
        <div class="fifth-index__wrap">
            <div class="fifth-index__text">
                <p><span>DAILY BUTTON</span> : REVOLUTION·INNOVATION·SMART&nbsp;</p>
                <p><span>DAILY BUTTON</span> : REVOLUTION·INNOVATION·SMART&nbsp;</p>
                <p><span>DAILY BUTTON</span> : REVOLUTION·INNOVATION·SMART&nbsp;</p>
                <p><span>DAILY BUTTON</span> : REVOLUTION·INNOVATION·SMART&nbsp;</p>
            </div>
            <div class="fifth-index__title">
                <p data-aos="fade-up">
                    세상을 더 편리하게 내일을 더 새롭게,<br>
                    축척된 기술과 다양한 구축경험을 바탕으로 최적화된<br>
                    <span>모빌리티 솔루션</span>을 제공합니다.
                </p>
            </div>
            <div class="fifth-index__bike" data-aos="fade-left">
                <img src="@/assets/img/eouling-bike.png" alt="">
            </div>
            <div class="fifth-index__bottom" >
                <div class="fifth-index__bottom__content" >
                    <h1 data-aos="fade-up">지금 바로 데일리버튼과 함께해 보세요!</h1>
                    <p data-aos="fade-up">ERP와 함께 확장형으로 운용할 수 있는 머신러닝 기반의 MaaS 플랫폼을 통해 한 단계 업그레이드하세요.</p>
                    <v-btn
                        class="button"
                    >
                        Let`s go
                    </v-btn>
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
    .fifth-index {
        width: 100%;
        height: 100%;
        background: #000;
        &__wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        &__text {
            color: #fff;
            font-size: 130px;
            display: flex;
            flex: 0 0 auto;
            white-space: nowrap;
            overflow: hidden;
            animation: marquee 120s linear infinite;
            >p{
                opacity: 0.3;
                span {
                font-weight: bolder;
                background-image: linear-gradient(to right, #fbaa18 10%, #f37674 45%, #f05786);
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent;
                word-break: keep-all;
                letter-spacing: -1px;
                }
            }
        }
        &__title {
            color: #fff;
            margin: 150px 0 250px 0;
            text-align: center;
            >p { 
                font-size: 40px; 
                font-weight: 800;
                span {
                    color: #75A2FF;
                }
            }
            
        }
        &__bike {
            position: absolute;
            bottom: 280px;
            >img {
                width: 350px;
            }
        }
        &__bottom {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 350px;
            background: #75A2FF;
            &__content {
                text-align: center;
                >h1 {
                    font-size: 50px;
                    font-weight: 800;
                    color: #fff;
                    margin-bottom: 10px;
                }
                >p {
                    color: #fff;
                    font-size: 14px;
                    margin-bottom: 40px;
                    
                }
                .button {
                    padding: 25px 30px;
                    font-weight: 800;
                }
            }
           
        }
    }
    @keyframes marquee {
        0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        100% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-50%, 0, 0);
        }
    }
</style>