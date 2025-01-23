import { Hatchet } from '../sdk';

// ❓ createWebhookExample
const hatchet = Hatchet.init();

const workflow = {
  id: 'example-webhook-workflow',
  steps: [
    {
      name: 'step1',
      run: async (ctx: any) => {
        console.log('Webhook invoked workflow.');
        return { success: true };
      },
    },
  ],
};

const webhooks = hatchet.webhooks([workflow]);

export const serverHandler = webhooks.httpHandler({
  secret: process.env.HATCHET_WEBHOOK_SECRET,
});
// ‼️

async function main() {
  console.log('Webhook example script loaded.');
}

main();