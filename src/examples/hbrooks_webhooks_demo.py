#!/usr/bin/env python
"""
Usage Instructions:
    This script demonstrates how to trigger a Hatchet workflow and listen
    for streamed events in real-time. Make sure to install the necessary
    dependencies (e.g., hatchet, python-dotenv) and configure your environment.

Steps to run:
    1) pip install -r requirements.txt
    2) Create or update your .env file with your Hatchet credentials.
    3) Execute this script using python hbrooks_webhooks_demo.py
"""
import asyncio
from dotenv import load_dotenv
from hatchet import Hatchet

async def main():
    load_dotenv()
    hatchet = Hatchet()
    workflowRunId = hatchet.admin.run_workflow("ManualTriggerWorkflow", {"test": "test"})
    listener = hatchet.listener.stream(workflowRunId)
    async for event in listener:
        print(event)

if __name__ == "__main__":
    asyncio.run(main())