<template>
    <div class="second-index">
        <div class="second-index__wrap">
            <div class="second-index__content" data-aos="fade-up" data-aos-delay="200">
                <div class="second-index__content__left">
                    <div class="left-wrap">
                        <div class="left-wrap__text">
                            <h1>친환경 공유 우산 위브렐라</h1>
                            <p>우산 소지가 필요없는 스마트시티, 우산 사요의 패러다임 혁신, 대한민국 최초<br>
                                IOT기반 스마트 공유함을 활용한 친환경 공유우산 서비스입니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="second-index__content__right">
                    <img src="@/assets/img/webrella.png" style="width: 350px;" alt="">
                    <!-- <img src="@/assets/img/webrella-get.png" alt=""> -->
                </div>
            </div>
             <div class="second-index__content" data-aos="fade-up" data-aos-delay="200">
                <div class="second-index__content__left">
                    <div class="left-wrap">
                        <div class="left-wrap__text">
                            <h1>소유에서 공유로, 세종 어울링</h1>
                            <p>공유 가능한 퍼스널 모빌리티 대여, 반납, 결제 플랫폼으로 사용자 관리와<br>
                                자전거 위치정보를 통한 모빌리티 통합 관리 시스템입니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="second-index__content__right">
                    <img src="@/assets/img/eouling-02.png" alt="">
                    <img src="@/assets/img/eouling-01.png" alt="">
                    <img src="@/assets/img/eouling-03.png" alt="">
                </div>
            </div>
             <div class="second-index__content" data-aos="fade-up" data-aos-delay="200">
                <div class="second-index__content__left">
                    <div class="left-wrap">
                        <div class="left-wrap__text">
                            <h1>수요응답형 대중교통 DRT</h1>
                            <p>대중교통의 효율을 극대화 한 모빌리티 플랫폼으로 지역 특성과 환경을<br>
                                고려한 맞춤형 시스템입니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="second-index__content__right">
                    <img src="@/assets/img/drt-01.png" alt="">
                    <img src="@/assets/img/drt-02.png" alt="">
                    <img src="@/assets/img/drt-03.png" alt="">
                </div>
            </div>
            <div class="second-index__text">
                <span>TAKE YOUR BUSINESS TO THE NEXT LEVEL&nbsp;</span>
                <span>TAKE YOUR BUSINESS TO THE NEXT LEVEL&nbsp;</span>
                <span>TAKE YOUR BUSINESS TO THE NEXT LEVEL&nbsp;</span>
                <span>TAKE YOUR BUSINESS TO THE NEXT LEVEL&nbsp;</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .second-index {
        position: relative;
        width: 100%;
        background: #000;
        &__wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 100px 0;
        }
        &__title {
            color: #fff;
            margin-bottom: 40px;
            >span { font-size: 60px; }
            
        }
        &__content {
            display: flex;
            border-bottom: 3px solid #fff;
            margin-bottom: 150px;
            &__left {
                width: 700px;
                height: 300px;
                /* background: #75A2FF; */
                .back-marker {
                    position: absolute;
                    bottom: 100px;
                    right: 750px;
                    color: #fff;
                    opacity: 0.08;
                }
                .left-wrap {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 60px;
                    height: 100%;
                    &__text {
                        color: #fff;
                        >h1 {
                            font-family: 'notosanskr', sans-serif;
                            font-size: 50px;
                            font-weight: 800;
                            line-height: 1.2;
                            margin-bottom: 30px;
                        }
                        >p { font-size: 18px; }
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
                width: 500px;
                height: 300px;
                display: flex;
                align-items: center;

               >img {
                    width: 150px;
               }

            }
        }
        &__text {
            color: #fff;
            font-size: 130px;
            display: flex;
            flex: 0 0 auto;
            white-space: nowrap;
            overflow: hidden;
            animation: marquee 120s linear infinite;
            >span {
                color: #fff;
                opacity: 0.1;
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
    @keyframes fadeUp {
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>