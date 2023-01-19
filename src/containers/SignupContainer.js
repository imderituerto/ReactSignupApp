import { useState } from "react";

const SignupContainer = () => {

    const [archeryCount, setArcheryCount] = useState(0);
    const [zorbCount, setZorbCount] = useState(0);
    const [canoeCount, setCanoeCount] = useState(0);



    return(
        <>
        <h2> Activities:</h2>
        <p>Total signups: coming soon</p>
        </>
    );
}

export default SignupContainer;