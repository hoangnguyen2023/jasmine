import React from 'react'
import "../css/count.css"
import CountUp, { useCountUp } from 'react-countup';



const Count = () => {
    useCountUp({

        ref: 'counter',
        end: 1000,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,


    });
    return (
        <div>

            <div className="count__main conntainer d-flex justify-content-center">
                <div className="count__item ">
                    <CountUp end={1} enableScrollSpy />
                    <span id="counter" />
                    <h4>yoga</h4>

                </div>
                <div className="count__item">
                    <CountUp end={1001} enableScrollSpy />
                    <span id="counter" />
                    <h4>Climp</h4>

                </div>
                <div className="count__item">
                    <CountUp end={2002} enableScrollSpy />
                    <span id="counter" />
                    <h4>Swimming</h4>

                </div>
                <div className="count__item">
                    <CountUp end={5003} enableScrollSpy />
                    <span id="counter" />
                    <h4>Cookien</h4>

                </div>
            </div>


        </div>
    )
}

export default Count
