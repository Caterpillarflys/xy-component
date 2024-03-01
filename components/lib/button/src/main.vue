<template>
  <button :class="[`button-${type}`, {
    'button-disabled': disabled,
    'button-small': size === 'small',
    'button-medium': size === 'medium',
    'button-large': size === 'large'
  }]" :disabled="disabled" @click="$emit('click')">
    {{ label }}
    <div v-if="disabled && disabledTip" class="button-disabled-tip">{{ disabledTip }}</div>
  </button>
</template>

<script>
export default {
  name: 'hxy-button',
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disabledTip: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium'
    }
  }
}
</script>

<style scoped>
.button-default {
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  transition: all 0.2s;
}

.button-default:hover {
  background-color: #e6e6e6;
}

.button-default:active {
  background-color: #d9d9d9;
}

.button-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.button-disabled-tip {
  color: red;
}
</style>