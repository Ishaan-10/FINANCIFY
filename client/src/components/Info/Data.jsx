import svg1 from '../../images/svg-4.svg';
import svg2 from '../../images/svg-5.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: 'Transaction Management',
  headline: 'Unlimited Transactions tracking with zero fees',
  description: 'Get access to our exclusive app that allows you to keep a track of all your transactions, subscriptions. Also allows you to set goals and get personalised feeds on your spendings.',
  buttonLabel: 'Get started',
  imgStart: false,
  img: svg1,
  alt: 'car',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: 'Personalised Access',
  headline: 'Get features such as OCR scanning of receipts',
  description: 'You can easily scan your payment receipts and save them as spendings. Also you get personalised tips and discount offers on your dashboard.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: svg2,
  alt: 'Piggybanck',
  dark: false,
  primary: false,
  darkText: true
};
