// import React from "react";
import React, { useState } from "react";
import bgImage from '../assets/party-pic.png';
const Card = () => {
    const [myToggleButton, setMyToggleButton] = useState(-1);
    const myArr = [
        { name: "A", id: "01" },
        { name: "B", id: "02" },
        { name: "C", id: "03" },
        { name: "D", id: "04" },
        { name: "E", id: "05" },
        { name: "F", id: "06" },
    ];
    return (
        <div className="Container mx-auto">
            <h2 className="text-6xl flex justify-center">Wecome</h2>
            <div style={{ marginTop: "48px" }} className="flex flex-row flex-wrap">
                {myArr.map((obj, index) => (
                    <div className="px-3 gap-y-3 w-6/12">
                        <div className="flex flex-col">
                            <img src={bgImage} alt="" className="w-full" />
                            <div>
                                {" "}
                                <button
                                    onClick={() =>
                                        setMyToggleButton(myToggleButton === index ? -1 : index)
                                    }
                                    className="px-4 mb-7 py-3 bg-red-500 text-white rounded-md inline-block my-3"
                                >
                                    Show details
                                </button>
                            </div>
                            <div
                                className={`transition-all duration-1000 overflow-hidden ease-linear ${myToggleButton === index ? "max-h-[200px]" : "max-h-0"
                                    }`}
                            >
                                <h3>Name:-{obj.index}</h3>
                                <h4>id:-{obj.id}</h4> <p>Index No.{index}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;