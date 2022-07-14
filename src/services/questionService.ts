// TODO
import * as questionRepository from "./../repositories/questionRepository.js";

export interface CreateQuestionData {
    question : string;
}

async function createQuestion (question : string) {
    await questionRepository.saveQuestion(question)
}

async function getAllQuestions () {
    const questions = await questionRepository.getAllQuestions();
    return questions;
}

const questionService = {
    createQuestion,
    getAllQuestions
};
export default questionService;