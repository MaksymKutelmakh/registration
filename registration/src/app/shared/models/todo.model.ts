import { Deserializable } from './deserializable.model';

export class ToDoModel implements Deserializable<ToDoModel> {

    userId: number;
    id: number;
    title: string;
    completed: boolean;

    deserialize(input: any): ToDoModel {
        Object.assign(this, input);
        return this;
    }
}

