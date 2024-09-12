import asyncio
import websockets
from faker import Faker
import json
import datetime

fake = Faker()

async def send_fake_data(websocket, path):
    while True:
        # Generate fake data
        if datetime.datetime.now().second % 5 == 0:
            data = {
                'name': fake.name(),
                'email': fake.email(),
                'address': fake.address()
            }
            # Convert dict to JSON
            json_data = json.dumps(data)
            
            # Send data to client
            await websocket.send(json_data)
            await asyncio.sleep(1)  # Sleep for a second before sending next data

async def main():
    # Start the WebSocket server
    async with websockets.serve(send_fake_data, "localhost", 6789):
        await asyncio.Future()  # Run forever

if __name__ == "__main__":
    asyncio.run(main())
