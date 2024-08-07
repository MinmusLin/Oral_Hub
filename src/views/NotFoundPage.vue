<template>
  <div class='page-container'>
    <img src='../assets/Logo.png' :width='260' alt='Logo'>
    <h1>哎呀！您访问的页面找不到啦</h1>
    <p>可能是网址输入错误或页面已被管理员移除</p>
    <!--suppress TypeScriptValidateTypes-->
    <el-button type='primary' size='large' plain round :icon='House' @click="router.push('/home')">
      返回主页
    </el-button>
  </div>
</template>

<script setup lang='ts'>
import {useRouter} from 'vue-router'
import {House} from '@element-plus/icons-vue'

const router = useRouter()
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 26px;
  color: var(--el-color-primary-dark-2);
}

p {
  margin-top: 0;
  padding-bottom: 30px;
}
</style>
