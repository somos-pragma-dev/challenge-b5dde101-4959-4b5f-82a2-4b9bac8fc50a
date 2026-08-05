import { WorkflowService } from '../../src/application/workflow/WorkflowService';

describe('WorkflowService', () => {
  it('should transition task', async () => {
    const workflowService = new WorkflowService();
    const workflow = await workflowService.transitionTask('task1', 'in progress');
    expect(workflow.state).toBe('in progress');
  });
});