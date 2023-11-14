<template>
    <div class="second-index">
        <div class="second-index__wrap">
            <div class="second-index__content" data-aos="fade-up" data-aos-delay="400">
                <div class="second-index__content__left">
                    <div class="left-wrap">
                        <div class="left-wrap__text">
                            <h1>친환경 공유 우산 위브렐라</h1>
                            <p>이젠, 사지말고 공유하자! 탄소절감 친한경 우산 쉐어링 플랫폼<br>
                                위브렐라에 방문해보세요!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="second-index__content__right">
                    <img src="@/assets/img/webella.png" alt="">
                    <img src="@/assets/img/webrella-get.png" alt="">
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
    .second-index {
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
            border-bottom: 3px solid #fff;
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
               >img {
                    width: 150px;
                    margin-right: 70px;
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