export class Question {
    id: number;
    text: string;
    categories: string;
    answer: string;
    relatedQuestions: Array<Question>;
}