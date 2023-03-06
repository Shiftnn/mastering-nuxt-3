<template>
  <div>
    <p>There is an error - {{ error.statusCode }}</p>
    <p>{{ error.message }}</p>
    <p>
      Pleaso, go to
      <a @click="errorHandler()">
        <strong style="cursor: pointer">first lesson</strong>
      </a>
    </p>
  </div>
</template>

<script setup>
const error = useError();
const errorHandler = () => {
  clearError({
    redirect:
      "/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3",
  });
};
</script>

<style lang="scss" scoped></style>
