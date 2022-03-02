<template>
  <div>
    <q-list bordered padding class="rounded-borders bg-white  left-layout text-center">

      <q-item
        clickable
        v-ripple
        to="/personalfile"
        class="top-mt-150 bg-secondary text-white shadow-1 q-mx-md q-mb-sm"
        style="border-radius: 30px"
      >
        <q-item-section>個人檔案編輯</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        to="/friend"
        class=" bg-secondary text-white shadow-1 q-mx-md q-mb-sm"
        style="border-radius: 30px"
      >

        <q-item-section>好友追蹤列表</q-item-section>
      </q-item>

        <q-item
        clickable
        v-ripple
        to="/article"
        class=" bg-secondary text-white shadow-1 q-mx-md q-mb-sm"
        style="border-radius: 30px"
      >

        <q-item-section>文章管理</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        to="/addgroup"
        class=" bg-secondary text-white shadow-1 q-mx-md q-mb-sm"
        style="border-radius: 15px"
      >

        <q-item-section>揪團活動管理</q-item-section>
      </q-item>
<q-expansion-item  expand-separator default-opened label="活動進行中" class="bg-white text-dark group-area ">
          <q-card v-for='product in products' :key='product._id'  >
            <q-item v-if="product.sell === true"  :product='product' :to='"/Groupproduct/" + product._id' class="row justify-center">
            {{ product.name }}<br>
            {{ product.time }}
            </q-item>

          </q-card>
        </q-expansion-item>
<q-expansion-item expand-separator default-opened label="以過期活動" class="bg-white text-dark group-area row justify-center">
          <q-card v-for='product in products' :key='product._id'>
            <q-item v-if="product.sell === false" :product='product' :to='"/Groupproduct/" + product._id' class="row justify-center">
            {{ product.name }}<br>
            {{ product.time }}
            </q-item>

          </q-card>
        </q-expansion-item>

    </q-list>
  </div>
</template>
<script>
export default {
  data () {
    return {
      products: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/me/addgroup', {
        headers: {
          authorization: 'Bearer ' + this.$store.getters['user/user'].token
        }
      })
      console.log(data)
      for (const d of data.result) {
        this.products.push(d.product)
      }
    } catch (error) {
      this.$q.notify({
        icon: 'error',
        message: '活動讀取失敗',
        color: 'info '
      })
    }
  }
}
</script>
