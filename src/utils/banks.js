export const banks = [
    {
        "name": "Access Bank",
        "logo": "https://nigerianbanks.xyz/logo/access-bank.png"
    },
    {
        "name": "Access Bank (Diamond)",
        "logo": "https://nigerianbanks.xyz/logo/access-bank-diamond.png"
    },
    {
        "name": "ALAT by WEMA",
        "logo": "https://nigerianbanks.xyz/logo/alat-by-wema.png"
    },
    {
        "name": "ASO Savings and Loans",
        "logo": "https://nigerianbanks.xyz/logo/asosavings.png"
    },
    {
        "name": "Bowen Microfinance Bank",
        "logo": "https://nigerianbanks.xyz/logo/default-image.png"
    },
    {
        "name": "CEMCS Microfinance Bank",
        "logo": "https://nigerianbanks.xyz/logo/cemcs-microfinance-bank.png"
    },
    {
        "name": "Citibank Nigeria",
        "logo": "https://nigerianbanks.xyz/logo/citibank-nigeria.png"
    },
    {
        "name": "Ecobank Nigeria",
        "logo": "https://nigerianbanks.xyz/logo/ecobank-nigeria.png"
    },
    {
        "name": "Ekondo Microfinance Bank",
        "logo": "https://nigerianbanks.xyz/logo/ekondo-microfinance-bank.png"
    },
    {
        "name": "Fidelity Bank",
        "logo": "https://nigerianbanks.xyz/logo/fidelity-bank.png"
    },
    {
        "name": "First Bank of Nigeria",
        "logo": "https://nigerianbanks.xyz/logo/first-bank-of-nigeria.png"
    },
    {
        "name": "First City Monument Bank",
        "logo": "https://nigerianbanks.xyz/logo/first-city-monument-bank.png"
    },
    {
        "name": "Globus Bank",
        "logo": "https://nigerianbanks.xyz/logo/globus-bank.png"
    },
    {
        "name": "Guaranty Trust Bank",
        "logo": "https://nigerianbanks.xyz/logo/guaranty-trust-bank.png"
    },
    {
        "name": "Hasal Microfinance Bank",
        "logo": "https://nigerianbanks.xyz/logo/default-image.png"
    },
    {
        "name": "Heritage Bank",
        "logo": "https://nigerianbanks.xyz/logo/heritage-bank.png"
    },
    {
        "name": "Jaiz Bank",
        "logo": "https://nigerianbanks.xyz/logo/default-image.png"
    },
    {
        "name": "Keystone Bank",
        "logo": "https://nigerianbanks.xyz/logo/keystone-bank.png"
    },
    {
        "name": "Kuda Bank",
        "logo": "https://nigerianbanks.xyz/logo/kuda-bank.png"
    },
    {
        "name": "One Finance",
        "logo": "https://nigerianbanks.xyz/logo/default-image.png"
    },
    {
        "name": "Paga",
        "logo": "https://nigerianbanks.xyz/logo/paga.png"
    },
    {
        "name": "Parallex Bank",
        "logo": "https://nigerianbanks.xyz/logo/default-image.png"
    },
    {
        "name": "PayCom",
        "logo": "https://nigerianbanks.xyz/logo/default-image.png"
    },
    {
        "name": "Polaris Bank",
        "logo": "https://nigerianbanks.xyz/logo/polaris-bank.png"
    },
    {
        "name": "Providus Bank",
        "logo": "https://nigerianbanks.xyz/logo/default-image.png"
    },
    {
        "name": "Rubies MFB",
        "logo": "https://nigerianbanks.xyz/logo/default-image.png"
    },
    {
        "name": "Sparkle Microfinance Bank",
        "logo": "https://nigerianbanks.xyz/logo/sparkle-microfinance-bank.png"
    },
    {
        "name": "Stanbic IBTC Bank",
        "logo": "https://nigerianbanks.xyz/logo/stanbic-ibtc-bank.png"
    },
    {
        "name": "Standard Chartered Bank",
        "logo": "https://nigerianbanks.xyz/logo/standard-chartered-bank.png"
    },
    {
        "name": "Sterling Bank",
        "logo": "https://nigerianbanks.xyz/logo/sterling-bank.png"
    },
    {
        "name": "Suntrust Bank",
        "logo": "https://nigerianbanks.xyz/logo/default-image.png"
    },
    {
        "name": "TAJ Bank",
        "logo": "https://nigerianbanks.xyz/logo/taj-bank.png"
    },
    {
        "name": "TCF MFB",
        "logo": "https://nigerianbanks.xyz/logo/default-image.png"
    },
    {
        "name": "Titan Trust Bank",
        "logo": "https://nigerianbanks.xyz/logo/default-image.png"
    },
    {
        "name": "Union Bank of Nigeria",
        "logo": "https://nigerianbanks.xyz/logo/union-bank-of-nigeria.png"
    },
    {
        "name": "United Bank For Africa",
        "logo": "https://nigerianbanks.xyz/logo/united-bank-for-africa.png"
    },
    {
        "name": "Unity Bank",
        "logo": "https://nigerianbanks.xyz/logo/default-image.png"
    },
    {
        "name": "VFD",
        "logo": "https://nigerianbanks.xyz/logo/default-image.png"
    },
    {
        "name": "Wema Bank",
        "logo": "https://nigerianbanks.xyz/logo/wema-bank.png"
    },
    {
        "name": "Zenith Bank",
        "logo": "https://nigerianbanks.xyz/logo/zenith-bank.png"
    }
];

export const bankOptions = banks.map((bank) => ({
    value: bank.name.toLowerCase().replace(/\s+/g, ''),
    label: bank.name,
    logo: bank.logo,
}));