/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Slider from "./Slider";
import FormModal from "./FormModal";
import { GLOBALCONTEXT } from "../Providers/GlobalProvider";


const PopularFood = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [popularProducts, setPopularProducts] = useState([])
    const { products } = useContext(GLOBALCONTEXT)

    const handleOpenForm = () => {
        setIsOpen(pre => !pre)
    }

    useEffect(() => {
        const pp = products?.filter(pd => pd.IsPopular === true)
        setPopularProducts(pp)
    }, [products])

    return (
        <div className=" container w-11/12 md:w-10/12 mx-auto pt-6">
            <Slider items={popularProducts} title="Popular" slideDelay={2500} handleOpenForm={handleOpenForm} />
            <FormModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default PopularFood;