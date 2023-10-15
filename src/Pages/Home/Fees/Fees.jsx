import { useEffect } from "react";
import { useState } from "react";
import FeesCard from "./FeesCard";

const Fees = () => {
    const [fees, setFees] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFees(data))
    }, [])

    return (
        <div className="lg:px-36 lg:py-24 bg-gradient-to-b from-[#FAFBFC] to-[#FAFBFC]">
            <h1 className="text-center text-6xl font-bold text-black">Want to <span className="bg-gradient-to-r from-[#0076CE] to-[#9400D3] bg-clip-text text-transparent">Join</span> Us?</h1>
            <p className="text-center text-black py-8 text-xl">To remain with us, it is essential that you diligently follow the steps provided</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 pt-10">
                {
                    fees.map(fee => <FeesCard
                        key={fee._id}
                        fee={fee}
                    ></FeesCard>)
                }
            </div>
            <p>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 every day until you file the form . There is no maximum penalty amount. So, if you do not file the form for a year, you will owe ₹73,000 per form</p>
        </div>
    );
};

export default Fees;