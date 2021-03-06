import { Question } from './question.model';

export interface Quiz {
    id: string;
    name: string;
    theme?: string;
    official?: boolean;
    questions: Question[];
    globalGoodAnswer: number;
    globalBadAnswer: number;
}
