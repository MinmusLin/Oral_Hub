<template>
  <div class='page-container'>
    <img src='../assets/Logo.png' :width='260' alt='Logo'>

    <h1>登陆账号</h1>

    <el-tabs v-model='activeName'>
      <el-tab-pane label='密码登录' name='PasswordLogin'>
        <!--suppress TypeScriptValidateTypes-->
        <el-input v-model='telephone'
                  size='large'
                  placeholder='请输入手机号码'
                  :prefix-icon='Phone'
                  style='padding-top: 6px; width: 100%'
                  clearable>
          <template #prepend>中国 +86</template>
        </el-input>

        <!--suppress TypeScriptValidateTypes-->
        <el-input v-model='password'
                  type='password'
                  size='large'
                  :prefix-icon='Lock'
                  placeholder='请输入密码'
                  autocomplete='off'
                  style='padding-top: 20px; width: 100%'
                  show-password/>

        <el-button type='primary'
                   size='large'
                   @click='login'
                   style='margin-top: 20px; width: 100%'>
          登录
        </el-button>
      </el-tab-pane>

      <el-tab-pane label='验证码登录' name='VerificationCodeLogin'>
        <!--suppress TypeScriptValidateTypes-->
        <el-input v-model='telephone'
                  size='large'
                  placeholder='请输入手机号码'
                  :prefix-icon='Phone'
                  style='padding-top: 6px; width: 100%'
                  clearable>
          <template #prepend>中国 +86</template>
        </el-input>

        <!--suppress TypeScriptValidateTypes-->
        <el-input v-model='verificationCode'
                  size='large'
                  :prefix-icon='CircleCheck'
                  style='padding-top: 20px; width: 100%'
                  placeholder='请输入短信验证码'
                  clearable>
          <template #append>
            <el-button size='large'
                       type='info'
                       style='width: 150px'
                       @click='sendVerificationCode'
                       :disabled='countdown>0'
                       plain>
              {{ buttonLabel }}
            </el-button>
          </template>
        </el-input>

        <el-button type='primary'
                   size='large'
                   @click='login'
                   style='margin-top: 20px; width: 100%'>
          登录
        </el-button>
      </el-tab-pane>
    </el-tabs>

    <p style='font-size: 12px; color: #909399; padding-top: 6px'>
      未注册手机验证后自动登录，注册即代表同意
      <el-link type='primary'
               @click='showUserAgreement=true'
               style='margin: 0; padding: 0; font-size: 12px; transform: translateY(-1px) translateX(-3px)'>
        用户协议与隐私政策
      </el-link>
    </p>
  </div>

  <Vcode :show='isShowVCode'
         @success='isShowVCode=false'
         @fail='isShowVCode=true'
         @close='isShowVCode=true'
         successText='验证成功'
         failText='验证失败'
         sliderText='拖动滑块进行验证'/>

  <el-dialog v-model='showUserAgreement'
             title='用户协议与隐私政策'
             style='width: 350px; height: 750px'
             align-center
             :close-on-click-modal='false'
             :close-on-press-escape='false'>
    <el-scrollbar height='680'>
      <UserAgreement/>
    </el-scrollbar>
  </el-dialog>
</template>

<script setup lang='ts'>
import {useRouter} from 'vue-router'
import {ref, watch} from 'vue'
import Vcode from 'vue3-puzzle-vcode'
import {Phone, Lock, CircleCheck} from '@element-plus/icons-vue'
import UserAgreement from '../components/UserAgreement.vue'

const router = useRouter()
const activeName = ref('PasswordLogin')
const countdown = ref(0)
const buttonLabel = ref('获取短信验证码')
const isShowVCode = ref(false)
const telephone = ref('')
const password = ref('')
const verificationCode = ref('')
const showUserAgreement = ref(false)

watch(countdown, (newCount) => {
  if (newCount > 0) {
    buttonLabel.value = `${newCount} s`
  } else {
    buttonLabel.value = '获取短信验证码'
  }
})

async function sendVerificationCode() {
  if (countdown.value > 0) {
    return
  }
  countdown.value = 60
  const intervalId = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(intervalId)
    }
  }, 1000)
}

async function login() {
  isShowVCode.value = true
  while (isShowVCode.value) {
    await new Promise(resolve => setTimeout(resolve, 100))
  }
  await router.push('/upload')
}
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;
  margin: 0 auto;
}

h1 {
  padding-top: 50px;
  font-size: 30px;
}
</style>
