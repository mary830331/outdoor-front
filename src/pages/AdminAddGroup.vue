<template>
<div>
<admin/>
  <div class="top-mt left-layout-lg addgroup" >
      <div class="row justify-center margin-15">
        <q-card class="my-card02 row" style="width: 100%;">
          <div class="col-3">
            <q-list padding class="shadow-2 " style="width: 100%; ;height: 100%; border-radius: 50px 0 0 0 ;">
              <q-item-label class="text-center" header>已加入活動討論區</q-item-label>
              <q-table
              :data="products"
              :columns="columns"
              ref='table'
              flat
              hide-header
              hide-bottom
              class="overflow-hidden"
            >
              <template  v-slot:body="props">
                <q-tr v-if="props.row.sell === true" :props="props" class="row "  >

                    <q-td  caption key="category" :props="props" class="col-12 row" >
                    <div  class="col-10 text-h6 text-weight-bolder">{{ props.row.category }}</div>
                    <div class="col-2">
                      <q-btn
                        rounded
                        dense
                        color="info"
                        size="md"
                        label="查看"
                        :to='"/Groupproduct/" + props.row._id'
                      />
                    </div>
                  </q-td>
                  <q-td  key="time" :props="props"  class="col-12 text-caption text-weight-thin" style="white-space:pre-line;overflow:hidden;">{{ props.row.time }}</q-td>
                    <q-td  key="name" :props="props"  class="col-12 " style="white-space:pre-line;overflow:hidden;">{{ props.row.name }}</q-td>
                </q-tr>
              </template>
              </q-table>

          </q-list>
          </div>
  <div class="q-pa-md col-9 row justify-center">
    <div style="width: 100%; max-width: 800px ;height: 600px;" >
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="['欸欸欸 怎麼不能聊天阿']"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[
          '你不知道?',
          '功能待開發阿 哈哈哈哈哈'
        ]"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="negative"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['我來不及做,不過可能也做不出來Q______Q']"
        stamp="1 minutes ago"
        text-color="white"
        bg-color="negative"
      />
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="['好吧....那先這樣']"
        stamp="1 minutes ago"
        sent
        bg-color="amber-7"
      />
    </div>
    <q-input
      style="width: 100%;"
      v-model="text"
      outlined
    >
    <template v-slot:after>
          <q-btn round dense flat icon="send" />
        </template>
      </q-input>
  </div>
          </q-card>
      </div>
    </div>
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
      text: '',
      products: [],
      columns: [
        { name: 'name', field: 'name', align: 'left' },
        { name: 'category', field: 'category', align: 'left' },
        { name: 'time', field: 'time', align: 'left' }
        // { name: 'sell', label: '上架', field: 'sell' }
      ]
    }
  },
  methods: {
    async updateGroup (index, quantity) {
      try {
        await this.api.patch('/users/me/addgroup',
          { product: this.products[index].product._id, quantity },
          {
            headers: {
              authorization: 'Bearer ' + this.$store.getters['user/user'].token
            }
          }
        )
        if (quantity === 0) {
          this.products.splice(index, 1)
          this.$store.commit('user/updateGroup', this.user.addgroup - 1)
        }
      } catch (error) {
        this.$q.notify({
          color: 'positive',
          icon: 'error',
          message: '錯誤XXX'
        })
      }
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/me/addgroup', {
        headers: {
          authorization: 'Bearer ' + this.$store.getters['user/user'].token
        }
      })
      for (const d of data.result) {
        this.products.push(d.product)
      }
    } catch (error) {
      this.$q.notify({
        icon: 'error',
        message: '參加活動失敗',
        color: 'info '
      })
    }
  }
}
</script>
