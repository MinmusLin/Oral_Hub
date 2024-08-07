<template>
  <div class='page-container'>
    <div class='title'>
      <el-icon :size='20'>
        <Picture/>
      </el-icon>
      <p>上传图像</p>
    </div>

    <div class='image-upload-container'>
      <input type='file' @change='handleFileUpload' hidden ref='fileInput' accept='image/*'/>
      <div class='image-list'>
        <img v-for='(image, index) in images' :src='image' :key='index' class='uploaded-image' alt='UploadedImage'/>
      </div>
      <el-button style='width: 100%' type='primary' size='large' @click='triggerFileInput'>
        上传图片
      </el-button>
    </div>

    <div class='title'>
      <el-icon :size='20'>
        <User/>
      </el-icon>
      <p>姓名</p>
    </div>

    <!--suppress TypeScriptValidateTypes-->
    <el-input v-model='userName'
              size='large'
              :prefix-icon='Edit'
              placeholder='请输入姓名'
              autocomplete='off'
              clearable/>

    <div class='title'>
      <el-icon :size='20'>
        <Calendar/>
      </el-icon>
      <p>日期</p>
    </div>

    <el-date-picker v-model='uploadDate'
                    type='date'
                    placeholder='请选择上传日期'
                    :disabled-date='disabledDate'
                    style='width: 100%'
                    size='large'
                    :editable='false'
                    :clearable='false'/>

    <el-button-group style='width: 100%; margin-top: 24px; margin-bottom: 24px'>
      <!--suppress TypeScriptValidateTypes-->
      <el-button plain type='primary' size='large' :icon='MessageBox' style='width: 50%'>
        存草稿
      </el-button>

      <!--suppress TypeScriptValidateTypes-->
      <el-button type='primary' size='large' :icon='Upload' style='width: 50%' @click="router.push('/evaluation')">
        上传
      </el-button>
    </el-button-group>
  </div>
</template>

<script setup lang='ts'>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {Calendar, Edit, MessageBox, Picture, Upload, User} from '@element-plus/icons-vue'

const images = ref([])
const fileInput = ref(null)
const router = useRouter()
const userName = ref('')
const uploadDate = ref('')

const triggerFileInput = () => fileInput.value.click()

const disabledDate = (time: Date) => time.getTime() > Date.now()

const handleFileUpload = (event) => {
  const files = event.target.files
  if (files.length > 0) {
    const fileReader = new FileReader()
    fileReader.onload = (e) => {
      images.value.push(e.target.result)
    }
    fileReader.readAsDataURL(files[0])
  }
}
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
}

.title p {
  font-weight: bold;
  font-size: 18px;
  margin-left: 10px;
}

.image-upload-container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-list {
  width: 100%;
}

.uploaded-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  margin-bottom: 14px;
}
</style>
