export type Country = {
    altSpellings: string[];
    area: number;
    borders: string[];
    capital: string[];
    capitalInfo: CapitalInfo;
    car: Car;
    cca2: string;
    cca3: string;
    ccn3: string;
    cioc: string;
    coatOfArms: CoatOfArms;
    continents: string[];
    currencies: Currencies;
    demonyms: Demonyms;
    fifa: string;
    flag: string;
    flags: Flags;
    gini?: { [key: number]: number };
    idd: Idd;
    independent: boolean;
    landlocked: boolean;
    languages: { [key: string]: string };
    latlng: number[];
    maps: Maps;
    name: Name;
    population: number;
    postalCode: PostalCode;
    region: string;
    startOfWeek: string;
    status: string;
    subregion: string;
    timezones: string[];
    tld: string[];
    translations: { [key: string]: Native };
    unMember: boolean;
};

type CapitalInfo = {
    latlng: number[];
};

type Car = {
    signs: string[];
    side: string;
};

type CoatOfArms = {
    png: string;
    svg: string;
};

type CurrencyInfo = {
    name: string;
    symbol: string;
};

type Currencies = {
    [currentCode: string]: CurrencyInfo;
};

type Demonyms = {
    eng: Eng;
    fra: Eng;
};

type Eng = {
    f: string;
    m: string;
};

type Flags = {
    alt: string;
    png: string;
    svg: string;
};

type Idd = {
    root: string;
    suffixes: string[];
};

type Maps = {
    googleMaps: string;
    openStreetMaps: string;
};

type Name = {
    common: string;
    official: string;
    nativeName?: { [key: string]: Native };
};

type Native = {
    offical: string;
    common: string;
};

type PostalCode = {
    format: string;
    regex: string;
};
