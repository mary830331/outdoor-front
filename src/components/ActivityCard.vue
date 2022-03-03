<template>
    <q-expansion-item class="my-card01">
        <template v-slot:header >
          <div style="width: 100%;">
      <q-card-section class="row" >
        <img class="headshot q-mr-sm" src="https://picsum.photos/50/50/?random=10">
        <div >
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
        </div>
      </q-card-section>

          <q-card-section>
            <div class="row items-center no-wrap">
        <q-icon left class="group-icon" name="room" style="font-size: 2em;" />
        <p>Lorem ipsum dolor sit amet cons adipisicing elit. Voluptatum, ipsum?</p>
        </div>
        <div class="row items-center no-wrap">
        <q-icon left class="group-icon" name="watch_later" style="font-size:2em;" />
        <p>Lorem ipsum dolor sit amet cons adipisicing elit. Voluptatum, ipsum?</p>
        </div>
        <div class="row items-center no-wrap">
        <q-icon left class="group-icon" name="paid" style="font-size: 2em;"/>
        <p>Lorem ipsum dolor sit amet consect adipisicing elit. Voluptatum, ipsum?</p>
        </div>
        <div>
        <q-chip dense color="secondary" text-color="white" icon="done">
        須能力審核
        </q-chip>
        <q-chip dense color="accent" text-color="white" icon="done">
        縱走
        </q-chip>
        <q-chip dense color="positive" text-color="white" icon="done">
        自組團共食
        </q-chip>
        <q-chip dense color="accent" text-color="white" icon="done">
        內建5人
        </q-chip>
        </div>
          </q-card-section>
        </div>
        </template>
        <div class="q-mx-xl">
          <h5 class="q-my-xs">行程規劃</h5>
  <q-timeline color="positive" >

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
      >
        <div >
          Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 21, 1986"
        icon="delete"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>
            <q-timeline-entry
        title="Event Title"
        subtitle="February 21, 1986"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </div>
      </q-timeline-entry>
    </q-timeline>
    <q-separator />
    <div class="text-grey-7">
      <div class="q-my-md text-subtitle2">注意事項</div>
      <p class="q-mx-md text-caption q-mb-md">1.食宿自理<br>
        2.出發前三天視氣象預報決定是否出發<br>
        3.視情況調整行程，主揪有權決定是否撤退<br>
        4.須具備獨自走完全程的能力，主揪只是想找人同行，沒有幫人背東西.找路.分享裝備的義務<br>
        5.需配合參與行前安全評估會議，確認同行者有製作地圖且具備足夠登山知識<br>
        6.若有行前體訓請盡量參加，可能是先約座簡單的山爬互相認識，跟完全陌生人爬長天數會抖<br>
        7.有慢性疾病請事先告知，隨團無醫生能急救<br>
        8.此為自組團，可一起申請入園入山，主揪非領隊、嚮導、保姆之職，只是熱心發起活動。會要求簽署風險自負同意書<br>
        9.參與的夥伴們行進間互助合作及安全提醒<br>
        </p>
    </div>
    <q-separator/>
    <div class="q-pb-md q-mt-sm row">
      <div class="col-10">
      <q-input
        rounded
        dense
        outlined
        label="留言......"
      /></div>
      <div class="col-2 q-pl-md flex justify-end">
      <q-btn color="positive " label="報名參加"/></div>
  </div>
    </div>
      </q-expansion-item>
</template>
<style scoped>

</style>
