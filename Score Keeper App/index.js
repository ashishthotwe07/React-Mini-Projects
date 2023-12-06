let score = 0;
let wicket = 0;
let ballWiseresult = [];
let hit = 0;
let inputRef = React.createRef();
function addScore(num) {
  hit = num;
  app.render(<App />);
}

function addWicket() {
  hit = "W";
  app.render(<App />);
}

const ScoreButtons = () => (
  <div>
    <button className="btn btn-outline-secondary" onClick={() => addScore(0)}>
      0
    </button>
    <button className="btn btn-outline-secondary" onClick={() => addScore(1)}>
      1
    </button>
    <button className="btn btn-outline-secondary" onClick={() => addScore(2)}>
      2
    </button>
    <button className="btn btn-outline-secondary" onClick={() => addScore(3)}>
      3
    </button>
    <button className="btn btn-outline-secondary" onClick={() => addScore(4)}>
      4
    </button>
    <button className="btn btn-outline-secondary" onClick={() => addScore(5)}>
      5
    </button>
    <button className="btn btn-outline-secondary" onClick={() => addScore(6)}>
      6
    </button>
    <button type="button"  className="btn btn-outline-secondary" onClick={addWicket}>
      Wicket
    </button>
  </div>
);

const Result = () => (
  <div>
    {ballWiseresult.map((run, index) => (
      <>
        {" "}
        {index % 6 === 0 ? <br /> : null}
        <span key={index}>{run === 0 ? <strong>.</strong> : run}</span>{" "}
      </>
    ))}
  </div>
);

function handleSubmit(event) {
  event.preventDefault();

  if (hit == "W") {
    wicket += 1;
  } else {
    score += hit;
  }
  ballWiseresult.unshift(`${hit} , ${inputRef.current.value?inputRef.current.value:'no commentry'}`);

  hit = 0;
  inputRef.current.value = "";

  app.render(<App />);
}

const Form = () => (
  <form onSubmit={handleSubmit} className="form-inline">
    <div className="container">

    
    <div className="input-group">
      <input
        value={hit}
        className="form-control"
        placeholder="Runs"
        readOnly
      />
      <input
        ref={inputRef}
        className="form-control"
        placeholder="Commentary"
      />
    </div>
    <button type="submit" className="btn btn-outline-secondary btn-submit mt-2">
      Submit
    </button>
    </div>
  </form>
);



const App = () => {
  return (
    <>
      <h1>Score keeper</h1>
      <h2>
        {" "}
        Score: {score}/{wicket}
      </h2>
      <ScoreButtons />
      <br />

      <Form />
      <hr />
      {ballWiseresult.map((run, index) => (
               <h5 key={index} className="list-group-item">
               {run}
             </h5>
      ))}
    </>
  );
};

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<App />);
