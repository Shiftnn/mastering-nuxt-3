import courseData from './courseUse'

type Lesson = {
  title: string;
  slug: string;
  number: number;
  text: string
}

type Chapter = {
  title: string,
  slug: string,
  number: number,
  lessons: Lesson[],
}

export const useCourse = () => {
  const chapters: Chapter[] = courseData.chapters.map((chapter) => {
      const lessons: Lesson[] = chapter.lessons.map((lesson) => ({
        ...lesson,
        path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`
      }));
      return {
        ...chapter, lessons,
      }
    }
  );
  return {
    ...courseData, chapters
  }
}
