import Owl from './owl.png';
import test from './test.png';
const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const listingsData = [
    { id: 1, title: 'Item Name', seller: 'Anya', description: desc, price: '$20.00', image: "https://img.buzzfeed.com/buzzfeed-static/static/2017-10/31/13/asset/buzzfeed-prod-fastlane-01/sub-buzz-20342-1509470849-7.jpg?crop=600%3A900%3B0%2C0&downsize=300:*&output-format=auto&output-quality=auto", pickup: 'On Campus', category: 'insert tags'},
    { id: 2, title: 'Item Name', seller: 'Anya', description: desc, price: '$35.50', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqORus3Fnu7SPQIVsONI8i5_C02zJmxOfldg&usqp=CAU", pickup: 'Off Campus', category: 'insert tags' },
    { id: 3, title: 'Item Name', seller: 'Anya', description: desc, price: '$60.50', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzVUSex0mTKssYWsQr4fw9pwA0-jQssO3qkg&usqp=CAU", pickup: 'On Campus', category: 'insert tags' },
    { id: 4, title: 'Item Name', seller: 'Anya', description: desc, price: '$75.00', image: "https://img.buzzfeed.com/buzzfeed-static/static/2019-03/18/13/asset/buzzfeed-prod-web-04/sub-buzz-18824-1552930682-1.jpg?downsize=600:*&output-format=auto&output-quality=auto", pickup: 'Off Campus', category: 'insert tags' },
    { id: 5, title: 'Item Name', seller: 'Anya', description: desc, price: '$45.30', image: "https://img.buzzfeed.com/buzzfeed-static/static/2019-03/18/13/asset/buzzfeed-prod-web-04/sub-buzz-18897-1552930656-1.jpg?downsize=600:*&output-format=auto&output-quality=auto", pickup: 'On Campus', category: 'insert tags' },
    { id: 6, title: 'Item Name', seller: 'Daniel', description: desc, price: '$18.00', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWLY_VGp0XpmXZwTFqVFgtJR3YnQE1YeBZw&usqp=CAU", pickup: 'Off Campus', category: 'insert tags' },
    { id: 7, title: 'Item Name', seller: 'Daniel', description: desc, price: '$55.00', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSEQBCKJBz_sOI5QEpn6Mvf8CXH1zd6Olxg&usqp=CAU", pickup: 'On Campus', category: 'insert tags' },
    { id: 8, title: 'Item Name', seller: 'Daniel', description: desc, price: '$80.00', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN-Dvr18OTFKQBQoPcCByCZA9MIYXFv8zNxg&usqp=CAU", pickup: 'Off Campus', category: 'insert tags' },
    { id: 9, title: 'Item Name', seller: 'Daniel', description: desc, price: '$15.00', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Au7GbbNI31mViu481D0xtWYWJPafkzEHOA&usqp=CAU", pickup: 'On Campus', category: 'insert tags' },
    { id: 10, title: 'Item Name', seller: 'Daniel', description: desc, price: '$90.00', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NlyeXk5srB91GTuUPYHg22jCAwEp8vuQ0Q&usqp=CAU", pickup: 'Off Campus', category: 'insert tags' },
  

const listingsData = [
    { id: 1, title: 'Wonderful Item', seller: 'Anya', description: 'Top-notch quality', price: '$20.00', image: test, pickup: 'On Campus', category: 'insert tags'},
    { id: 2, title: 'Fantastic Good', seller: 'Anya', description: 'Worth every penny', price: '$35.50', image: Owl, pickup: 'Off Campus', category: 'insert tags' },
    { id: 3, title: 'Amazing Product', seller: 'Anya', description: 'A real bargain', price: '$60.50', image: Owl, pickup: 'On Campus', category: 'insert tags' },
    { id: 4, title: 'Incredible Commodity', seller: 'Anya', description: 'An absolute must-have', price: '$75.00', image: test, pickup: 'Off Campus', category: 'insert tags' },
    { id: 5, title: 'Superb Thing', seller: 'Anya', description: 'Simply the best on the market', price: '$45.30', image: Owl, pickup: 'On Campus', category: 'insert tags' },
    { id: 6, title: 'Wonderful Item', seller: 'Daniel', description: 'Top-notch quality', price: '$18.00', image: test, pickup: 'Off Campus', category: 'insert tags' },
    { id: 7, title: 'Fantastic Good', seller: 'Daniel', description: 'Worth every penny', price: '$55.00', image: Owl, pickup: 'On Campus', category: 'insert tags' },
    { id: 8, title: 'Amazing Product', seller: 'Daniel', description: 'A real bargain', price: '$80.00', image: Owl, pickup: 'Off Campus', category: 'insert tags' },
    { id: 9, title: 'Incredible Commodity', seller: 'Daniel', description: 'An absolute must-have', price: '$15.00', image: test, pickup: 'On Campus', category: 'insert tags' },
    { id: 10, title: 'Superb Thing', seller: 'Daniel', description: 'Simply the best on the market', price: '$90.00', image: Owl, pickup: 'Off Campus', category: 'insert tags' },
    { id: 11, title: 'Fantastic Good', seller: 'Albert', description: 'Worth every penny', price: '$32.50', image: test, pickup: 'On Campus', category: 'insert tags' },
    { id: 12, title: 'Superb Thing', seller: 'Aaron', description: 'Simply the best on the market', price: '$42.70', image: Owl, pickup: 'Off Campus', category: 'insert tags' },
    { id: 13, title: 'Wonderful Item', seller: 'Shashank', description: 'Top-notch quality', price: '$22.00', image: test, pickup: 'On Campus', category: 'insert tags' },
    { id: 14, title: 'Amazing Product', seller: 'Joanna', description: 'A real bargain', price: '$62.50', image: Owl, pickup: 'Off Campus', category: 'insert tags' },
    { id: 15, title: 'Incredible Commodity', seller: 'Izzy', description: 'An absolute must-have', price: '$77.00', image: test, pickup: 'On Campus', category: 'insert tags' },
    { id: 16, title: 'Superb Thing', seller: 'Freya', description: 'Simply the best on the market', price: '$45.30', image: Owl, pickup: 'Off Campus', category: 'insert tags' },
    { id: 17, title: 'Fantastic Good', seller: 'Caroline', description: 'Worth every penny', price: '$35.50', image: test, pickup: 'On Campus', category: 'insert tags' },
    { id: 18, title: 'Wonderful Item', seller: 'Camille', description: 'Top-notch quality', price: '$20.00', image: Owl, pickup: 'Off Campus', category: 'insert tags' },
    { id: 19, title: 'Amazing Product', seller: 'Alejandro', description: 'A real bargain', price: '$60.50', image: test, pickup: 'On Campus', category: 'insert tags' },
  ];  

export default listingsData;

