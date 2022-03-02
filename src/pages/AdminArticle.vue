<template>
<div>
  <admin/>
  <div class="top-mt left-layout-lg " >
        <div class="justify-center row margin-15">
            <q-dialog
              v-model="Forum"
              >
                <q-card style="width: 700px; max-width: 80vw;">
                  <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-ma-xl row"
          >
            <q-input
            class="col-12"
              filled
              dense
              v-model="forum.title"
              label="標題"
              lazy-rules
              :rules="[ val => val && val.length > 0 || '請勿空白']"
            />
            <div class=" col-6">上架文章
            <div class="q-ml-md q-my-md">
            <q-radio dense  v-model="forum.sell" val="true" :value="true" label="上架" />
            <q-radio dense v-model="forum.sell" val="false" :value="false" label="下架" />
            </div>
            </div>
            <div class="col-6">
              檔案上傳
              <img-inputer
              accept="image/*"
              v-model="forum.image"
              theme="light"
              size="normal"
              bottom-text="點選或拖拽圖片以修改"
              hover-text="點選或拖拽圖片以修改"
              placeholder="點選或拖拽選擇圖片"
              :max-size="1024"
              exceed-size-text="檔案大小不能超過">
              </img-inputer>
            </div>

            <q-input
              filled
              label="內容"
              type="textarea"
              lazy-rules
              class="col-12"
              v-model="forum.content"
            />

            <div class="q-mt-md">
              <q-btn label="Submit" type="submit" color="primary"/>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
          </q-card>
    </q-dialog>

    <q-dialog
        v-model="Group"
        label="揪團文章"
        >
          <q-card
          style="width: 700px; max-width: 80vw;">
            <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-ma-xl row"
          >
            <div class="col-6">
              <q-input
              filled
              dense
              v-model="group.name"
              label="📍地點標題"
              lazy-rules
              class="col-6"
              :rules="[ val => val && val.length > 0 || '請勿空白']"
            />
            <q-input
              filled
              dense
              v-model="group.time"
              label="🕖時間"
              :rules="[ val => val && val.length > 0 || '請勿空白']"
            />

            <q-select
              filled
              dense
              v-model="group.category"
              label="活動分類"
              :options="categories"
              lazy-rules
              :rules="[ val => val && val.length > 0 || '請勿空白']"
            />
            <div class="q-my-sm q-mb-xs">上架活動
            <div class="q-gutter-xl">
            <q-radio dense v-model="group.sell" val="true" :value="true" label=" 上架 🔺" />
            <q-radio dense v-model="group.sell" val="false" :value="false" label=" 下架 🔻" />
            </div>
            </div>
            </div>
            <div class="col-6">
              <q-input
              filled
              dense
              v-model="group.price"
              label="💰預估預算金額"
              lazy-rules
              class="q-ml-md "
              :rules="[ val => val && val.length > 0 || '請勿空白']"
            />
              <p class="q-ml-md">檔案上傳</p>
              <img-inputer
              class="q-ml-md"
              style="width: 95%;"
              accept="image/*"
              v-model="group.image"
              theme="light"
              size="normal "
              bottom-text="點選或拖拽圖片以修改"
              hover-text="點選或拖拽圖片以修改"
              placeholder="點選或拖拽選擇圖片"
              :max-size="1024"
              exceed-size-text="檔案大小不能超過">
              </img-inputer>
            </div>
            <q-input
              filled
              dense
              label="活動行程"
              type="textarea"
              lazy-rules
              v-model="group.description"
              class="q-mt-sm col-12"
            />
            <div class="col-12 q-mt-xs">
              注意事項
            <q-input
              filled
              dense
              type="textarea"
              lazy-rules
              v-model="group.precautions"
            /></div>

            <div class="q-mt-md">
              <q-btn label="Submit" type="submit" color="primary"/>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
          </q-card>
    </q-dialog>

<q-card class="col-12">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="negative"
          indicator-color="negative"
          align="justify"
          narrow-indicator
        >
          <q-tab name="Forum-btn" label="討論區文章" />
          <q-tab name="Group-btn" label="揪團文章"/>
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Forum-btn">
            <q-btn style="width: 30%;" color="negative" label="新增" @click="Forum = true" />
            <q-table
              :data="products"
              :columns="columns"
              ref='table'
              :title="group._id.length > 0 ? '編輯討論區文章' : '新增討論區文章'"
            />
          </q-tab-panel>
          <q-tab-panel name="Group-btn" >
            <q-btn style="width: 30%;" color="negative" label="新增"
            @click="Group = true" />
            <q-table
              :data="products"
              :columns="columns"
              grid
              ref='table'
              :title="group._id.length > 0 ? '編輯揪團文章' : '新增揪團文章'"
            >
              <template v-slot:item="props" >
              <div class=" col-sm-6 col-md-4 col-lg-3 col-xs-12" >
            <q-card class=" text-grey-8 q-ma-sm">
              <img :src="props.row.image" class="text-center"  style="width: 100%; height: 150px;">
              <div class="q-pa-sm">
              <q-card-section class="text-center q-pa-none">
              <strong class="text-weight-bold text-h6">{{ props.row.name }}</strong>
            </q-card-section>
            <q-card-section class="text-center q-pa-none">
              <strong class="text-weight-light text-body2">預估金額:<br>{{ props.row.price }}</strong>
            </q-card-section>
            <q-card-section class="text-center q-pa-none">
              <strong class="col-6 text-weight-light text-body2">分類:{{ props.row.category }}</strong>
            </q-card-section>
            <q-card-section class="text-center row q-pa-xs">
              <strong class="col-6 text-weight-light">上架: {{ props.row.sell ? '⭕' : '❌' }}</strong>
              <q-btn rounded size="xs" color="secondary" label="編輯" @click='editProduct(props.pageIndex)'/>
            </q-card-section>
            </div>
            </q-card>
                </div>
              </template>
            </q-table>
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
      </div>
    </div>
