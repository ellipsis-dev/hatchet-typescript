import { Hatchet, StepRunEventType } from 'hatchet';

// ❓ streamingListener
async function listenForStream() {
  // Initialize the Hatchet client
  const hatchet = new Hatchet();

  // Example: run a workflow, retrieve workflowRunId
  const workflowRunId = await hatchet.admin.runWorkflow('simple-workflow', {});

  // Subscribe to the event stream
  const stream = await hatchet.listener.stream(workflowRunId);

  console.log('Started streaming for workflow:', workflowRunId);

  // Listen for events
  for await (const event of stream) {
    if (event.type === StepRunEventType.STEP_RUN_EVENT_TYPE_STREAM) {
      // Received streaming data
      console.log('Stream event:', event.payload);
    } else {
      // Received a standard event
      console.log('Other event type:', event.type);
    }
  }

  console.log('Completed streaming for workflow:', workflowRunId);
}
// ‼️

export async function main() {
  await listenForStream();
}