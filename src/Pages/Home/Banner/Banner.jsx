import pic1 from '../../../assets/pic1.png'
const Banner = () => {
    return (
        <div className="lg:flex justify-between items-center pt-28 bg-gradient-to-r from-[#FCF6FC]   to-[#C5EAED]">
            <div className='lg:ml-36'>
                <h1 className="text-6xl text-black font-bold">Find  <span className='bg-gradient-to-r from-[#0076CE] to-[#9400D3] bg-clip-text text-transparent'>Partners</span> (CAs) <br /> available online</h1>
                <p className='mt-8 mb-10 text-[#616161]'><span className='font-semibold'>CONNECT</span> with us where your services are listed and visible to a myriad <br /> of businesses seeking CA’s for compliance support</p>
                <div className="">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered w-96 h-16" />
                        <button className="btn btn-primary h-16">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className='lg:mr-20'>
                <img src={pic1} alt="" />
            </div>
        </div>
    );
};

export default Banner;