export default function Home() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome to Our Company</h1>
            <p style={{ fontSize: '2em'}}>We are dedicated to delivering excellence in all our services.</p>
            <div className="photo">
                <img src="https://images.unsplash.com/photo-1708192548842-2d8babc7ddd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2glMjBjb21wYW55JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" alt="" style={{borderRadius: '5PX'}}/>
                <p style={{ fontSize: '1.5em'}}>Our Headquarters are located at Bloemfontein, SouthAfrica.</p>
            </div>
        </div>
    )
}