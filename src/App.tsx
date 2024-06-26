import { useEffect, useState } from 'react';
import { getCountries } from './api/api';

function App() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await getCountries();
            setCountries(result);
        })();
    }, []);

    console.log(countries);

    return <div className='text-3xl'>hello</div>;
}

export default App;
