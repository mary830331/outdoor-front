<template>
  <q-page>
    <div class="top-mt margin-15" >
      <h3 class="text-center text-secondary">每日推薦九位用戶</h3>
      <div class="row justify-center">
        <friendcard class="col-sm-12 col-md-4"/>
        <friendcard class="col-sm-12 col-md-4"/>
        <friendcard class="col-sm-12 col-md-4"/>
        <friendcard class="col-sm-12 col-md-4"/>
        <friendcard class="col-sm-12 col-md-4"/>
        <friendcard class="col-sm-12 col-md-4"/>
        <friendcard class="col-sm-12 col-md-4"/>
        <friendcard class="col-sm-12 col-md-4"/>
        <friendcard class="col-sm-12 col-md-4"/>
      </div>
    </div>
    <div class="content-bg"></div>
  </q-page>

</template>

<script>
import Friendcard from 'src/components/FriendCard.vue'
export default {
  name: 'PageIndex',
  components: {
    Friendcard
  }
}
</script>
