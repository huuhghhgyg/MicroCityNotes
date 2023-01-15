<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
        <!-- 评论 -->
        <CommentService />
    </template>
  </ParentLayout>
</template>

<style lang="css">
</style>