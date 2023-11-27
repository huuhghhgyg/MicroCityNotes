<!-- 仅在部署后生效，预览时本组件无效 -->
<script>
export default {
  data() {
    return {
      added: true, //默认已经添加
      lang: document.documentElement.lang,
      deferredPrompt: null,
    };
  },
  mounted() {
    window.addEventListener("beforeinstallprompt", (event) => {
      // 检测到用户可能会将网站添加到主屏幕
      // 在这里您可以显示一个提示，提醒用户将网站添加到主屏幕
      console.log("浏览器支持安装渐进式Web应用程序");
      if ("standalone" in window.navigator && window.navigator.standalone) {
        // 用户已将网站添加到主屏幕
        // console.log("用户已经将网站添加至主屏幕");
        this.added = true;
      } else {
        // 用户尚未将网站添加到主屏幕
        // console.log("用户尚未将网站添加到主屏幕");
        this.added = false;
      }
      // 阻止浏览器默认的安装提示
      event.preventDefault();
      // 将安装提示事件保存起来
      this.deferredPrompt = event;
    });
  },
  methods: {
    async promptA2hs() {
      this.deferredPrompt.prompt(); // Log the result
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("用户已接受A2HS");
          this.added = true; // 更新状态
        } else {
          console.log("用户已拒绝A2HS");
        }
        // 重置延迟提示变量，因为
        // prompt() 只能调用一次。
        this.deferredPrompt = null;
      });
    },
  },
};
// console.log("A2HS提示组件已加载");
</script>

<template>
  <div v-if="!added">
    <p v-if="lang=='zh-CN'">由于本站架设于Github上，国内访问可能不稳定🤧。强烈建议您将本站添加至主屏幕，以便网络状况不佳或离线时使用。您可以 <a @click="promptA2hs()" style="font-weight: bold">点击此处</a> 将本站作为Web应用程序安装。</p>
    <p v-else>You can <a @click="promptA2hs()" style="font-weight: bold">click here</a> to install this site as a web application 📦</p>
  </div>
</template>
