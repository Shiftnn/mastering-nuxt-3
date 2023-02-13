<template>
  <p>text inside the lesson: {{ lessonText }}</p>
  <p>
    this is the lesson number {{ route.params.lessonSlug }}. From chapter number
    {{ route.params.chapterSlug }}
  </p>
</template>

<script setup>
const course = useCourse();
const route = useRoute();

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

const lessonText = computed(() => {
  return lesson.value.text;
});

useHead({
  title: `${route.params.lessonSlug}`,
});
</script>
