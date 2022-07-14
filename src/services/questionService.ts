// TODO
import * as questionRepository from "./../repositories/questionRepository.js";

export interface CreateQuestionData {
    question : string;
}

async function createQuestion (question : string) {
    await questionRepository.saveQuestion(question)
}

async function createAnswer (id : number, question : string) {
    await questionRepository.saveAnswer(id, question)
}

async function getAllQuestions () {
    const questions = await questionRepository.getAllQuestions();
    return questions;
}

async function getQuestionById (id) {
    const questionsById = await questionRepository.getQuestionById(id);
    return questionsById;
}


const questionService = {
    createQuestion,
    getAllQuestions,
    getQuestionById,
    createAnswer
};
export default questionService;