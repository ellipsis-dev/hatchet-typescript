import { config } from 'dotenv';
config();
import { Hatchet } from 'hatchet';

// ❓ listenForFiles
export async function listenForFiles() {
  const hatchet = new Hatchet();
  const workflowRunId = await hatchet.admin.runWorkflow('simple-workflow', {});
  const stream = await hatchet.listener.stream(workflowRunId);
  for await (const event of stream) {
    console.log('event received', event);
  }
}
// ‼️

if (require.main === module) {
  listenForFiles();
}