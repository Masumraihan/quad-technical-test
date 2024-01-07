import NavMenu from "./NavMenu";
import NavSearchBar from "./NavSearchBar";

const Navbar = () => {
    const handleSearch = (searchTerm) => {
        console.log(searchTerm);
    }

    return (
        <nav>
            <div className="container w-11/12 md:w-10/12 mx-auto py-6 flex items-center justify-between gap-2">
                <span className="text-3xl font-semibold ">
                    pti.
                </span>
                <div className="w-full flex items-center justify-between md:justify-center gap-2 lg:max-w-xl">
                    <NavSearchBar handleSearch={handleSearch} />
                    <NavMenu />
                </div>
                <div className=" sm:hidden hidden md:block">
                    <span className="sr-only">User Profile</span>
                    <div className="p-2 bg-primary text-white aspect-square rounded-full cursor-pointer hover:ring-2 hover:ring-secondary duration-150">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar