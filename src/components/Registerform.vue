<template>
<q-card style="width: 450px; max-width: 80vw;">
      <q-card-section class="q-pt-none">
        <div class="signup col-xs-12 col-md-6 ">
    <q-form
      @submit.prevent='register'
      ref='form'
      class="text-center"
    >
      <img style="width: 120px;" src="../assets/nomadgo-02.png" alt="">
      <div class="text-h6 q-my-md">註冊</div>
        <q-input
        v-model="form.email"
        filled
        dense
        lazy-rules
        type="email"
        label="請輸入信箱 *"
        :rules="[ val => !!val || '請輸入正確格式', isValidEmail]"/>
        <q-input
        v-model="form.account"
        filled
        dense
        lazy-rules
        type="text"
        label="請輸入帳號 *"
        :rules="[ val => val.length >= 4 && val.length <= 20  || '帳號長度為4-20個字']"/>
        <q-input
        v-model="form.password"
        filled
        dense
        lazy-rules
        type="password"
        label="請輸入密碼 *"
        :rules="[ val => val.length >= 4 && val.length <= 20  || '帳號長度為4-20個字']"/>
        <q-input
          dense
          filled
          type="text"
          v-model="form.name"
          label="暱稱 *"
          style="padding-bottom: 20px;"
          :rules="[ val => val.length > 0  || '請輸入暱稱']"/>

        <q-input
        dense
          filled
          type="number"
          v-model="form.age"
          label="年齡 *"
          :rules="[
            val => val !== null && val !== '' || '請輸入你的年齡',
            val => val > 0 && val < 100 || '請輸入正確年齡'
          ]"
        />
    </q-form>
      </div>
      </q-card-section>
      <q-card-actions align="right" class="text-teal">
        <q-btn label="註冊" color="primary" @click="register"/>
      </q-card-actions>
    </q-card>
</template>
<script>
export default {
  data () {
    return {
      form: {
        account: '',
        password: '',
        email: '',
        name: '',
        age: ''
      }
    }
  },
  methods: {
    async register () {
      const valid = this.$refs.form.validate()
      if (!valid) return
      try {
        await this.api.post('/users', this.form)
        this.$q.notify({
          message: '註冊成功',
          icon: 'check_circle',
          color: '$positive'
        })
        this.$router.push('/')
      } catch (error) {
        this.$q.notify({
          message: `註冊失敗 ${error.response.data.message}`,
          icon: 'error',
          color: '$info '
        })
      }
    },
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(val) || '請輸入正確格式'
    }
  }
}
</script>
