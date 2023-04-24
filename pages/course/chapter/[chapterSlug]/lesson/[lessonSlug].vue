<template>
  <div class="lesson">
    <div class="lesson-content">
      <h3> LESSON {{ chapter.number }} - {{ lesson.number }}</h3>
      <h1>{{ lesson.title }}</h1> 
      <p v-if="lessonText">{{ lessonText }}</p>
      <!-- <lessonCompleteButton
        :modelValue="isCompleted"
        @update:modelValue="toggleComplete"
      /> -->
    </div>
  </div>
</template>

<script setup>
import { useCourseProgress } from '~/stores/courseProgress.ts'
import useCourse from "~~/composables/useCourse";
const course = await useCourse();
const route = useRoute();
const { chapterSlug, lessonSlug } = route.params
const lesson = await useLesson(chapterSlug, lessonSlug)
const store = useCourseProgress()
const {initialize, toggleComplete} = store

initialize()

const chapter = computed(() => {
  return course.value.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

definePageMeta({
  middleware: 
  [
    async function ({ params }, to) 
    {

      const route = useRoute();
      const course = await useCourse();

      const chapter = computed(() => 
      {
        return course.value.chapters.find(
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
    }, "auth",
  ],
});

const isCompleted = computed(() => {
  return store.progress?.[chapterSlug]?.[lessonSlug] || 0
});

const lessonText = computed(() => {
  return lesson.value.text;
});

useHead({
  title: `${route.params.lessonSlug}`,
});
</script>
<style>
</style>
