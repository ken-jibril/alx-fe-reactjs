 function About() {
     return (
       <div style={{ padding: '20px' }}>
         <h1>About Us</h1>
         <p style={{ fontSize: '2em'}}>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
         <div className="images" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <img src="https://images.unsplash.com/photo-1627560985113-ab67e8031f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRlY2hub2xvZ3klMjBoYWxsJTIwd2l0aCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <img src="https://images.unsplash.com/photo-1627560985113-ab67e8031f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRlY2hub2xvZ3klMjBoYWxsJTIwd2l0aCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <img src="https://images.unsplash.com/photo-1592669282789-cf5eac5807e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHRlY2hub2xvZ3klMjBoYWxsJTIwd2l0aCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />

         </div>
       </div>
     );
   }

   export default About;