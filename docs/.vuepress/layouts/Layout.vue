<script setup lang="ts">
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { onUnmounted, onMounted, ref } from "vue";

const isDarkMode = ref(false);
let observer: MutationObserver;

// 检测暗色模式的函数
const checkDarkMode = () => {
  const html = document.querySelector("html");
  if (html) {
    const newDarkMode = html.getAttribute("data-theme") === "dark";
    // 添加 console.log 来追踪变化 (debug)
    // if (newDarkMode !== isDarkMode.value) {
    //   console.log('主题变化:', newDarkMode ? '切换到暗色模式' : '切换到亮色模式');
    // }
    isDarkMode.value = newDarkMode;
  }
};

onMounted(() => {
  const html = document.querySelector("html");
  if (!html) return;

  // 初始检查和日志
  // console.log('初始主题状态:', isDarkMode.value ? '暗色模式' : '亮色模式');
  checkDarkMode();

  // 监听主题变化
  observer = new MutationObserver((mutations) => {
    // 添加 mutation 日志
    // console.log('检测到 data-theme 变化:', mutations);
    checkDarkMode();
  });
  
  observer.observe(html, {
    attributeFilter: ["data-theme"],
    attributes: true,
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <!-- 评论 -->
      <CommentService :darkmode="isDarkMode" />
    </template>
  </ParentLayout>
</template>

<style lang="css"></style>