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
        v-ripple
        class="top-mt-150 bg-secondary text-white shadow-1 q-mx-md q-mb-sm"
        style="border-radius: 30px"
      >

        <q-item-section @click="filter=''">所有活動</q-item-section>
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
    <div class=" top-mt left-layout-lg"  >
      <div class="margin-15">
        <div class="q-mb-xl" v-for="product in filterItems" :key="product._id">
      <card :product='product'/>
    </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Card from 'src/components/Card01.vue'
export default {
  components: {
    Card
  },
  data () {
    return {
      products: [],
      filter: ''
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
      const { data } = await this.api.get('/Products')
      this.products = data.result
      console.log(data.result)
    } catch (error) {
      console.log(error)
      this.$q.notify({
        color: 'positive',
        icon: 'error',
        message: '取得錯誤!!!!!!!!!!!!!!!!'
      })
    }
  }
}
</script>
