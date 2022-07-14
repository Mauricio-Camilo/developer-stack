// TODO
import * as questionRepository from "./../repositories/questionRepository.js";

export interface CreateQuestionData {
    question : string;
}

async function createQuestion (question : string) {
    await questionRepository.saveQuestion(question)
}
const questionService = {
    createQuestion
};
export default questionService;