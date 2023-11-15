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
                    <div 
                        class="sidebar-wrap__icon" 
                        :class="{ 'sidebar-wrap__icon--selected': selectedSection === 'main-head' }"
                    >
                        01
                    </div>
                </div>
            </div>
            <div class="sidebar-wrap__item">
                <div 
                    @click="moveSection('first-index')" 
                    class="sidebar-wrap__menu"
                >
                    <div 
                        class="sidebar-wrap__icon"
                        :class="{ 'sidebar-wrap__icon--selected': selectedSection === 'first-index' }"
                    >
                        02
                    </div>
                </div>
            </div>
            <div class="sidebar-wrap__item">
                <div 
                    @click="moveSection('second-index')" 
                    class="sidebar-wrap__menu"
                >
                    <div 
                        class="sidebar-wrap__icon"
                        :class="{ 'sidebar-wrap__icon--selected': selectedSection === 'second-index' }"
                    >
                        03
                    </div>
                </div>
            </div>
            <div class="sidebar-wrap__item">
                <div 
                    @click="moveSection('third-index')" 
                    class="sidebar-wrap__menu"
                >
                    <div 
                        class="sidebar-wrap__icon"
                        :class="{ 'sidebar-wrap__icon--selected': selectedSection === 'third-index' }"
                    >
                        04
                    </div>
                </div>
            </div>
            <div class="sidebar-wrap__item">
                <div 
                    @click="moveSection('fourth-index')" 
                    class="sidebar-wrap__menu"
                >
                    <div 
                        class="sidebar-wrap__icon"
                        :class="{ 'sidebar-wrap__icon--selected': selectedSection === 'fourth-index' }"
                    >
                        05
                    </div>
                </div>
            </div>
            <div
                @click="moveSection('fifth-index')"  
                class="sidebar-wrap__item"
            >
                <div class="sidebar-wrap__menu">
                    <div 
                        class="sidebar-wrap__icon"
                        :class="{ 'sidebar-wrap__icon--selected': selectedSection === 'fifth-index' }"
                    >
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
            selectedSection: ''
        }
    },
    mounted() {
        window.addEventListener('scroll', this.detectCurrentSection);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.detectCurrentSection);
    },
    methods: {
         /**********************************************************************
         *  @method     : 스크롤 시 현재 섹션 감지
         *  @returns    { undefined }
         *********************************************************************/
        detectCurrentSection() {
            const sections = ['main-head', 'first-index', 'second-index', 'third-index', 'fourth-index', 'fifth-index'];

            for (const section of sections) {
                const element = document.querySelector("." + section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        this.selectedSection = section;
                        break;
                    }
                }
            }
        },
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
            color: #fff;
        }
         &__icon--selected {
            color: #75A2FF; 
        }
	}
</style>