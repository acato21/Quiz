import { NextApiRequest, NextApiResponse } from "next";
import { questions } from "../questionsBank";

export default function handler(req: NextApiRequest, res: NextApiResponse) {    
    const idSeleceted = Number(req.query.id)

    const questionSelected = questions.filter(question => question.Id === idSeleceted);

    if(questionSelected.length === 1) {
        const question = questionSelected[0].shuffleAnswers();
        res.status(200).json(question.toObject());
    } else {
        res.status(404).send({error: 404, message: "Question not found"});
    }
}