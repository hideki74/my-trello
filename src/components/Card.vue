<template>
<div class="card">
  <button class="close-button" @click="removeCardFromList">
    X
  </button>
  <div class="body">
    {{ body }}
  </div>
</div>
</template>

<script>
export default {
  props: {
    body: {
      type: String,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    },
    cardIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeCardFromList() {
      if(confirm('本当のこのカードを削除しますか？')) {
        this.$store.dispatch('removeCardFromList', {cardIndex: this.cardIndex, listIndex: this.listIndex})
      }
    }
  }
}
</script>