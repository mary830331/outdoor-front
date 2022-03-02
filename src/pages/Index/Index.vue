<template >
  <q-page >
    <video id="myVideo" autoplay loop muted>
      <source type="video/mp4" src="../../assets/pexels-rodnae-productions-8083048.mp4">
    </video>
    <img id="mountion-bg" src="../../assets/m.png" alt="">
    <section-cards/>
    <img id="y-bg" src="../../assets/bg-y.png" alt="">
    <div id="signup" class="row justify-center cc">
    <div class=" form row">
    <Registerform/>
    <div class="col-xs-12 col-md-6 text-white text-weight-bold q-pl-xl form-text q-mt-xl">Are you ready to embark on a challenging but rewarding adventure? </div>
  </div>
</div>
    <!-- <footer01/> -->
  </q-page>
</template>

<script>
import SectionCards from './SectionCards'
// import Footer01 from './Footer'
import Registerform from 'src/components/Registerform.vue'
export default {
  data () {
    return {
      name: null,
      age: null,

      accept: false
    }
  },
  components: {
    SectionCards,
    // Footer01,
    Registerform
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>
