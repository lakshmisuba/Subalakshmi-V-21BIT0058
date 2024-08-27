function renderBoard(boardState) {
    const board = document.getElementById('game-board');
    board.innerHTML = '';
    boardState.forEach(row => {
        row.forEach(cell => {
            const cellDiv = document.createElement('div');
            cellDiv.className = 'cell';
            cellDiv.textContent = cell || '';
            board.appendChild(cellDiv);
        });
    });
}

function handleMoveSelection(charName, moveCommand) {
    sendMove('player1', charName, moveCommand);
}

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.action === 'update_state') {
        renderBoard(data.boardState);
    } else if (data.action === 'invalid_move') {
        alert('Invalid move, please try again.');
    } else if (data.action === 'game_over') {
        alert('Game over! Winner: ' + data.winner);
    }
};


const socket = new WebSocket('ws://localhost:8765');

socket.onopen = () => {
    console.log('Connected to server');
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    
};

function sendMove(player, charName, moveCommand) {
    socket.send(JSON.stringify({
        action: 'move',
        player: player,
        charName: charName,
        moveCommand: moveCommand
    }));
}
