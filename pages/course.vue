<template>
  <div style="display: flex; width: 100%; justify-content: space-between;">
    <h2>{{ course.title }}</h2>
    <userCard />
  </div>

  <div class="course">
    <aside class="course-chapters" style="display: flex; flex-direction: column; gap: 10px">
      <div class="course-chapters_content"
        v-for="(chapter, chapterNum) in course.chapters"
        :key="chapter.slug"
      >
        <div style="display: flex; flex-direction: column; justify-content: start; align-items: center;">
          <h1>{{ chapter.title }}</h1>
          <nuxt-link
            :to='`/course/chapter/${course.chapters[chapterNum].slug}/lesson/${lesson.slug}`'
            v-for="(lesson, index) in course.chapters[chapterNum].lessons"
            :key="lesson.slug"
          >
            <p>{{ index + 1 }}. {{ lesson.title }}</p>
          </nuxt-link>
        </div>
      </div>
    </aside>
    <div>
      <nuxtErrorBoundary>
        <NuxtPage />
        <template #error="{ error }">
          <div>
            {{ error }}
            <button @click="errorHandler(error)">Reset</button>
          </div>
        </template>
      </nuxtErrorBoundary>
    </div>
  </div>
</template>

<script setup>
const course = await useCourse();
const errorHandler = async (error) => {
  await navigateTo("/course");
  error.value = null;
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: black;
}

router-link-active {
  color: rgb(103, 204, 9);
}
</style>
