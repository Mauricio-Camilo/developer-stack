import prisma  from "../config/database.js";

export async function saveQuestion (question : string) {
    await prisma.question.create({ data: {question} });
}

export async function saveAnswer (id : number, answer : string) {
    await prisma.question.create({ data: {id, answer} });
}

export async function getAllQuestions () {
    const questions = await prisma.question.findMany();
    return questions
}

export async function getQuestionById (id : number) {
    const question = await prisma.question.findUnique({ where: {id}});
    return question
}