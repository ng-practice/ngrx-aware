export class Note {
  title: string;
  text: string;

  toods: Todo[];
}

export class Todo {
  text: string;
  isCompleted = false;
}
