function ChildStateComponent({ counter, setCounter }:
    { counter: number;
      setCounter: (counter: number) => void;}) {
      return (
        <div>
          <h3>Counter {counter}</h3>
          <button className="btn btn-success" onClick={() => setCounter(counter + 1)}>
            Increment</button>
            <span style={{ margin: "0 5px" }}></span>
          <button className="btn btn-danger" onClick={() => setCounter(counter - 1)}>
            Decrement</button>
        </div>
      );
    }
    export default ChildStateComponent;
    
    