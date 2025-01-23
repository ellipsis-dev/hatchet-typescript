import Hatchet, { StepRunEventType, Context } from "../sdk";

const hatchet = Hatchet.init({ log_level: "OFF" });

// ❓ streamingExample
async function stepStream(ctx: Context) {
  ctx.putStream("hello from streaming step");
  return { streamed: true };
}

async function main() {
  const workflow = {
    id: "streaming-example",
    steps: [
      {
        name: "streaming-step",
        run: stepStream,
      },
    ],
  };

  const worker = await hatchet.worker("streaming-worker", 1);
  await worker.registerWorkflow(workflow);
  worker.start();

  const workflowRunId = await hatchet.admin.runWorkflow("streaming-example", {});
  const stream = await hatchet.listener.stream(workflowRunId);

  for await (const event of stream) {
    if (event.type === StepRunEventType.STEP_RUN_EVENT_TYPE_STREAM) {
      console.log("Received streamed data:", event.payload);
    }
  }
}
// ‼️

main();