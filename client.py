# client.py
import asyncio
import websockets

async def receive_data():
    async with websockets.connect("ws://localhost:6789") as websocket:
        while True:
            # Receive data from the WebSocket server
            data = await websocket.recv()
            print(f"Received data: {data}")
            print("------------------------------------")

if __name__ == "__main__":
    asyncio.run(receive_data())
