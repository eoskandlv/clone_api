<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="index">
        <MainHead />
        <FirstIndex />
        <SecondIndex />
    </div>
</template>

<script>
import MainHead from "@/components/index/MainHead.vue";
import FirstIndex from "@/components/index/FirstIndex.vue";
import SecondIndex from "@/components/index/SecondIndex.vue";

export default {
    components: {
        MainHead,
        FirstIndex,
        SecondIndex
    }
}
</script>

<style lang="scss" scoped>
</style>