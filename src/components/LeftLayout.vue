<template>
  <div >
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
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'outbox'"
        @click="link = 'outbox'"
        active-class="my-menu-link"
        class=" bg-secondary text-white shadow-1 q-mx-md q-mb-sm"
        style="border-radius: 30px"
      >

        <q-item-section>最新活動</q-item-section>
      </q-item> -->

<q-expansion-item
        label="活動分類"
        default-opened
        class="top-mt-150 bg-secondary text-white q-mx-md q-mb-sm group-area"
        style="border-radius: 15px"
      >
        <q-expansion-item expand-separator default-opened label="分類" class="bg-white text-dark group-area">
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
              <q-btn flat color="white" text-color="black" @click="filter='野溪溫泉'" label="野溪溫泉" />
              </q-card-section>
            <q-card-section >
              <q-btn flat color="white" text-color="black" @click="filter='溯溪'" label="溯溪" />
              </q-card-section>
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
            <q-card-section >
              <q-btn flat color="white" text-color="black" @click="filter='其他'" label="其他" />
              </q-card-section>
          </q-card>
        </q-expansion-item>

      </q-expansion-item>

    </q-list>
  </div>
</template>
<script>
export default {
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
      const { data } = await this.api.get('/products/')
      this.products = data.result
    } catch (error) {
      // this.$router.push('/')
      console.log(error)
    }
  }
}
</script>
