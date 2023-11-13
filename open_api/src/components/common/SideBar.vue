/* 
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ @소스코드: 정의 명세서                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┣ @설명: 사이드 메뉴바
┣ @작성: 이수정, 2023-11-09                     
┣ @내역: 이수정, 2023-11-09, 최초등록
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/
<template>
	<div class="sidebar">
        <div class="sidebar-wrap">
            <div class="sidebar-wrap__item">
                <router-link to="/" class="sidebar-wrap__menu">
                    <div class="sidebar-wrap__icon">
                        01
                    </div>
                </router-link>
            </div>
            <div class="sidebar-wrap__item">
                <div class="sidebar-wrap__menu">
                    <div class="sidebar-wrap__icon">
                        02
                    </div>
                </div>
            </div>
            <div class="sidebar-wrap__item">
                <div class="sidebar-wrap__menu">
                    <div class="sidebar-wrap__icon">
                        03
                    </div>
                </div>
            </div>
            <div class="sidebar-wrap__item">
                <div class="sidebar-wrap__menu">
                    <div class="sidebar-wrap__icon">
                        04
                    </div>
                </div>
            </div>
            <div class="sidebar-wrap__item">
                <div class="sidebar-wrap__menu">
                    <div class="sidebar-wrap__icon">
                        05
                    </div>
                </div>
            </div>
            <div class="sidebar-wrap__item">
                <div class="sidebar-wrap__menu">
                    <div class="sidebar-wrap__icon">
                        06
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			routeMapping: {
				"webManage": 0,
				"businessManage": 2,
			}
		}
	},
	mounted() {
		// 새로고침시 데이터 복원
        const currentBase = this.$route.path.substring(1).split("/", 2);
        if (this.routeMapping[currentBase[1]] !== undefined) {
            this.dropClick(this.routeMapping[currentBase[1]]);
        }
	},
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Noto+Sans+KR:wght@300;400&display=swap');

	.sidebar {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: fixed;
		height: 100%;
		right: 0;
		width: 86px;
        z-index: 1;
	}
	.sidebar-wrap {
		width: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        &__logo {
            color: #7e8788;
        }
		&__menu {
			display: flex;
			justify-content: center;
            align-items: center;
			line-height: 20px;
			color: #fff;
			opacity: 0.8;
			font-weight: bold;
			cursor: pointer;
			user-select: none;
            text-align: center;
            padding: 20px 0;
            text-decoration: none;
            font-family: 'Montserrat', sans-serif;
            &.router-link-active {
				color: #75A2FF;
				font-weight: bold;
			}
		}
	} 
</style>