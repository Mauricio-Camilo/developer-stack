import { Request, Response } from "express";
import questionService  from "../services/questionService.js";

export async function create(req: Request, res: Response) {

  const { question } : {question : string} = req.body;

  await questionService.createQuestion(question);
  
  res.status(201);
}

export async function answer(req: Request, res: Response) {

  const { id } = req.params;

  const questionId = parseInt(id);

  const { answer } : {answer : string} = req.body;

  await questionService.createAnswer(questionId, answer);
  
  res.status(201);
}

export async function get(req: Request, res: Response) {

  const questions = await questionService.getAllQuestions();

  const response = {questions : questions}
  
  res.send(response);
}

export async function getById(req: Request, res: Response) {

  const { id : questionId } = req.params;

  const question = questionService.getQuestionById(questionId);

  res.send(question);
}
