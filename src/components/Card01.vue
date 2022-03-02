<template>
  <q-card inline class="my-card q-mx-sm q-mb-md">
      <q-card-section class="row" >
        <img class="headshot q-mr-sm" :src='product.authorImg'>
        <div >
        <div class="text-h6">{{ product.authorName }}</div>
        <div class="text-subtitle2">{{ product.authorNews }}</div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row items-center no-wrap">
        <q-icon left class="group-icon " name="room" style="font-size: 2em;" />
        <p class="overflow-hidden" style="height: 20px;white-space:pre-wrap;">{{ product.name }}</p>
        </div>
        <div class="row items-center no-wrap">
        <q-icon left class="group-icon" name="watch_later" style="font-size:1.8em;" />
        <p>{{ product.time }}</p>
        </div>
        <div class="row items-center no-wrap">
        <q-icon left class="group-icon" name="paid" style="font-size: 1.8em;"/>
        <p>{{ product.price }}</p>
        </div>
        <q-separator spaced="md" />
        <div class="overflow-hidden" style="height: 60px;white-space:pre-wrap;" >{{ product.description }}</div>
        <div>......</div>
        <div>
        <q-chip dense color="info" text-color="white" icon="done">
        {{ product.category }}
        </q-chip>
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn id="ybtn" flat color="positive" size="24px" icon="arrow_drop_down" :to='"/Groupproduct/" + product._id' />
      </q-card-actions>
    </q-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
