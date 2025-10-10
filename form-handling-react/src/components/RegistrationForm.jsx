import { useState } from "react";

function RegistrationForm() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        // Handle form submission
        e.preventDefault();
        // Process form data
        console.log({ username, email, password });
        setUsername("");
        setEmail("");
        setPassword("");
        setSubmitted(true);
        
    }
    return ( 

        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
             type="text"
             placeholder="Enter your username"
             id="username"
             name="username"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             required
             />

            <label htmlFor="email">Email</label>
            <input
             type="email"
             placeholder="Enter your email"
             id="email"
             name="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
             />

            <label htmlFor="password">Password</label>
            <input
             type="password"    
             placeholder="Enter your password"
             id="password"
             name="password"
             value={password}
             onChange={(e) = setPassword(e.target.value)}
             required
             />

             <button type="submit">Submit</button>

             {submitted && <p>✅Form submitted successfully.</p>}
        </form>
     );
}

export default RegistrationForm;