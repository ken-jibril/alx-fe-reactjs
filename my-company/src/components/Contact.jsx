  import { useState } from 'react';

   function Contact() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Form submitted!');
     };

     return (
       <div style={{ padding: '10px', backgroundColor: 'navy', color: 'white', maxWidth: 'fit-content', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', fontSize: '1em', margin: 0, borderRadius: '10px' }}>
         <h1>Contact Us</h1>
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="name"
             placeholder="Your Name"
             value={formData.name}
             onChange={handleChange}
             style={{ display: 'block', margin: '5px 0', padding: '5px', borderRadius: '5px', border: 'none' }}
           />
           <input
             type="email"
             name="email"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0', borderRadius: '5px', padding: '5px', border: 'none' }}
           />
           <textarea
             name="message"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0', borderRadius: '5px', border: 'none'}}
           />
           <button type="submit" style={{ textAlign: 'center',display: 'flex', alignContent: 'center', justifyContent: 'center', backgroundColor: 'navy', color: 'white', padding: '5px', borderRadius: '5PX'}}>Send Message</button>
         </form>
       </div>
     );
   }

   export default Contact;