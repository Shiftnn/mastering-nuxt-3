<template>
  Welcome to the course area!
  <div style="display: flex; gap: 100px">
    <div style="display: flex; flex-direction: column; gap: 10px">
      <div
        style="display: flex; flex-direction: column; gap: 10px"
        v-for="(chapter, chapterNum) in course.chapters"
        :key="chapter.slug"
      >
        <h1>{{ chapter.title }}</h1>
        <nuxt-link
          :to="lesson.path"
          v-for="(lesson, index) in course.chapters[chapterNum].lessons"
          :key="lesson.slug"
        >
          <p>{{ index + 1 }}. {{ lesson.title }}</p>
        </nuxt-link>
      </div>
    </div>
    <div>
      <nuxtPage />
    </div>
  </div>
</template>

<script setup>
const course = useCourse();
const route = useRoute();
console.log(course);
</script>
<style scoped>
.router-link-active {
  color: rgb(103, 204, 9);
}
a {
  text-decoration: none;
  color: black;
}
/* .blue {
  color: rgb(20, 84, 168);
} */
</style>
;
