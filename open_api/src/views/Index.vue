<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="index">
        <MainHead />
        <FirstIndex />
        <SecondIndex />
        <ThirdIndex />
        <FourthIndex />
        <FifthIndex />
    </div>
</template>

<script>
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
        FifthIndex
    }
}
</script>

<style lang="scss" scoped>
</style>