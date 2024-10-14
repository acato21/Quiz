import { NextApiRequest, NextApiResponse } from "next";
import { questions } from "../questionsBank";
import { shuffle } from "@/functions/array";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const ids = questions.map(question => question.Id);

    res.status(200).json(shuffle(ids))
}