import React, {useEffect, useState} from "react";
import "./Converter.css";

const Converter = () => {

    const [currencyData, setCurrencyData] = useState({
        exchangeRates: {},
        amount: 1,
        fromCurrency: 'USD',
        toCurrency: 'INR',
        convertedAmount: null,
      });

      const currencyNames = {
        AED: 'United Arab Emirates Dirham',
        AFN: 'Afghan Afghani',
        ALL: 'Albanian Lek',
        AMD: 'Armenian Dram',
        ANG: 'Netherlands Antillean Guilder',
        AOA: 'Angolan Kwanza',
        ARS: 'Argentine Peso',
        AUD: 'Australian Dollar',
        AWG: 'Aruban Florin',
        AZN: 'Azerbaijani Manat',
        BAM: 'Bosnia and Herzegovina Convertible Mark',
        BBD: 'Barbadian Dollar',
        BDT: 'Bangladeshi Taka',
        BGN: 'Bulgarian Lev',
        BHD: 'Bahraini Dinar',
        BIF: 'Burundian Franc',
        BMD: 'Bermudian Dollar',
        BND: 'Brunei Dollar',
        BOB: 'Bolivian Boliviano',
        BRL: 'Brazilian Real',
        BSD: 'Bahamian Dollar',
        BTN: 'Bhutanese Ngultrum',
        BWP: 'Botswana Pula',
        BYN: 'Belarusian Ruble',
        BZD: 'Belize Dollar',
        CAD: 'Canadian Dollar',
        CDF: 'Congolese Franc',
        CHF: 'Swiss Franc',
        CLP: 'Chilean Peso',
        CNY: 'Chinese Yuan',
        COP: 'Colombian Peso',
        CRC: 'Costa Rican Colón',
        CUP: 'Cuban Peso',
        CVE: 'Cape Verdean Escudo',
        CZK: 'Czech Koruna',
        DJF: 'Djiboutian Franc',
        DKK: 'Danish Krone',
        DOP: 'Dominican Peso',
        DZD: 'Algerian Dinar',
        EGP: 'Egyptian Pound',
        ERN: 'Eritrean Nakfa',
        ETB: 'Ethiopian Birr',
        EUR: 'Euro',
        FJD: 'Fijian Dollar',
        FKP: 'Falkland Islands Pound',
        FOK: 'Faroese Króna',
        GBP: 'British Pound Sterling',
        GEL: 'Georgian Lari',
        GGP: 'Guernsey Pound',
        GHS: 'Ghanaian Cedi',
        GIP: 'Gibraltar Pound',
        GMD: 'Gambian Dalasi',
        GNF: 'Guinean Franc',
        GTQ: 'Guatemalan Quetzal',
        GYD: 'Guyanese Dollar',
        HKD: 'Hong Kong Dollar',
        HNL: 'Honduran Lempira',
        HRK: 'Croatian Kuna',
        HTG: 'Haitian Gourde',
        HUF: 'Hungarian Forint',
        IDR: 'Indonesian Rupiah',
        ILS: 'Israeli New Shekel',
        IMP: 'Isle of Man Pound',
        INR: 'Indian Rupee',
        IQD: 'Iraqi Dinar',
        IRR: 'Iranian Rial',
        ISK: 'Icelandic Króna',
        JEP: 'Jersey Pound',
        JMD: 'Jamaican Dollar',
        JOD: 'Jordanian Dinar',
        JPY: 'Japanese Yen',
        KES: 'Kenyan Shilling',
        KGS: 'Kyrgyzstani Som',
        KHR: 'Cambodian Riel',
        KID: 'Kiribati Dollar',
        KMF: 'Comorian Franc',
        KRW: 'South Korean Won',
        KWD: 'Kuwaiti Dinar',
        KYD: 'Cayman Islands Dollar',
        KZT: 'Kazakhstani Tenge',
        LAK: 'Lao Kip',
        LBP: 'Lebanese Pound',
        LKR: 'Sri Lankan Rupee',
        LRD: 'Liberian Dollar',
        LSL: 'Lesotho Loti',
        LYD: 'Libyan Dinar',
        MAD: 'Moroccan Dirham',
        MDL: 'Moldovan Leu',
        MGA: 'Malagasy Ariary',
        MKD: 'Macedonian Denar',
        MMK: 'Burmese Kyat',
        MNT: 'Mongolian Tögrög',
        MOP: 'Macanese Pataca',
        MRU: 'Mauritanian Ouguiya',
        MUR: 'Mauritian Rupee',
        MVR: 'Maldivian Rufiyaa',
        MWK: 'Malawian Kwacha',
        MXN: 'Mexican Peso',
        MYR: 'Malaysian Ringgit',
        MZN: 'Mozambican Metical',
        NAD: 'Namibian Dollar',
        NGN: 'Nigerian Naira',
        NIO: 'Nicaraguan Córdoba',
        NOK: 'Norwegian Krone',
        NPR: 'Nepalese Rupee',
        NZD: 'New Zealand Dollar',
        OMR: 'Omani Rial',
        PAB: 'Panamanian Balboa',
        PEN: 'Peruvian Nuevo Sol',
        PGK: 'Papua New Guinean Kina',
        PHP: 'Philippine Peso',
        PKR: 'Pakistani Rupee',
        PLN: 'Polish Złoty',
        PYG: 'Paraguayan Guarani',
        QAR: 'Qatari Riyal',
        RON: 'Romanian Leu',
        RSD: 'Serbian Dinar',
        RUB: 'Russian Ruble',
        RWF: 'Rwandan Franc',
        SAR: 'Saudi Riyal',
        SBD: 'Solomon Islands Dollar',
        SCR: 'Seychellois Rupee',
        SDG: 'Sudanese Pound',
        SEK: 'Swedish Krona',
        SGD: 'Singapore Dollar',
        SHP: 'Saint Helena Pound',
        SLE: 'Sierra Leonean Leone',
        SLL: 'Sierra Leonean Leone',
        SOS: 'Somali Shilling',
        SRD: 'Surinamese Dollar',
        SSP: 'South Sudanese Pound',
        STN: 'São Tomé and Príncipe Dobra',
        SYP: 'Syrian Pound',
        SZL: 'Swazi Lilangeni',
        THB: 'Thai Baht',
        TJS: 'Tajikistani Somoni',
        TMT: 'Turkmenistani Manat',
        TND: 'Tunisian Dinar',
        TOP: 'Tongan Paanga',
        TRY: 'Turkish Lira',
        TTD: 'Trinidad and Tobago Dollar',
        TVD: 'Tuvaluan Dollar',
        TWD: 'New Taiwan Dollar',
        TZS: 'Tanzanian Shilling',
        UAH: 'Ukrainian Hryvnia',
        UGX: 'Ugandan Shilling',
        USD: 'United States Dollar',
        UYU: 'Uruguayan Peso',
        UZS: 'Uzbekistani Som',
        VES: 'Venezuelan Bolívar',
        VND: 'Vietnamese Đồng',
        VUV: 'Vanuatu Vatu',
        WST: 'Samoan Tala',
        XAF: 'Central African CFA Franc',
        XCD: 'Eastern Caribbean Dollar',
        XDR: 'International Monetary Fund (IMF) Special Drawing Rights',
        XOF: 'West African CFA Franc',
        XPF: 'CFP Franc',
        YER: 'Yemeni Rial',
        ZAR: 'South African Rand',
        ZMW: 'Zambian Kwacha',
        ZWL: 'Zimbabwean Dollar',
      };

    useEffect(() => {
        const { fromCurrency } = currencyData;
        fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
          .then((response) => response.json())
          .then((data) => {
            setCurrencyData((prevData) => ({
              ...prevData,
              exchangeRates: data.rates,
            }));
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, [currencyData.fromCurrency]);

      useEffect(() => {
        const { amount, exchangeRates, toCurrency } = currencyData;
        if (exchangeRates[toCurrency] !== undefined) {
          setCurrencyData((prevData) => ({
            ...prevData,
            convertedAmount: amount * exchangeRates[toCurrency],
          }));
        }
      }, [currencyData.amount, currencyData.exchangeRates, currencyData.toCurrency]);

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrencyData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };


    return (
    <div>
      <form className="form">
        <div className="form-1">
          <label>У меня есть</label>
          <select
          name="fromCurrency"
          value={currencyData.fromCurrency}
          onChange={handleInputChange}>
          {Object.keys(currencyData.exchangeRates).map((currency) => (
                <option key={currency} value={currency}>
                  {`${currency} - ${currencyNames[currency]}`}
                </option>
              ))}
          </select>
          <input 
          className="input-converter"
          type="number"
          name="amount"
          value={currencyData.amount}
          onChange={handleInputChange}/>
        </div>
        <div className="form-2">
          <label>Хочу приобрести</label>
          <select 
          name="toCurrency"
          value={currencyData.toCurrency}
          onChange={handleInputChange}>
          {Object.keys(currencyData.exchangeRates).map((currency) => (
                <option key={currency} value={currency}>
                  {`${currency} - ${currencyNames[currency]}`}
                </option>
              ))}
          </select>
          <div className="result">
          <p type="number">{currencyData.convertedAmount} {currencyData.toCurrency} (
            {currencyNames[currencyData.toCurrency]})</p>
          </div>
        </div>
      </form>
    </div>
    )
}

export default Converter;