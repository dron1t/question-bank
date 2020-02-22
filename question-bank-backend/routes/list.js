const graphqlHTTP = require('express-graphql')
const express = require('express')
const router = express.Router()
const { buildSchema } = require('graphql')


const schema = buildSchema(`
  type Question {
    questionText: String!
    answer: String!
    similarQuestions: [Question]
    categories: [String]
    id: Int!
  }
  
  type Query {
    questionList: [Question]
  }
`);

class Question {
  constructor(questionText, answer, id, similarQuestions) {
    this.questionText = questionText
    this.answer = answer
    this.id = id
    this.similarQuestions = similarQuestions
    this.categories = categories
  }
}

const root = {
    questionList: () => {
        return [new Question('Hello', 'World', '1')]
    }
}

router.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

module.exports = router;
