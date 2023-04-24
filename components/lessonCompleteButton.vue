<template>
    <button :class="{ but_agree: props.modelValue == 0}">
      Complete lesson
    </button>
</template>

<script setup>

const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])
console.log(props.modelValue)
console.log(emits.modelValue)
</script>

<style scoped>

button {
  font-weight: 700;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  background-color: rgba(128, 128, 128, 0.589);
}

</style>