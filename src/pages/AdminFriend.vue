<template>
<div>
  <admin class=" left-layout"/>
    <div class="top-mt left-layout-lg " >
      <div class="row justify-center margin-15">
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
</div>
</template>

<script>
import Admin from 'src/components/Admin.vue'
import Friendcard from 'src/components/FriendCard.vue'
export default {
  name: 'AdminFriend',
  components: {
    Admin,
    Friendcard
  }
}
</script>
