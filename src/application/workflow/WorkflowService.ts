import { Workflow } from '../domain/workflow/Workflow';
import { WorkflowRepository } from '../infrastructure/workflow/WorkflowRepository';

export class WorkflowService {
  private workflowRepository: WorkflowRepository;

  constructor() {
    this.workflowRepository = new WorkflowRepository();
  }

  async transitionTask(taskId: string, newState: string): Promise<Workflow> {
    return this.workflowRepository.transitionTask(taskId, newState);
  }
}