/* 
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ @소스코드: 정의 명세서                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┣ @설명: 가이드 사이드바
┣ @작성: 이수정, 2023-11-09                     
┣ @내역: 이수정, 2023-11-09, 최초등록
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/
<template>
	<div class="guidebar">
        <div class="guidebar-wrap">
            <div class="guidebar-wrap__item">
                <div class="guidebar-wrap__menu">
					<h4>준비하기</h4>	
					
                </div>
				<div class="guidebar-wrap__menu">
					<h4>시작하기</h4>
					<p>지도를 담을 영역 만들기</p>	
					<p>실제 지도를 그리는 API를 불러오기</p>	
					<p>지도를 띄우는 코드 작성</p>
                </div>
				<div class="guidebar-wrap__menu">
					<h4>라이브러리 사용하기</h4>
					<p>지도 라이브러리란?</p>	
					<p>라이브러리 불러오기</p>	
                </div>
				<div class="guidebar-wrap__menu">
					<h4>지도 URL</h4>
					<p>지도 바로가기</p>	
					<p>길찾기 바로가기</p>	
					<p>로드뷰 바로가기</p>	
					<p>지도 검색결과 바로가기</p>	
                </div>
					<div class="guidebar-wrap__menu">
					<h4>더 살펴보기</h4>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
		
		}
	},
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>
	.guidebar {
		position: fixed;
		width: 300px;
	}
	.guidebar-wrap {
		width: 100%;
		height: 100vh;
		background: #e9e9e9;
        overflow-x: hidden;
        overflow-y: auto;
    
		&__menu {
            margin-left: 40px;
			line-height: 20px;
            color: #292929;
			font-weight: bold;
			cursor: pointer;
			user-select: none;
            text-align: left;
            padding: 15px 0;
            text-decoration: none;
			> p {
				font-size: 14px;
				font-weight: 400;
				margin-top: 20px;
				color: #505050;
				&:hover {
					color: #75A2FF;
				}
			}
		}
		&__item {
			margin-top: 60px;
		} 
	} 
</style>