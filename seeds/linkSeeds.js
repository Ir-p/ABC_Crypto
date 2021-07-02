// import models
const { Link } = require('../models');

// sample posts
const sample_links = [
  {
    link: 'https://developers.coinbase.com/docs/wallet/coinbase-connect',
    name: 'Coinbase Connect (OAuth2)',
    text: 'Connect your application with millions of Coinbase digital currency wallets using OAuth2',
    upvote: '6',
    user_id: '2'
  },
  {
    link: 'https://freewallet.org/',
    name: 'Digital currency wallet',
    text: 'A range of digital currency wallets with a built-in exchange for Bitcoin, Ethereum, Litecoin, Dogecoin, Monero, and Bytecoin in one place.',
    upvote: '9',
    user_id: '1'
  },
  {
    link: 'https://borgenproject.org/digital-poverty/',
    name: 'The Borgen Project',
    text: 'The digital age has improved quality of life for many people around the world. As prevalent as technology has become, there are still many countries that live with little or no access to technology, known as digital poverty.',
    upvote: '5',
    user_id: '3'
  },
  {
    link: 'https://bitcoin.org/',
    name: 'Widely used digital currency.',
    text: 'Bitcoin is an innovative payment network and a new kind of money.',
    upvote: '9',
    user_id: '1'
  }
];

// create and insert sample user data
const linkSeeds = () => Link.bulkCreate(sample_links);

// export
module.exports = linkSeeds;