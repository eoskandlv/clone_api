<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="index">
        <MainHead />
        <FirstIndex />
    </div>
</template>

<script>
import MainHead from "@/components/index/MainHead.vue";
import FirstIndex from "@/components/index/FirstIndex.vue";

export default {
    components: {
        MainHead,
        FirstIndex
    }
}
</script>

<style lang="scss" scoped>
</style>