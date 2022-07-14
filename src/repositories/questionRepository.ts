import prisma  from "../config/database.js";

// TODO
export async function saveQuestion (question : string) {
    await prisma.questions.create({ data: {question} })
}