<template>
  <div class="scrollbar">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ScrollBar",
  components: {},
  props: {},
};
</script>

<style lang="less" scoped>
.scrollbar {
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    height: 1px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
