import icon1 from '../../../assets/icons/icon-park-twotone_search.png'
import icon2 from '../../../assets/icons/icon-park-twotone_enquire.png'
import icon3 from '../../../assets/icons/icon-park-twotone_table-report.png'
import icon4 from '../../../assets/icons/icon-park-twotone_degree-hat.png'
import teacher from '../../../assets/Teacher.png'
import student from '../../../assets/Student.png'


const Platform = () => {
    return (
        <div className='flex px-36 py-24 items-center'>
            <div>
                <h1 className='text-6xl font-bold text-black'><span className='bg-gradient-to-r from-[#0076CE] to-[#9400D3] bg-clip-text text-transparent'>All-in-One</span> platform that Makes Easier</h1>
                <p className='text-black pr-20 py-12'>We are more than a platform; We are your success partner. <br /> Discover our services to achieve your business and educational goals</p>
                <div className='grid grid-cols-2 gap-12 items-center'>
                    <div className='flex gap-2'>
                        <img className='w-12' src={icon1} alt="" />
                        <h3>SEARCH for vital <br /> company information</h3>
                    </div>
                    <div className='flex gap-2'>
                        <img className='w-12 h-12' src={icon2} alt="" />
                        <h3>CONNECT with the <br /> resources to meet your <br />business needs</h3>
                    </div>
                    <div className='flex gap-2'>
                        <img className='w-12 h-12' src={icon3} alt="" />
                        <h3>RESEARCH and generate <br /> reports that drive growth</h3>
                    </div>
                    <div className='flex gap-2'>
                        <img className='w-12 h-12' src={icon4} alt="" />
                        <h3>ACADEMY to give you the <br /> skills for success in your career</h3>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex'>
                    <div>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
                        </div>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
                        </div>
                        <div className="chat chat-start">
                            <div className="chat-bubble chat-bubble-accent">Thats never been done in the history of the Jedi. Its insulting!</div>
                        </div>
                    </div>
                    <img className='w-52' src={student} alt="" />
                </div>
                <div className='flex'>
                    <img className='w-52' src={teacher} alt="" />
                    <div>
                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-error">Its never happened before.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Platform;