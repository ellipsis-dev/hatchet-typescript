import sleep from '@hatchet/util/sleep';
import Hatchet from '../sdk';
import { Workflow } from '../workflow';

// ❓ timeoutsExample
const myWorkflow: Workflow = {
  id: 'my-timeout-workflow',
  description: 'test',
  scheduleTimeout: '2m',
  steps: [
    {
      name: 'my-step',
      timeout: '30s',
      run: async (ctx) => {
        await sleep(20_000);
        ctx.refreshTimeout('15s');
        await sleep(10_000);
        return { step1: 'step1 results!' };
      },
    },
  ],
};
// ‼️

async function main() {
  const hatchet = Hatchet.init();
  const worker = await hatchet.worker('my-timeout-worker', 1);
  await worker.registerWorkflow(myWorkflow);
  worker.start();
}

main();