export class Note {
  guid: string;
  title: string;
  text: string;

  todos: Todo[];
}

export class Todo {
  text: string;
  isCompleted = false;
}
