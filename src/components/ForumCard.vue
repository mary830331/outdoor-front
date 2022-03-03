<template>
    <q-expansion-item class="my-card01 q-mx-sm">
        <template v-slot:header >
          <div style="width: 100%;">
      <q-card-section class="row" >
        <img class="headshot q-mr-sm" src="https://picsum.photos/50/50/?random=1">
        <div >
        <div class="text-h6">MARY CHOU</div>
        <div class="text-subtitle2">#靠北登山</div>
        </div>
      </q-card-section>

          <q-card-section>
          228連假不只北大武意外多，連南投山區也是....而且都是可以避免的意外!<br>
新手、裝備不全體能不足、全隊不一起行動、不會用離線地圖...這些人可不可以不要上山製造山難啊....<br>
神阿縱走最高高度才2300公尺也會有高山症?應該是那隊員本身就有疾病硬上山吧!<br>
五人、六人隊伍才幾個人而已，隊員們不走在一起，搞到失蹤迷路還不會用離線地圖(那路徑上明明路條也超多)<br>
玉主爬完硬要再爬北峰，膝蓋痛還要叫救援?!
        <div>
        <q-chip dense color="secondary" text-color="white" icon="done">
        #靠北登山
        </q-chip>
        </div>
          </q-card-section>
        </div>
        </template>
        <div class="q-mx-xl">
    <hr>
    <q-input bottom-slots v-model="text" label="請輸入內容......" :dense="dense">
        <template v-slot:before>
          <q-avatar>
            <img :src='user.image'>
          </q-avatar>
        </template>

        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:after>
          <q-btn round dense flat icon="send" />
        </template>
      </q-input>
    </div>
      </q-expansion-item>
</template>
<style scoped>

</style>

<script>
export default {
  data () {
    return {
      text: '',
      dense: false
    }
  },
  computed: {
    user () {
      return this.$store.getters['user/user']
    }
  }
}
</script>
