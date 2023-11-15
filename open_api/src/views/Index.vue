<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="index">
        <Sidebar />
        <MainHead />
        <FirstIndex />
        <SecondIndex />
        <ThirdIndex />
        <FourthIndex />
        <FifthIndex />
    </div>
</template>

<script>
// @ts-ignore
import Sidebar from "@/components/common/SideBar.vue";
import MainHead from "@/components/index/MainHead.vue";
import FirstIndex from "@/components/index/FirstIndex.vue";
import SecondIndex from "@/components/index/SecondIndex.vue";
import ThirdIndex from "@/components/index/ThirdIndex.vue";
import FourthIndex from "@/components/index/FourthIndex.vue";
import FifthIndex from "@/components/index/FifthIndex.vue";

export default {
    components: {
        MainHead,
        FirstIndex,
        SecondIndex,
        ThirdIndex,
        FourthIndex,
        FifthIndex,
        Sidebar
    }
}
</script>

<style lang="scss" scoped>
.index {
    font-family: 'Montserrat', sans-serif;
}
</style>