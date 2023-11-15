<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="guide">
        <GuideSidebar />
        <div class="guide__wrap">
            <div class="guide__item__title">
                <h1>준비하기</h1>
            </div>
            <div class="guide__item__content">
                <p><strong>어울링 지도 javascript API</strong>는 키 발급을 받아야 사용할 수 있습니다.<br>
                그리고 키를 발급받기 위해서는 데일리버튼에 연락바랍니다.
                </p>
                <p class="content-text">
                    키 발급에는 아래 과정이 필요합니다.<br>

                    1. 카카오 개발자사이트 (https://developers.kakao.com) 접속<br>
                    2. 개발자 등록 및 앱 생성<br>
                    3. 웹 플랫폼 추가: 앱 선택 – [플랫폼] – [Web 플랫폼 등록] – 사이트 도메인 등록<br>
                    4. 사이트 도메인 등록: [웹] 플랫폼을 선택하고, [사이트 도메인] 을 등록합니다. (예: http://localhost:8080)<br>
                    5. 페이지 상단의 [JavaScript 키]를 지도 API의 appkey로 사용합니다.<br>
                    6. 앱을 실행합니다.<br>
                </p>
                <p class="content-text">
                    - 등록한 도메인(예: http://localhost:8080)에서 웹 서버를 실행시켜 위 파일을 엽니다.<br>
                </p>
                <p class="content-span">
                    # Python이 설치된 컴퓨터에서는 해당 폴더로 이동 후<br>
                    $ cd /path/to/your/folder/<br><br>
                
                    # 다음과 같이 테스트용 웹 서버를 실행할 수 있습니다.<br>
                    $ python -m SimpleHTTPServer 8080<br>
                </p>
                <p class="content-text">
                   - 브라우저를 열어 위 도메인에 접속합니다.<br>
                </p>
                <p class="content-text">

                    등록된 사이트 도메인에서만 지도API를 사용할 수 있기 때문에 반드시 등록해주세요.<br>

                    왼쪽 메뉴의 열쇠모양 을 클릭하면 내 애플리케이션 로 이동합니다. 아직 발급받은 키가 없다면 해당 페이지에 접속하여 키를 발급 받으세요.<br>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import GuideSidebar from "@/components/guide/GuideSidebar.vue";

export default {
    components: {
        GuideSidebar,
    }
}
</script>

<style lang="scss" scoped>
.guide {
    &__wrap {
        margin-left: 300px;
        padding: 50px;
    }
    &__item {
        &__title {
            width: 100%;
            border-bottom: 1px solid #c9c9c9;
            >h1 {
                padding-bottom: 20px;
            }
        }
        &__content {
            padding: 20px 0;
            > p {
                line-height: 1.8;
                color: #505050;
            }
            .content-text {
                padding: 20px 40px;
                font-size: 14px;
                line-height: 30px;
            }
            .content-span {
                margin-left: 40px;
                padding: 20px 40px;
                border: 1px solid #c9c9c9;
                font-size: 14px;
                line-height: 30px;
            }
        }
    }
}
</style>