import { useRef, useState, useEffect } from "react";
import { counterItems } from "../constants/words";
import CountUp from "react-countup";

/*  This code snippet is from a React component and demonstrates how to trigger an action when an element becomes visible in the
    viewport. It begins by using the useState hook to create a state variable start (with its setter setStart), initialized to 
    false, which will later be used to control when the counter animation should begin. The useRef hook is then used to create a 
    reference called counterRef, which will be attached to the DOM element representing the counter. The useEffect hook is employed
    to set up a side effect that runs once when the component mounts, as indicated by the empty dependency array []. Inside the 
    effect, an IntersectionObserver is instantiated and assigned to the observer variable; this observer monitors the visibility 
    of the referenced element. The observer is configured with a callback function that receives an array of observed entries (in 
    this case, only one), and checks if the first entry (entry) is intersecting the viewport by evaluating entry.isIntersecting. 
    If the element is at least 30% visible (as set by the threshold: 0.3 option), the callback sets start to true by calling 
    setStart(true), and then disconnects the observer to prevent further triggers. The observer is attached to the DOM node 
    referenced by counterRef.current, provided it exists. Finally, the effect returns a cleanup function that disconnects the 
    observer when the component unmounts or the effect is otherwise cleaned up, ensuring no memory leaks or unintended behavior.

*/

const AnimatedCounter = () => {
    const [start, setStart] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStart(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (counterRef.current) {
            observer.observe(counterRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32" ref={counterRef}>
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item) => (
                    <div key={item.label} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
                        <div className="counter-number text-white-50 text-5xl font-bold mb-2">
                            <CountUp
                                suffix={item.suffix}
                                end={start ? item.value : 0}
                                duration={2}
                            />
                        </div>
                        <div className="text=white-50 text-lg">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCounter;