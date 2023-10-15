
const FeesCard = ({ fee }) => {
    const { name, description, dueDate, penaltyFees, position } = fee;
    return (
        <div>
            <div className="card w-full bg-white shadow-xl">
                <div className="card-body items-center text-center">
                    <p className="absolute -left-2 -top-4 bg-gradient-to-r from-[#0076CE] to-[#9400D3] p-2 rounded-md text-white font-bold">{position}</p>
                    <h2 className="card-title font-bold">{name}</h2>
                    <p className="text-black py-2">{description}</p>
                    <div className="flex gap-3 bg-slate-200 h-28 w-80 rounded-md items-center p-3">
                        <div>
                            <h3 className="text-[#0076CE] font-bold text-lg">Due date</h3>
                            <p>{dueDate}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[#FF6666]">Penalty fees</h3>
                            <p>{penaltyFees}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeesCard;