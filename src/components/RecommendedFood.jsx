import { useContext, useEffect, useState } from 'react';
import Slider from './Slider';
import FormModal from './FormModal';
import { GLOBALCONTEXT } from '../Providers/GlobalProvider';

const RecommendedFood = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [recommendedProducts, setRecommendedProducts] = useState([])
    const { products } = useContext(GLOBALCONTEXT)
    const handleOpenForm = () => {
        setIsOpen(pre => !pre)
    }


    useEffect(() => {
        const pp = products?.filter(pd => pd.IsRecommended === true)
        setRecommendedProducts(pp)
    }, [products])

    return (
        <div className=" container w-11/12 md:w-10/12 mx-auto pt-6 pb-20">
            <Slider items={recommendedProducts} title="Recommended" slideDelay={1500} handleOpenForm={handleOpenForm} />
            <FormModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default RecommendedFood;