
// Local Settings

const baseURL: string = 'http://localhost:5000/api/';
export const houseMoneyLinkUrl: string = 'http://localhost:3001/Occupants/';
export const houseFoodLinkUrl: string = 'http://localhost:3002/Occupants/';

// Integration Test Settings

// const baseURL: string = 'http://90.252.214.72/MyHouseTestAPI/api/';
// export const houseMoneyLinkUrl: string = 'http://housemoney.surge.sh/Occupants/';
// export const houseFoodLinkUrl: string = 'http://housefood.surge.sh/Occupants/';

// Dev Staging Settings

// const baseURL: string = 'http://90.252.214.72/MyHouseDevAPI/api/';
// export const houseMoneyLinkUrl: string = 'http://housemoney.surge.sh/Occupants/';
// export const houseFoodLinkUrl: string = 'http://housefood.surge.sh/Occupants/';

// Dev Firebase Settings

export const firebaseConfig = {
    apiKey: 'AIzaSyA27cRAIaX6NqiLQ4_AHNB91MlHajiTplA', // TODO: Store as not plain text!
    authDomain: 'myhouse-a01c7.firebaseapp.com',
    databaseURL: 'https://myhouse-a01c7.firebaseio.com',
    projectId: 'myhouse-a01c7',
    storageBucket: 'myhouse-a01c7.appspot.com',
    messagingSenderId: '1081028595369',
};

// Test Settings
// const baseURL = 'http://90.252.214.72/MyHouseTestAPI/api/';
// export const houseMoneyLinkUrl: string = 'http://housemoney-test.surge.sh/Occupants/';
// export const houseFoodLinkUrl: string = 'http://housefood-test.surge.sh/Occupants/';

// Live Settings

// const baseURL = 'http://90.252.214.72/MyHouse_Live/api/';
// export const houseMoneyLinkUrl: string = 'http://housemoney.surge.sh/Occupants/';
// export const houseFoodLinkUrl: string = 'http://housefood.surge.sh/Occupants/';

// export const firebaseConfig = {
//     apiKey: 'AIzaSyB3wiPC5e1KTQtDi_4Pa5LYvghDGh3DTos',
//     authDomain: 'myhouse-live.firebaseapp.com',
//     databaseURL: 'https://myhouse-live.firebaseio.com',
//     projectId: 'myhouse-live',
//     storageBucket: 'myhouse-live.appspot.com',
//     messagingSenderId: '724995226906',
// };

export default baseURL;
