/* 
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ @소스코드: 정의 명세서                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┣ @설명: 페이지가드
┣ @작성: 이수정, 2023-11-09                        
┣ @내역: 이수정, 2023-11-09, 최초등록                
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*/
<template>
    <div>
        <HomeBar />
        <!-- <Sidebar /> -->
        <v-main class="user-view-guard">
            <router-view/>
        </v-main>
    </div>
</template>

<script>
// @ts-ignore
import HomeBar from "@/components/common/HomeBar.vue";

export default {
    components: {
        // Sidebar,
        HomeBar,
    },
}
</script>

<style lang="scss" scoped>
    .user-view-guard {
        width: calc(100% - 80px);
        min-width: 1024px;
        margin-left: 80px;
    }
</style>