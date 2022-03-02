<template>
<div class=" top-mt"  >
      <div class="margin-15">
        <forum-card class="q-mb-xl"/>
        <forum-card class="q-mb-xl"/>
        <forum-card class="q-mb-xl"/>
        <forum-card class="q-mb-xl"/>
        <forum-card class="q-mb-xl"/>
        <forum-card class="q-mb-xl"/>
        <forum-card class="q-mb-xl"/>
      </div>
    </div>
</template>
<script>
import ForumCard from 'src/components/ForumCard.vue'
export default {
  name: 'PageIndex',
  current: 3,
  components: {
    ForumCard
  }
}
</script>
