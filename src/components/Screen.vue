<template>
  <div :class="{'wide-screen': isWideScreen}">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Screen',
  props: {
    isWideScreen: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
.wide-screen {
  transform: scaleY(calc(9.0 / 12.0));
}
</style>
