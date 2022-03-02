<template>
  <q-page >
    <div class="left-layout" >
    <q-list bordered padding class="rounded-borders  left-layout text-center">
      <!-- <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link "
        class="top-mt-150 bg-secondary text-white shadow-1 q-mx-md q-mb-sm"
        style="border-radius: 30px"
      >

        <q-item-section>熱門活動</q-item-section>
      </q-item> -->

      <q-item
        clickable
        to="/Group"
        v-ripple
        class="top-mt-150 bg-secondary text-white shadow-1 q-mx-md q-mb-sm"
        style="border-radius: 30px"
      >

        <q-item-section >
        <q-btn flat color="white" text-color="black" label="所有活動" />
        </q-item-section>
      </q-item>

<q-expansion-item
        label="活動分類"
        default-opened
        class=" bg-secondary text-white q-mx-md q-mb-sm group-area"
        style="border-radius: 15px"
      >
        <q-expansion-item expand-separator default-opened label="山 分類" class="bg-white text-dark group-area">
          <q-card>
            <q-card-section>
              <q-btn flat color="white" text-color="black" @click="filter='百岳'" label="百岳" />
              </q-card-section>
            <q-card-section>
              <q-btn flat color="white" text-color="black" @click="filter='中級山'" label="中級山" />
              </q-card-section>
            <q-card-section >
              <q-btn flat color="white" text-color="black" @click="filter='郊山'" label="郊山" />
              </q-card-section>
            <q-card-section >
              <q-btn flat color="white" text-color="black" @click="filter='探勘'" label="探勘" />
            </q-card-section>
            <q-card-section >
              <q-btn flat color="white" text-color="black" @click="filter='秘境'" label="秘境" />
              </q-card-section>
            <q-card-section >
              <q-btn flat color="white" text-color="black" @click="filter='露營'" label="露營" />
              </q-card-section>
            <q-card-section >
              <q-btn flat color="white" text-color="black" @click="filter='其他'" label="其他" />
              </q-card-section>
            <q-card-section >
              <q-btn flat color="white" text-color="black" @click="filter='野溪溫泉'" label="野溪溫泉" />
              </q-card-section>
            <q-card-section >
              <q-btn flat color="white" text-color="black" @click="filter='溯溪'" label="溯溪" />
              </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item expand-separator default-opened label="海 分類" class="bg-white text-dark group-area">
          <q-card>
            <q-card-section >
              <q-btn flat color="white" text-color="black" @click="filter='水肺潛水'" label="水肺潛水" />
              </q-card-section>
            <q-card-section >
              <q-btn flat color="white" text-color="black" @click="filter='自由潛水'" label="自由潛水" />
              </q-card-section>
            <q-card-section >
            <q-btn flat color="white" text-color="black" @click="filter='SUP'" label="SUP" />
            </q-card-section>
            <q-card-section >
              <q-btn flat color="white" text-color="black" @click="filter='衝浪'" label="衝浪" />
              </q-card-section>

          </q-card>
        </q-expansion-item>

      </q-expansion-item>

    </q-list>
  </div>
    <div class="top-mt left-layout-lg " >
        <div class="justify-center margin-15">
          <q-card class="my-card02 row">
        <q-img
        class="col-6 q-mx-xl q-mt-xl"
          :src='image'
          basic
        >
        </q-img>
        <q-card-section class="col-4 q-mt-xl">
          <div class="row">
            <div class="col-12">
            <q-item-label class="text-h5 float-left">{{ authorName }}</q-item-label>
            <q-item-label caption class=" q-ml-sm float-right" >
              {{ authorAge }}
            </q-item-label>
            </div>
            <q-item-label  class=" q-my-md text-h6 text-grey-7">
              {{ authorNews }}
            </q-item-label>
        </div>
        <div class="text-weight-bold" style="line-height: 1.8rem;">
              <div class="text-h6 text-weight-bolder">{{ name }}</div><br>
          <q-icon left class="group-icon" name="watch_later" style="font-size:1.5em;" />
          時間: {{ time }} <br>
          <q-icon left class="group-icon" name="paid" style="font-size: 1.5em;"/>
          預估金額: {{ price }} <br>
          活動分類:
          <q-chip dense color="info" text-color="white" icon="done">
          {{ category }}
          </q-chip> <br>
          活動進行中:{{ sell ? '⭕活動進行中' : '❌活動已下架' }} <br>
          <div class="q-pt-lg flex justify-end">
            <q-btn color="secondary" label="回活動列表" to="/Group" style="height: 50px;" class="q-mr-sm"/>
            <q-btn color="info" label="報名參加" style="height: 50px;" @click='addGroup'/></div>
        </div>
        </q-card-section>
        <q-card-section style="width: 100%;">
          <q-item-label class="q-mx-xl text-weight-bolder">
            <h5 class="q-my-xs text-positive">行程規劃說明</h5>
            <div class="text-weight-regular"  style="white-space:pre-wrap;line-height: 1.5rem;">{{ description }}</div>
          </q-item-label>
          <q-separator spaced="xl" class="q-mx-xl"  />
          <q-item-label class=" col-10 text-weight-bolder text-caption q-mx-xl q-mb-xl">
            活動注意事項:
            <div class="text-weight-light text-caption"  style="white-space:pre-wrap;">{{ precautions }}</div>
          </q-item-label>
        </q-card-section>
      </q-card>
        </div>
      </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      time: '',
      name: '',
      price: 0,
      description: '',
      image: '',
      sell: false,
      category: '',
      precautions: '',
      products: [],
      filter: ''
    }
  },
  methods: {
    addGroup () {
      this.$store.dispatch('user/addGroup', { product: this.$route.params.id, quantity: 1 })
    }
  },
  computed: {
    filterItems () {
      return this.products.filter(item => {
        if (this.filter === '') return true
        return item.category === this.filter
      })
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/' + this.$route.params.id)
      this.precautions = data.result.precautions
      this.time = data.result.time
      this.name = data.result.name
      this.price = data.result.price
      this.description = data.result.description
      this.image = data.result.image
      this.sell = data.result.sell
      this.category = data.result.category
      this.authorName = data.result.authorName
      this.authorAge = data.result.authorAge
      this.authorNews = data.result.authorNews
      this.authorImg = data.result.authorImg
      console.log(data.result.authorNews)
    } catch (error) {
      // this.$router.push('/')
      console.log(error)
    }
  }
}
</script>
