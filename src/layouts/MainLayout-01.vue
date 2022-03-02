<template>
  <q-layout view="lHh Lpr lff"  >
    <q-header  class="q-mt-xl text-blue-grey-10 bg-01 " >
      <div class="bg-fff"></div>
      <q-toolbar class="q-pt-10 ">
        <q-btn class="toolbar"
          flat
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title  >
          <q-item to="/"><img  style="width: 110px;" src="../../src/assets/nomadgo-02.png" alt=""></q-item>
        </q-toolbar-title>
            <div class="menu-list01">
          <q-list v-ripple class="row">
            <q-item to="/">
              <q-item-section >
                首頁
              </q-item-section>
            </q-item>

            <q-item  v-ripple to="/Group">
              <q-item-section>
                揪團
              </q-item-section>
            </q-item>
            <q-item  v-ripple to="/Content">
              <q-item-section>
                揪山友
              </q-item-section>
            </q-item>

            <q-item  v-ripple to="/Forum">
              <q-item-section>
                戶外討論
              </q-item-section>
            </q-item>
            <q-item  v-ripple to="/Aboutme">
              <q-item-section>
                關於我們
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div side class="row avatar01  user-name">
          <q-avatar size="50px" >
          <img to="/personalfile" :src='user.image'>
            <q-badge floating color="teal">{{ user.group }}</q-badge>
          </q-avatar>
          <div class="q-px-sm column">
            <q-item v-if="!user.isLogin"><a @click="LogIn = true" v-if="!user.isLogin" >登入</a></q-item>
            <q-item v-if="!user.isLogin"><a @click="Register = true" v-if="!user.isLogin" >註冊</a></q-item>
            <q-item to="/personalfile" v-if="user.isLogin" ><a v-if="user.isLogin" class="text-weight-bolder" > {{ user.name }} </a></q-item>
            <q-item v-if="user.isLogin"><a @click="logout" v-if="user.isLogin">登出</a></q-item>
              <q-dialog v-model="LogIn">
                <loginform/>
            </q-dialog>
            <q-dialog v-model="Register">
              <Registerform/>
            </q-dialog>
          </div>
        </div>
      </q-toolbar>
    </q-header>
    <div class=" menu-right">
      <q-fab
        v-model="fab2"
        label-class="bg-grey-2 text-purple"
        vertical-actions-align="right"
        color="info "
        icon="keyboard_arrow_up"
        direction="up"
        class="q-mb-md q-mr-md"
      >
        <q-fab-action label-class="text-white"  color="warning" to="/Aboutme" label-position="left"  @click="onClick" hide-icon label="關於我們"/>
        <q-fab-action label-class="text-white" color="accent" to="/Forum" label-position="left" @click="onClick" hide-icon label="戶外討論"/>
        <q-fab-action label-class="text-white" color="warning" to="/Content" label-position="left" @click="onClick" hide-icon label="揪山友"/>
        <q-fab-action label-class="text-white" color="accent" to="/Group"  label-position="left" @click="onClick" hide-icon label="揪團" />
      </q-fab>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Loginform from 'src/components/Loginform.vue'
import Registerform from 'src/components/Registerform.vue'
export default {
  name: 'MainLayout01',
  components: {
    Loginform,
    Registerform
  },
  data () {
    return {
      fab2: false,
      LogIn: false,
      Register: false
    }
  },
  methods: {
    onClick () {
      // console.log('Clicked on a fab action')
    },
    logout () {
      this.$store.dispatch('user/logout')
    }
  },
  computed: {
    user () {
      return this.$store.getters['user/user']
    }
  }
}
</script>
