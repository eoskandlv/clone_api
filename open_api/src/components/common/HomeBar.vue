/* 
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ @소스코드: 정의 명세서                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┣ @설명: 홈 메뉴바
┣ @작성: 이수정, 2023-11-09                     
┣ @내역: 이수정, 2023-11-09, 최초등록
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/
<template>
	<div class="homebar">
        <div class="homebar-wrap">
            <div class="homebar-wrap__logo">
                <div class="homebar-wrap__menu">
                    DAILY<br>BUTTON
                </div>
            </div>
            <div class="homebar-wrap__item">
                <router-link to="/index" class="homebar-wrap__menu" >
                    <div class="homebar-wrap__icon">
                        <v-icon
                            class="icon-color"
                        >
                            mdi-home-outline
                        </v-icon>
                        About
                    </div>
                </router-link>
            </div>
            <div class="homebar-wrap__item">
                <router-link to="guide" class="homebar-wrap__menu">
                    <div class="homebar-wrap__icon">
                        <v-icon
                            class="icon-color"
                        >
                            mdi-map-outline
                        </v-icon>
                        Guide
                    </div>
                </router-link>
            </div>
            <div class="homebar-wrap__item">
                <div class="homebar-wrap__menu">
                    <div class="homebar-wrap__icon">
                        <v-icon
                            class="icon-color"
                        >
                            mdi-map-marker-radius-outline
                        </v-icon>
                        Sample
                    </div>
                </div>
            </div>
            <div class="homebar-wrap__item">
                <div class="homebar-wrap__menu">
                    <div class="homebar-wrap__icon">
                        <v-icon
                            class="icon-color"
                        >
                            mdi-file-document-multiple-outline
                        </v-icon>
                        Docs
                    </div>
                </div>
            </div>
            <div class="homebar-wrap__item">
                <div class="homebar-wrap__menu">
                    <div class="homebar-wrap__icon">
                        <v-icon
                            class="icon-color"
                        >
                            mdi-magic-staff
                        </v-icon>
                        Wizard
                    </div>
                </div>
            </div>
            <div class="homebar-wrap__item">
                <div class="homebar-wrap__menu">
                    <div class="homebar-wrap__icon">
                        <v-icon
                            class="icon-color"
                        >
                            mdi-newspaper-variant-outline   
                        </v-icon>
                        News
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
	.homebar {
		position: fixed;
		left: 0;
		width: 86px;
        z-index: 1;
        font-family: 'Montserrat', sans-serif;

	}
	.homebar-wrap {
		width: 100%;
		height: 100vh;
		background: #292929;
        overflow-x: hidden;
        overflow-y: auto;
        &__logo {
            color: #7e8788;
        }
        &__item {
            background: #75A2FF;
            border-bottom: 1px solid #292929;
        }
		&__menu {
			display: flex;
			justify-content: center;
            align-items: center;
			line-height: 20px;
			color: #fff;
			font-weight: bold;
			cursor: pointer;
			user-select: none;
            text-align: center;
            padding: 20px 0;
            text-decoration: none;
            &:hover {
                background: #fff;
                color: #75A2FF;
                .icon-color {
                    color: #75A2FF;
                }
            }
            &.router-link-active {
				background: #fff;
				color: #75A2FF;
				font-weight: bold;
                 .icon-color {
                    color: #75A2FF;
                }
			}
		}
        &__icon {
            display: flex;
            flex-direction: column;
            .icon-color {
                color: #fff;
            }
        }
	} 
</style>