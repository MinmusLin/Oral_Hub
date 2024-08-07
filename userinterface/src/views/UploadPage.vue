<template>
  <div class='page-container'>
    <div class='title'>
      <el-icon :size='20'>
        <Picture/>
      </el-icon>
      <p>姓名：</p>
    </div>

    <div class='title'>
      <el-icon :size='20'>
        <DataLine/>
      </el-icon>
      <p>日期：</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {DataLine, Picture} from '@element-plus/icons-vue'
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
</style>
