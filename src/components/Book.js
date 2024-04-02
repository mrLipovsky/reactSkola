import './Book.css'

import OrderButton from './OrderButton'

const Book = (props) => {
  return (
    <div className='bookBox'>
      <h2>{props.bookTitle}</h2>
      <p>{props.bookDescription}</p>
      <p>Rating 10 / 10</p>
      <p className='book-price'> {props.bookPrice} CZK </p>
      <img src={props.bookLink} alt="book lean startup" />
      <OrderButton />
    </div>
  )
}

// const Book = ({bookDescription, bookLink, bookTitle, bookPrice}) => {
//   return (
//     <div className='bookBox'>
//       <h2>{bookTitle}</h2>
//       <p>{bookDescription}</p>
//       <p>Rating 10 / 10</p>
//       <p className='book-price'> {bookPrice} CZK </p>
//       <img src={bookLink} alt="book lean startup" />
//       <OrderButton />
//     </div>
// }

export default Book;