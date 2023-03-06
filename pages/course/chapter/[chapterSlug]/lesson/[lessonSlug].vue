<template>
  <div class="lesson">
    <div class="lesson-content">
      <h3> LESSON {{ chapter.number }} - {{ lesson.number }}</h3>
      <h1>{{ lesson.title }}</h1> 
      <p>{{ lessonText }}</p>
    </div>
  </div>
</template>

<script setup>
import auth from "~~/middleware/auth";

const course = useCourse();
const route = useRoute();
console.log(course[route.params.chapterSlug])
const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});
definePageMeta({
  middleware: [
    function ({ params }, to) {
      const route = useRoute();
      const course = useCourse();

      const chapter = computed(() => {
        return course.chapters.find(
          (chapter) => chapter.slug === route.params.chapterSlug
        );
      });

      const lesson = computed(() => {
        return chapter.value.lessons.find(
          (lesson) => lesson.slug === route.params.lessonSlug
        );
      });

      if (!chapter) {
        abortNavigation(
          createError({
            statusCode: 404,
            message: "Chapter is not found",
          })
        );
      }

      if (!lesson) {
        abortNavigation(
          createError({
            statusCode: 404,
            message: "Lesson is not found",
          })
        );
      }
    },
    "auth",
  ],
});

const lesson = computed(() => {
  return chapter.value.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});

const lessonText = computed(() => {
  return lesson.value.text;
});

useHead({
  title: `${route.params.lessonSlug}`,
});
</script>
<style>
  .lesson-content {
    display: flex;
    flex-direction: column;
    max-width: 600px;
  }
  .lesson {
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    min-width: 250px;
    height: 100vh;
    width: 70vw;
    padding: 10%;
  }
</style>