</div>
</template>

<script>
import Admin from 'src/components/Admin.vue'
export default {
  name: 'AdminArrticle',
  data () {
    return {
      columns: [
        { name: 'image', label: '圖片', field: 'image' },
        { name: 'name', label: '活動名稱', field: 'name' },
        { name: 'price', label: '預估價格', field: 'price' },
        { name: 'category', label: '分類 ', field: 'category' },
        { name: 'sell', label: '上架', field: 'sell' },
        { name: 'action', label: '操作', field: 'action' }
      ],
      tab: 'Forum-btn',
      forum: {
        title: '',
        description: '',
        sell: 'true',
        images: null
      },
      Forum: false,
      Group: false,
      group: {
        name: '',
        time: '',
        price: '',
        description: '',
        image: null,
        sell: 'true',
        category: '',
        precautions: `1.食宿自理\n2.出發前三天視氣象預報決定是否出發\n3.視情況調整行程，主揪有權決定是否撤退\n4.須具備獨自走完全程的能力，主揪只是想找人同行，沒有幫人背東西.找路.分享裝備的義務\n5.需配合參與行前安全評估會議，確認同行者有製作地圖且具備足夠登山知識\n6.若有行前體訓請盡量參加，可能是先約座簡單的山爬互相認識，跟完全陌生人爬長天數會抖\n7.有慢性疾病請事先告知，隨團無醫生能急救\n8.此為自組團，可一起申請入園入山，主揪非領隊、嚮導、保姆之職，只是熱心發起活動。會要求簽署風險自負同意書\n9.參與的夥伴們行進間互助合作及安全提醒\n
`,
        _id: '',
        authorId: '',
        authorName: '',
        authorAge: '',
        authorNews: '',
        authorImg: '',
        index: -1
      },
      products: [],
      categories: [
        '百岳', '中級山', '郊山', '探勘', '秘境', '露營', '野溪溫泉', '溯溪', '水肺潛水', '自由潛水', 'SUP', '衝浪', '其他'
      ]
    }
  },
  components: {
    Admin
  },
  computed: {
    // filterGroup () {
    //   return this.products.filter(item => {
    //     if (item.authorId === this.$store.getters['user/user']._id) return true
    //     console.log('A' + item.authorId)
    //     return true
    //   })
    // }
  },
  methods: {
    // onSubmit () {
    //   this.$q.notify({
    //     color: 'positive',
    //     icon: 'check_circle',
    //     message: '發表成功 !'
    //   })
    // },
    async onSubmit (event) {
      event.preventDefault()
      const fd = new FormData()
      for (const key in this.group) {
        if (key !== '_id') {
          fd.append(key, this.group[key])
        }
      }

      try {
        if (this.group._id.length === 0) {
          const { data } = await this.api.post('/products', fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.getters['user/user'].token
            }
          })
          this.products.push(data.result)
          this.$q.notify({
            color: 'positive',
            icon: 'check_circle',
            message: '發表成功 !'
          })
        } else {
          const { data } = await this.api.patch('/products/' + this.group._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.getters['user/user'].token
            }
          })
          this.products[this.group.index] = { ...this.group, image: data.result.image }
        }
        this.Group = false
      } catch (error) {
        this.$q.notify({
          color: 'positive',
          icon: 'error',
          message: `錯誤 ${error.response.data.message}`
        })
        console.log(error)
      }
    },
    onReset (event) {
      if (this.modalSubmitting) {
        event.preventDefault()
        return
      }
      this.forum.title = null
      this.forum.description = null
      this.forum.images = null
      this.forum.content = null
      this.forum.sell = 'true'
      this.group.name = null
      this.group.time = null
      this.group.price = null
      this.group.description = null
      this.group.images = null
      this.group.sell = 'true'
      this.group.precautions = `1.食宿自理\n2.出發前三天視氣象預報決定是否出發\n3.視情況調整行程，主揪有權決定是否撤退\n4.須具備獨自走完全程的能力，主揪只是想找人同行，沒有幫人背東西.找路.分享裝備的義務\n5.需配合參與行前安全評估會議，確認同行者有製作地圖且具備足夠登山知識\n6.若有行前體訓請盡量參加，可能是先約座簡單的山爬互相認識，跟完全陌生人爬長天數會抖\n7.有慢性疾病請事先告知，隨團無醫生能急救\n8.此為自組團，可一起申請入園入山，主揪非領隊、嚮導、保姆之職，只是熱心發起活動。會要求簽署風險自負同意書\n9.參與的夥伴們行進間互助合作及安全提醒\n
      `
      this.group.category = ''
    },
    editProduct (index) {
      this.group = { ...this.products[index], image: null, index }
      this.Group = true
    }
  },
  async created () {
    try {
      // 抓作者ID authorId
      this.group.authorId = this.$store.getters['user/user']._id
      this.group.authorName = this.$store.getters['user/user'].name
      this.group.authorAge = this.$store.getters['user/user'].age
      this.group.authorNews = this.$store.getters['user/user'].news
      this.group.authorImg = this.$store.getters['user/user'].image
      const { data } = await this.api.get('/products/all/' + this.$route.params.id, {
        headers: {
          authorization: 'Bearer ' + this.$store.getters['user/user'].token
        }
      })
      this.products = data.result
    } catch (error) {
      console.log(error)
      this.$q.notify({
        color: 'positive',
        icon: 'error',
        message: '取得商品失敗'
      })
    }
  }
}
</script>
