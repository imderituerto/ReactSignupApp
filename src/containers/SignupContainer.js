import { useState } from "react";
import Counter from "../components/Counter";

const SignupContainer = () => {

    const [archeryCount, setArcheryCount] = useState(0);
    const [zorbCount, setZorbCount] = useState(0);
    const [canoeCount, setCanoeCount] = useState(0);

    return(
        <>
        <h2> Activities</h2>

        <Counter title={"Archery"} count={archeryCount}/>
        <Counter title={"Zorbing"} count={zorbCount} />
        <Counter title={"Canoeing"} count={canoeCount}/>

        <p>Total sign-ups: coming soon</p>
        </>
    );
}

export default SignupContainer;