export interface ICompanyDetails {
    name: string;
    companyUrl: string;
    bseId: string;
    nseId: string;
    about: string;
    marketCap: string;
    stockPE: number;
    currentPrice: number;
    bookValue: number;
    stockROE: number;
    stockROCE: number;
    faceValue: number;
    dividendYield: number;
    highPrice: number;
    lowPrice: number;
    lastPrice: number;
    sector: string;
    headquarter?: string;
    keyPerson?: string;
    founder?: string;
    founded?: number;
    parent?: string;
    division?: string;
}