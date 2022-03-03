<template>
<div>
<div class=" top-mt q-mb-xl"  >
      <div class="margin-15 ">
        <forum-card class="q-mb-xl"/>
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
      </div>
    </div>
    <div class=" q-mb-xl"  >
      <div class="margin-15 ">
        <forum-card class="q-mb-xl"/>
            <q-expansion-item class="my-card01 q-mx-sm">
        <template v-slot:header >
          <div style="width: 100%;">
      <q-card-section class="row" >
        <img class="headshot q-mr-sm" src="https://picsum.photos/50/50/?random=99">
        <div >
        <div class="text-h6">小CCC</div>
        <div class="text-subtitle2">#靠北登山</div>
        </div>
      </q-card-section>

          <q-card-section>
檜谷山莊莊主辛苦了! 228假日救了一堆新手年輕人!<br>
北大武單攻的難度，應該比玉山單攻及雪山單攻再難一些(山路較多攀爬地形，長度也比較長，但是還是一堆年輕人前仆後繼地要去單攻，到底自己練好了沒啊!<br>
如果是北部的山友，建議出發前要去走陽明山大縱走全段23公里，能在12小時內完成的人，才去挑戰以上三條單攻路線。<br>
中部山友至少要去走個谷關七雄的八唐縱走，南部山友可以走旗靈月縱走來回路線(以下山友回應建議)。<br>
沒體力沒經驗又沒裝備的山友，拜託不要上山去製造山難啊!<br>
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
      </div>
    </div>
    <div class=" q-mb-xl"  >
      <div class="margin-15 ">
        <forum-card class="q-mb-xl"/>
            <q-expansion-item class="my-card01 q-mx-sm">
        <template v-slot:header >
          <div style="width: 100%;">
      <q-card-section class="row" >
        <img class="headshot q-mr-sm" src="https://picsum.photos/50/50/?random=17">
        <div >
        <div class="text-h6">tomato</div>
        <div class="text-subtitle2">#靠北登山</div>
        </div>
      </q-card-section>

          <q-card-section>
本來想靠北日前萬山岩雕的事，不過有另一則貼文引起我的注意。有山友在友站詢問下過雨後有哪些中級山比較不會那麼濕滑？我不禁莞爾，連雨後都不濕滑，那還算中級山嗎？然後我又看到了很多奇葩的回覆。
原來有那麼多人不知道甚麼是中級山哦，怪不得先前有部落客去中級山社團張貼火炎山的旅遊須知，我心想賺點閱也得看地方吧，班門弄斧。
話說回來，希望那些回覆貼文的山友只是不清楚中級山的定義，而不是連自己去過的山有多高都不曉得🤔<br>
最後，提醒大家以後在臉書提問時，篩選以下四種人：<br>
第一種人，閱讀能力有問題，答非所問。<br>
第二種人，一味搶答，搪塞答案，胡說八道。<br>
第三種人，不知道自己是錯的，好心辦壞事。<br>
第四種人… 一時忘了該怎麼形容，等我想到再告訴你😅
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
      </div>
    </div>
    <div class=" q-mb-xl"  >
      <div class="margin-15 ">
        <forum-card class="q-mb-xl"/>
            <q-expansion-item class="my-card01 q-mx-sm">
        <template v-slot:header >
          <div style="width: 100%;">
      <q-card-section class="row" >
        <img class="headshot q-mr-sm" src="https://picsum.photos/50/50/?random=61">
        <div >
        <div class="text-h6">apple</div>
        <div class="text-subtitle2">#靠北登山</div>
        </div>
      </q-card-section>

          <q-card-section>
我想靠北一下昨天2/13中午左右從玉山下山的人（很抱歉我沒有辦法稱這樣的人是山友）<br>
昨天2/13從玉山下山時難免會遇到上山的山友相互會車是很正常的。<br>
但是有一位先生偏偏在我們跟上山的山友交會的時候，硬從我們之間穿過去，形成了三個人瞬間並排在一起的狀態，且似乎還撞到一位上山的山友（因為那女山友，還大聲的抱怨撞到她了）<br>
對於這樣的人，我真不知道他是家裡有什麼急事還是他趕著去投胎，非得這樣超越我們，即使我們走不快，也沒有必要這樣吧？萬一造成對方受傷了，他要負責嗎？
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
      </div>
    </div>
    <div class=" q-mb-xl"  >
      <div class="margin-15 ">
        <forum-card class="q-mb-xl"/>
            <q-expansion-item class="my-card01 q-mx-sm">
        <template v-slot:header >
          <div style="width: 100%;">
      <q-card-section class="row" >
        <img class="headshot q-mr-sm" src="https://picsum.photos/50/50/?random=3">
        <div >
        <div class="text-h6">AMY</div>
        <div class="text-subtitle2">#靠北登山</div>
        </div>
      </q-card-section>

          <q-card-section>
不過是脫隊先走，動不動就說別人犯了[遺棄罪]。(你懂遺棄罪的要件嗎?)<br>
公開場地拍照也做了去識別化，動不動就說別人侵犯[隱私權][肖像權][著作權]。(有沒有搞清楚別人發的照片內容?)<br>
妨害名譽的誹謗與公然侮辱，也一堆亂七八糟不懂拿捏或是曲解誤用。(法官都不一定有相同見解了，你各位最正義最懂法律？)<br>
在靠北這裡看到的法律見解，要看是哪位發言的，有正確見解的真的不多。<br>
你各位鍵盤法律高手，要不要先讀點書去考一下司法人員高考再來發表高論? <br>
貴島法學常識教育與登山教育一樣失敗。國民法官法上路令人堪憂。
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
      </div>
    </div>
    <div class=" q-mb-xl"  >
      <div class="margin-15 ">
        <forum-card class="q-mb-xl"/>
            <q-expansion-item class="my-card01 q-mx-sm">
        <template v-slot:header >
          <div style="width: 100%;">
      <q-card-section class="row" >
        <img class="headshot q-mr-sm" src="https://picsum.photos/50/50/?random=66">
        <div >
        <div class="text-h6">YYYYY</div>
        <div class="text-subtitle2">#靠北登山</div>
        </div>
      </q-card-section>
大家好，我是台灣三六八創辦人陳彥宇，首先很抱歉讓大家覺得我總是當個縮頭烏龜不願意出來面對解釋並且道歉，主要是小弟真的不太會說話，很怕又惹得大家不開心，但事發至今，我想我本人出面說明承擔是必須的結果
針對此次淨山事件，以下是新竹林區管理處某篇文章的回覆
您好，我是新竹林區管理處員工，有關最近網紅淨山清掉「霞喀羅古道」日治時期酒瓶一事，說明如下：
一、本處及委託步道清潔維護之「養老Yulu 文化生態協會」對於網紅淨山活動事先並不知情，也沒有參與。在活動結束後養老協會夥伴才接獲通知協助處理山友淨山活動搬運至登山口的垃圾。<br>
二、經了解，養老協會比令理事長前往查看及著手垃圾分類結果，清運出來的瓶罐大多屬高粱酒瓶、保力達酒瓶、米酒瓶、鐵罐等。另發現有日治時期的酒瓶3瓶，分別為一瓶日本啤酒、一瓶日本清酒及一瓶殺草劑藥瓶，協會人員已放回駐在所周遭附近。<br>
三、活動後再於相關駐在所勘查結果，附近的日治時期酒瓶並無被破壞情形。<br>
四、後續將由本處盤點記錄沿線具有歷史意義的物件，包括日治期間留下的日用瓶罐，定期查勘，並研議設置相關告示解說牌誌。
          <q-card-section>

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
      </div>
    </div>
  </div>
</template>
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
