import React, {useEffect, useRef, useState} from "react";

const HooksComponentsTest = ()=>{
    const [count, setCount] = useState(0);
    const dom = useRef(null);
    useEffect(() => {
        dom.current.addEventListener("click", () => setCount(count + 1));
    }, [count]);
    return (
        <div ref={dom}>{count}</div>
    );
};

export default HooksComponentsTest;