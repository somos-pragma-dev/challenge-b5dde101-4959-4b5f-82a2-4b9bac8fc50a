export class Workflow {
  constructor(
    public id: string,
    public taskId: string,
    public state: string
  ) {}
}