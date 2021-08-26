



const User = (props) => {
    console.log(props)
    return(
        <>
                <h1>My name is {props.name}</h1>
                <p>My city is {props.address.city}</p>

        </>
    )
}

export default User