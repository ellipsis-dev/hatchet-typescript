import { createHatchetClient } from 'hatchet';
import { WorkflowEvent } from 'hatchet/types';

const hatchet = createHatchetClient('my-api-key');

hatchet.onEvent((event: WorkflowEvent) => {
  console.log(`Received event from workflow run: ${event.workflowRunId}`);
});