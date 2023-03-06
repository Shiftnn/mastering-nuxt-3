<template>
  <div style="background-color: #eeecec; width: 100vw; height: 100%">
    <slot />
  </div>
</template>
<script>
export default {
  head: {
    bodyAttrs: {
      class: "full",
    },
  },
};
</script>
<style>
.full {
  width: 100%;
  height: 100%;
  margin: 0px;
}
</style>
