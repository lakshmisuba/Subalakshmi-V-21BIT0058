import websockets
import asyncio
from game import Game
game=Game()
async def handle_connection(websocket, path):
    data=json.loads(message)
    actions = data.get('action')
    if action == 'initialize':
        pass #initializing the game
    elif action =='move':
        pass #moves
    elif action =='get_state':
        pass #sends games's state
    elif action =='disconnect':
        pass
async def main():
    async with websockets.serve(handle_connection, "localhost", 8765):
        await asyncio.Future() #Run all the time
asyncio.run(main())