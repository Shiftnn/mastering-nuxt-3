<template>
  <div style="display: flex; width: 100%; justify-content: space-between;">
    Welcome to the course area!
    <userCard />
  </div>

  <div class="course">
    <aside class="course-chapters" style="display: flex; flex-direction: column; gap: 10px">
      <div class="course-chapters_content"
        v-for="(chapter, chapterNum) in course.chapters"
        :key="chapter.slug"
      >
        <div style="display: flex; flex-direction: column; justify-content: start;">
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
const course = useCourse();
const route = useRoute();
console.log(course)
const errorHandler = async (error) => {
  await navigateTo("/course");
  error.value = null;
};
</script>
<style scoped>
.router-link-active {
  color: rgb(103, 204, 9);
}
a {
  text-decoration: none;
  color: black;
}
.course {
  display: flex;
  gap: 20px;
  width: 100vw;
}
.course-chapters {
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  min-width: 250px;
  margin-left: 20px;
}
.course-chapters_content {
  max-width: 273px;
}
.course-chapters_content a {
  max-width: 70%;
}
</style>
