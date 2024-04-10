<template>
  <button
    class="ActionButton"
    :class="`ActionButton--${size} ActionButton--${variant}`"
    @click="emit"
  >
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
    },
    variant: {
      type: String,
      required: false,
      default: 'primary',
      validator: (value) => {
        return ['primary', 'secondary'].includes(value);
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

<style lang="scss">
@import '@/styles/variables';

.ActionButton {
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  font-family: "Grandstander", cursive;
  font-weight: 500;

  &--xs {
    border-radius: $border-radius-sm;
    font-size: 14px;
    gap: 10px;
    padding: 6px 10px;
  }

  &--sm {
    border-radius: $border-radius-sm;
    font-size: 16px;
    gap: 12px;
    padding: 8px 14px;
  }

  &--md {
    border-radius: $border-radius;
    font-size: 18px;
    gap: 14px;
    padding: 10px 18px;
  }

  &--lg {
    border-radius: $border-radius-lg;
    font-size: 20px;
    gap: 16px;
    padding: 12px 20px;
  }

  &--xl {
    border-radius: $border-radius-lg;
    font-size: 22px;
    font-weight: 700;
    gap: 18px;
    padding: 14px 22px;
  }

  &--primary {
    background-color: $primary;
    border-color: $primary;
    color: $black;
  }

  // TODO:
  &--secondary {
    background-color: $white;
    border-color: $black;
    color: $black;
  }
}
</style>