const Counter = ({title, count, onButtonClick}) => {

    //functions in a component that handles changes in state
    
    const handleAddParticipant = () => {
        onButtonClick(count + 1);
        // setArcheryCount(count + 1)
        // setZorbCount(count + 1)
        // setCanoeCount(count + 1)
    }

    const handleRemoveParticipant = () => {
        if (count>0){
            onButtonClick(count - 1);}
    }
    
    return(
        <>
            <h3>{title}</h3>
            <p>Current total: {count}</p>
            <button onClick={handleAddParticipant}> Add participant</button>
            <button onClick={handleRemoveParticipant}> Remove participant</button>
        </>
    )

}

export default Counter;