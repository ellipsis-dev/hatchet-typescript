import { createHatchetClient } from 'hatchet';
import { WorkflowEvent, WorkflowMetadata } from 'hatchet/types';

const hatchet = createHatchetClient('my-api-key');

hatchet.onEvent((event: WorkflowEvent) => {
  const metadata: WorkflowMetadata | undefined = event.metadata;
  if (metadata) {
    console.log(`Workflow run ${event.workflowRunId} with metadata:`, metadata);
  } else {
    console.log(`Workflow run ${event.workflowRunId} has no metadata.`);
  }
});