import backgroundImage from "../assets/Image1.png"

const Banner = () => {
    return (
        <div className=" container w-11/12 md:w-10/12 mx-auto py-10">
            <div className="hidden bg-secondary lg:min-h-[50vh] p-10 bg-no-repeat bg-right lg:flex items-center rounded-2xl" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="w-full h-full flex flex-col justify-center space-y-6">
                    <h1 className="text-3xl lg:text-6xl font-bold text-white">Deliver Food to Your <span className="block mt-1.5"> Door Step</span></h1>
                    <p className="text-xl md:text-2xl font-light text-white">Authentic Food,Quick Service,Fast Delivery</p>
                </div>
            </div>
            <div className="relative lg:hidden">
                <div className="w-full h-full flex flex-col justify-center space-y-2">
                    <h1 className="text-3xl lg:text-6xl font-bold text-dark text-center">Deliver Food to Your Door Step</h1>
                    <p className="text-lg font-light text-center">Authentic Food,Quick Service,Fast Delivery</p>
                </div>
                <div className="bg-[#FD9460] h-44 w-full absolute bottom-0  left-0 -z-10 rounded-2xl"></div>
                <img src={backgroundImage} alt="food banner" className="z-10" />
            </div>
        </div>
    )
}

export default Banner