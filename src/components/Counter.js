const Counter = ({title, count}) => {

    return(
        <>
            <h3>{title}</h3>
            <p>Current total: {count}</p>
            <button> Add participant</button>
            <button> Remove participant</button>
        </>
    )

}

export default Counter;