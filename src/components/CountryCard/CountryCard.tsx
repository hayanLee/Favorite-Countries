import { Country } from '../../types/country.type';

interface CardProps {
    country: Country;
    onClick: () => void;
    isSelected: boolean;
}

function Card({ country, onClick, isSelected }: CardProps) {
    const {
        name: { common },
        capital,
        flags: { svg: flagImg },
        region,
    } = country;

    return (
        <div
            className={`bg-white border rounded-md p-3 aspect-square shadow-sm hover:scale-105 hover:shadow-lg transition cursor-pointer ${
                isSelected ? 'border-green-500 border-2' : ''
            } `}
            onClick={onClick}
        >
            <div className='h-1/2 w-full'>
                <img
                    src={flagImg}
                    alt='flag image'
                    className='object-contain w-full h-full'
                />
            </div>
            <div className='mt-4 pl-2'>
                <h5 className='text-lg font-semibold'>{common}</h5>
                <h6 className='text-slate-500'>
                    {capital} / {region}
                </h6>
            </div>
        </div>
    );
}

export default Card;
