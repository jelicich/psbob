<template>
  <button class="ActionButton" :class="`ActionButton--${size}`" @click="emit">
    <slot></slot>
  </button>
</template>
<script>
import events from '@/constants/events';

export default {
  name: 'ActionButton',
  props: {
    size: {
      type: String,
      required: false,
      default: 'md',
      validator: (value) => {
        return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value);
      }
    }
  },
  methods: {
    emit() {
      this.$emit(events.CLICK);
    }
  }
}
</script>