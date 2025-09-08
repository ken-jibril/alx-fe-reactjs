import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
          <div className="counter" style={{ border: '1px solid gray', padding: '20px', margin: '10px', textAlign: 'center', backgroundColor: 'white', width: '50%', display: 'flex', flexDirection: 'column', color: 'green', alignItems: 'center', justifyContent: 'center', gap: '10px', boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', webkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', mozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', backgroundColor: 'lightgray', width: '300px'}}>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)} style={{ padding: '5px', fontWeight: 'bold', color: 'green', maxWidth: 'fit-content'}}>Increment</button>
            <button onClick={() => setCount(count - 1)} style={{ padding: '5px', fontWeight: 'bold', color: 'green', maxWidth: 'fit-content'}}>Decrement</button>
            <button onClick={() => setCount(0)} style={{ padding: '5px', fontWeight: 'bold', color: 'green', maxWidth: 'fit-content'}}>Reset</button>
          </div>
    )
}