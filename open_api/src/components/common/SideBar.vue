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
                <div 
                    @click="moveSection('main-head')" 
                    class="sidebar-wrap__menu"
                >
                    <div class="sidebar-wrap__icon" >
                        01
                    </div>
                </div>
            </div>
            <div class="sidebar-wrap__item">
                <div 
                    @click="moveSection('first-index')" class="sidebar-wrap__menu">
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
        }
    },
    methods: {
        /**********************************************************************
         *  @method     : 해당 엘리먼트 요소로 스크롤 이동
         *  @param      { string }      :className
         *  @returns    { undefined }
         *********************************************************************/
        moveSection(className) {
            let posY = document.querySelector("." + className).offsetTop;
            window.scrollTo({ top: posY, behavior: 'smooth' })
          
        },
        
    }
}
</script>

<style lang="scss" scoped>
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
		}
        &__icon {
            
        }
	}
</style>