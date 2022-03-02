<template>
<q-page id="card" >
  <h4 class="text-center text-secondary">最新文章</h4>
  <card02/>
  <h4 class="text-center  text-secondary" >熱門活動</h4>
  <div class="row justify-center margin-15 overflow-hidden" style="height: 350px;" >
    <div class="col-md-3 "  v-for='product in products' :key='product._id'>
      <card :product='product'/>
    </div>
  </div>
  </q-page>
</template>
<script>
import Card from 'src/components/Card01.vue'
import Card02 from 'src/components/Card02.vue'

export default {
  components: {
    Card,
    Card02
  },
  data () {
    return {
      products: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/Products')
      this.products = data.result
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
