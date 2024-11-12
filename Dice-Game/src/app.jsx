import './app.css';

export function App() {
  return (
    <main>
      <h1> 🎲 Dice Game 🎲</h1>
      <section className="container">
        <div className="btn-section">
          <button type="button" className="new-game-btn btn">
            New Game
          </button>
          <button type="button" className="new-game-btn btn">
            Roll dice
          </button>
          <button type="button" className="new-game-btn btn">
            Hold
          </button>
        </div>
      </section>
      <section className="player-section">
        <div className="player1">
          <div>
            <h2>Player 1</h2>
            <p>
              Total Score: <span>0</span>
            </p>
          </div>
          <div className="current-section">
            <p>
              Current Score: <span>0</span>
            </p>
          </div>
        </div>
        <div className="player2">
          <div>
            <h2>Player 2</h2>
            <p>
              Total Score: <span>0</span>
            </p>
          </div>
          <div className="current-section">
            <p>
              Current Score: <span>0</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
