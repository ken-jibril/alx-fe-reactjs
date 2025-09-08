export default function UserProfile(props) {


        return (
            <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', minHeight: '30vh', boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', webkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', mozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)', backgroundColor: 'lightgray', width: '300px' }}>
                <h2 style={{ color: 'blue' }}>Name: {props.name}</h2>
                <p>Age: <span style={{ fontWeight: 'bold' }}></span>{props.age}</p>
                <p>Bio: {props.bio}</p>
            </div>
        )
    }
 
