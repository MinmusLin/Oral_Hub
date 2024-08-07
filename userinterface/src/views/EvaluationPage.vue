<template>
  <div class='page-container'>
    <div class='title'>
      <el-icon :size='20'>
        <Picture/>
      </el-icon>
      <p>诊断图像</p>
    </div>

    <img src='../assets/Demo.jpg' alt='Demo' class='evaluation-image'/>

    <div class='title'>
      <el-icon :size='20'>
        <DataLine/>
      </el-icon>
      <p>风险评估</p>
    </div>

    <div class='content'>
      <p>① 替牙期，存在错𬌗畸形；</p>
      <p>② 存在牙菌斑，龋齿风险高。</p>
    </div>

    <div class='title'>
      <el-icon :size='20'>
        <Memo/>
      </el-icon>
      <p>诊断</p>
    </div>

    <div class='content'>
      <p>安氏 Ⅲ 类近中错𬌗，前牙反𬌗。</p>
    </div>

    <div class='title'>
      <el-icon :size='20'>
        <FirstAidKit/>
      </el-icon>
      <p>建议</p>
    </div>

    <div class='content'>
      <p>① 接受口腔正畸科医生的早期矫治，以免影响恒压萌出和颌骨发育；</p>
      <p>② 勤刷牙，预防龋病和口腔炎症。</p>
    </div>

    <el-button type='primary'
               size='large'
               style='width: 100%; margin-top: 6px; margin-bottom: 24px'
               @click="router.push('/upload')">
      返回
    </el-button>
  </div>
</template>

<script setup lang='ts'>
import {useRouter} from 'vue-router'
import {DataLine, FirstAidKit, Memo, Picture} from '@element-plus/icons-vue'

const router = useRouter()
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
}

.title {
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid lightgrey;
}

.title p {
  font-weight: bold;
  font-size: 18px;
  margin-left: 10px;
}

.evaluation-image {
  width: 100%;
  border-radius: 10px;
  margin-top: 16px;
}

.content {
  width: 100%;
}

.content p {
  text-align: justify;
}
</style>
