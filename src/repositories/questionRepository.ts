import prisma  from "../config/database.js";

// TODO
export async function saveQuestion (question : string) {
    await prisma.question.create({ data: {question} })
}

export async function getAllQuestions () {
    const questions = await prisma.question.findMany();
    console.log(questions);
    return questions
}