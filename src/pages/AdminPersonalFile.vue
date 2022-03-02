<template>
  <div>
    <admin/>
    <div class="top-mt left-layout-lg " >
        <div class="justify-center margin-15">
          <q-card class="my-card02 row">
          <img-inputer
              class="col-md-6 q-mx-xl q-mt-xl col-xs-10"
              accept="image/*"
              v-model="form.image"
              theme="light"
              size="normal"
              bottom-text="點選或拖拽圖片以修改"
              hover-text="點選或拖拽圖片以修改"
              placeholder="點選或拖拽選擇圖片"
              :max-size="1024"
              style="height: 400px;"
              exceed-size-text="檔案大小不能超過">
              </img-inputer>
        <q-card-section class="col-md-4 q-mt-xl col-xs-12">
          <div class="row">
            <div class="col-12">
            <q-item-label class="text-h5 float-left">
              <q-input
              maxlength="7"
              borderless
              style="width: 280px;"
              v-model="form.name"
              label="修改暱稱" />
              <q-input
                borderless
                v-model="form.age"
                label="修改年齡"
                style="width: 280px;"
                type="number" />
              <q-input
              borderless
              v-model="form.news"
              style="width: 280px;"
              label="修改訊息" />
            </q-item-label>
            </div>
            <div class="cursor-pointer shadow-3 q-pa-md " style="height: 200px;width: 300px;" >
              {{ form.description }}
              <q-popup-edit v-model="form.description" auto-save v-slot="scope">
              <q-input
                autofocus
                dense
                v-model="scope.value"
                counter
                @keyup.enter="scope.set"
                hint="請輸入內容"
                type="textarea"
                :rules="[ val => val.length > 0  || '請輸入暱稱']"
              >
              </q-input>
            </q-popup-edit>
            </div>
        </div>
        </q-card-section>
        <q-card-section class="q-px-xl col-12">
          <q-chip dense color="secondary" text-color="white" icon="done">
            {{ form.category01 }}
          </q-chip>
          <q-chip dense color="positive" text-color="white" icon="done">
            {{ form.category02 }}
          </q-chip>
          <q-chip dense color="negative" text-color="white" icon="done">
            {{ form.category03 }}
          </q-chip>
          <div class="row">
            <q-select class="col-4" borderless v-model="form.category01" :options="form.options" label="請選擇你最喜歡的三個活動" />
            <q-select class="col-4" borderless v-model="form.category02" :options="form.options" label="請選擇你最喜歡的三個活動" />
            <q-select class="col-4" borderless v-model="form.category03" :options="form.options" label="請選擇你最喜歡的三個活動" /></div>
        </q-card-section>
        <div class="col-12 q-px-xl">
          <q-separator size="1px"/></div>
        <div class="q-pl-xl col-6 q-py-md row">
          <img class="col-2 q-pr-sm q-pb-sm" src="https://picsum.photos/id/50/80/80" alt="">
          <img class="col-2 q-pr-sm q-pb-sm" src="https://picsum.photos/id/50/80/80" alt="">
          <img class="col-2 q-pr-sm q-pb-sm" src="https://picsum.photos/id/50/80/80" alt="">
          <img class="col-2 q-pr-sm q-pb-sm" src="https://picsum.photos/id/50/80/80" alt="">
          <img class="col-2 q-pr-sm q-pb-sm" src="https://picsum.photos/id/50/80/80" alt="">
          <img class="col-2 q-pr-sm q-pb-sm" src="https://picsum.photos/id/50/80/80" alt="">
        </div>
        <div class="col-5 row">
          <div class=" col-10 text-h6 text-center text-weight-bolder">接下來尚有 {{ user.addgroup.length }} 個活動
          </div>
          <q-btn class="col-2" style="height: 50px;" @click="dispatch" color="info">送出</q-btn>
          </div>
      </q-card>
        </div>
      </div>
    <div class="content-bg"></div>
  </div>
</template>

<script>
import Admin from 'src/components/Admin.vue'
export default {
  components: {
    Admin
  },
  data () {
    return {
      users: [],
      productsname: '',
      form: {
        name: '',
        age: null,
        news: '',
        image: null,
        options: ['百岳', '中級山', '郊山', '探勘', '秘境', '露營', '野溪溫泉', '溯溪', '水肺潛水', '自由潛水', 'SUP', '衝浪', '其他'],
        category01: '',
        category02: '',
        category03: '',
        description: ''
      }
    }
  },
  methods: {
    async dispatch () {
      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }
      try {
        const { data } = await this.api.patch('users/userinfo/' + this.user._id, fd, {
          headers: {
            authorization: 'Bearer ' + this.$store.getters['user/user'].token
          }
        })
        this.user[this.user.index] = { ...this.user, image: data.result.image }
        this.$q.notify({
          color: 'positive',
          icon: 'check_circle',
          message: '上傳成功'
        })
      } catch (error) {
        console.log(error)
        this.$q.notify({
          color: 'info',
          icon: 'error',
          message: `錯誤 ${error.response.data.message}`
        })
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/me', {
        headers: {
          authorization: 'Bearer ' + this.$store.getters['user/user'].token
        }
      })
      this.form.name = data.result.name
      this.form.age = data.result.age
      this.form.news = data.result.news
      this.form.image = data.result.image
      this.form.category01 = data.result.category01
      this.form.category02 = data.result.category02
      this.form.category03 = data.result.category03
      this.form.description = data.result.description
    } catch (error) {
      console.log(error)
      this.$q.notify({
        color: 'positive',
        icon: 'error',
        message: '取得資料失敗'
      })
    }
  }
}
</script>
