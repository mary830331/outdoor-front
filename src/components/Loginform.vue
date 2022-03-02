<template>
    <q-card style="width: 450px; max-width: 80vw;">
      <q-card-section class="q-pt-none">
        <div class="signup col-xs-12 col-md-6 ">
    <q-form
      @submit.prevent='login'
      class="text-center"
      ref='form'
    >
      <img style="width: 120px;" src="../assets/nomadgo-02.png" alt="">
      <div class="text-h6 q-my-md">登入</div>
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
    </q-form>
      </div>
    </q-card-section>

    <q-card-actions align="right" class="bg-white text-teal">
      <q-btn label="登入" color="primary" @click="login"/>
    </q-card-actions>
  </q-card>
</template>
<style scoped>

</style>
<script>
export default {
  data () {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const valid = this.$refs.form.validate()
      if (!valid) return
      this.$store.dispatch('user/login', this.form)
    }
  }
}
</script>
