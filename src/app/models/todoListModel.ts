export class TodoListModel {
  constructor(public readonly id: number, public text: string, public done: boolean = false) {
  }
}
