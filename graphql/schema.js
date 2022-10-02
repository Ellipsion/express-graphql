import {buildSchema} from "graphql";

const schema = buildSchema(`
    type Course {
        id: ID!
        courseName: String!
        category: String
        price: Float!
        stack: Stack
        language: String
        teachingAssists: [TeachingAssist]
    }

    type TeachingAssist {
        firstName: String!
        lastName: String!
        experience: Int
    }

    enum Stack {
        FRONT_END
        BACK_END
        FULL_STACK
    }

    type Query {
        getCourses(page: Int, limit: Int = 1): [Course]
        getCourse(id: ID!): Course
    }

    input CourseInput {
        id: ID
        courseName: String!
        category: String
        price: Float!
        language: String
        teachingAssists: [TeachingAssistInput]
        stack: Stack
    }

    input TeachingAssistInput {
        firstName: String!
        lastName: String!
        experience: Int
    }

    type Mutation {
        addCourse(input: CourseInput): Course
    }

`);

export default schema;