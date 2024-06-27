import { useEffect, useState } from 'react';
import { getCountries } from './api/api';
import CountryList from './components/CountryList';
import { Country } from './types/country.type';

function App() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
    useEffect(() => {
        (async () => {
            const result = await getCountries();
            const sortedByName = result.sort((a, b) =>
                a.name.common.localeCompare(b.name.common)
            );
            setCountries(sortedByName);
        })();
    }, []);

    const handleClick = (country: Country) => {
        if (selectedCountries.includes(country)) {
            setSelectedCountries((prevSelected) =>
                prevSelected.filter((c) => c !== country)
            );
            setCountries([...countries, country]);
        } else {
            setSelectedCountries([...selectedCountries, country]);
            setCountries((prevCountries) => prevCountries.filter((c) => c !== country));
        }
    };

    return (
        <div className='container mx-auto h-full flex flex-col items-center p-5'>
            <CountryList
                countries={selectedCountries}
                isChecked={true}
                title='Favorite Countries ✨'
                onClick={handleClick}
            />
            <CountryList
                countries={countries}
                isChecked={false}
                title='Countries 🌍'
                onClick={handleClick}
            />
        </div>
    );
}

export default App;
