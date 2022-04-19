import { Step } from './step.model';

export interface Guide {
    id: string;
    title: string;
    steps: Step[];
}
