import { Country } from '../../types/country.type';
import CountryCard from '../CountryCard';

interface CountryListProps {
    countries: Country[];
    isChecked: boolean;
    title: string;
    onClick: (country: Country) => void;
}

function CountryList({ countries, isChecked, title, onClick }: CountryListProps) {
    return (
        <div>
            <h1 className='text-3xl font-semibold'> {title}</h1>
            <ul className='grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-5 '>
                {countries
                    .sort((a, b) => a.name.common.localeCompare(b.name.common))
                    .map((country) => (
                        <CountryCard
                            key={country.name.common}
                            country={country}
                            onClick={() => onClick(country)}
                            isSelected={isChecked}
                        />
                    ))}
            </ul>
        </div>
    );
}

export default CountryList;
