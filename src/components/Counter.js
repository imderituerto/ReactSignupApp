const Counter = ({title, count, onButtonClick}) => {

    const handleAddParticipant = () => {
        onButtonClick(count + 1);
        // setArcheryCount(count + 1)
        // setZorbCount(count + 1)
        // setCanoeCount(count + 1)
    }
    
    return(
        <>
            <h3>{title}</h3>
            <p>Current total: {count}</p>
            <button onClick={handleAddParticipant}> Add participant</button>
            <button> Remove participant</button>
        </>
    )

}

export default Counter;