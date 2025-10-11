import { useState } from "react";

function RegistrationForm() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        // Handle form submission
        e.preventDefault();
        // Process form data

                    if (username.length < 3) {
            setError("Username must be at least 3 characters long.");
            setSubmitted(false);
            return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            setSubmitted(false);
            return;
            }

            const passwordRegex = /^(?=.*\d).{6,}$/;
            if (!passwordRegex.test(password)) {
            setError("Password must be at least 6 characters and contain a number.");
            setSubmitted(false);
            return;
            }

        console.log({ username, email, password });
        setUsername("");
        setEmail("");
        setPassword("");
        setSubmitted(true);
        setError(false);


    setTimeout(() => 
       setSubmitted(false)
    , 2000);

    setTimeout(() => 
       setError(false), 2000);
        
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
             onChange={(e) => setPassword(e.target.value)}
             required
             />

             <button type="submit">Submit</button>

             {submitted && <p style={{}}>✅Form submitted successfully.</p>}
             {error && <p style={{}}>❌Form not submitted, Please try again.</p>}
             
        </form>
     );
}

export default RegistrationForm;