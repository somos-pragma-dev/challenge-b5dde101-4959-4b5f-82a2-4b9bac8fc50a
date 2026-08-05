import { Workflow } from '../domain/workflow/Workflow';

export class WorkflowRepository {
  async transitionTask(taskId: string, newState: string): Promise<Workflow> {
    // Implementación de transición de tarea
    return new Workflow('1', taskId, newState);
  }
}