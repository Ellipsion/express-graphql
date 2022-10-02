import { nanoid } from "nanoid";

class Course {
  constructor(
    id,
    { courseName, category, price, language, stack, teachingAssists }
  ) {
    this.id = id;
    this.courseName = courseName;
    this.category = category;
    this.price = price;
    this.language = language;
    this.stack = stack;
    this.teachingAssists = teachingAssists
  }
}

// export default Course

const courseHolder = {};


const resolvers = {
    getCourses: ({ page, limit }) => {
        const courses = Object.values(courseHolder);
        return courses.slice((page - 1) * limit, page * limit);
    },

    getCourse: ({ id }) => {
        console.log(id)
        return courseHolder[id]
    },

    addCourse: ({ input }) => {
        const id = nanoid();
        courseHolder[id] = new Course(id, input);
        console.log(courseHolder)
        return courseHolder[id];
    }
}

export default resolvers;