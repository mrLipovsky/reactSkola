// komponenta má stejný název jako je název souboru
// komponenta obsahuje return
// v return musí něco být
// na konci souboru musí být řádek s exportem
// return musi vratit len jeden element 
// rafce + tab = automatické vytvoření funkce

import data from './data' 

import Book from './components/Book';
import './App.css';

const App = () => {

  //console.log(data[0].title);
  
  return (
    <div className='all-books'>
      <Book bookTitle={data[0].title} bookPrice={data[0].price} bookLink={data[0].image} bookDescription={data[0].description}/>
      <Book bookTitle={data[1].title} bookPrice={data[1].price} bookLink={data[1].image} bookDescription={data[1].description}/>
      <Book bookTitle={data[2].title} bookPrice={data[2].price} bookLink={data[2].image} bookDescription={data[2].description}/>
      <Book bookTitle={data[3].title} bookPrice={data[3].price} bookLink={data[3].image} bookDescription={data[3].description}/>
      <Book bookTitle={data[4].title} bookPrice={data[4].price} bookLink={data[4].image} bookDescription={data[4].description}/>
    </div>
  )
}

export default App;