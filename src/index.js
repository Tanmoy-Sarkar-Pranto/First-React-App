/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import { books } from "./books"

import Book from "./Book"

const handleClick = (e) => {
  console.log(e)
  console.log("Button clicked")
}

// const TempEventExample = (props) => {
//   const handleOnChange = (e) => {
//     console.log(e.target.value)
//     console.log("Change in form")
//   }
//   const handleSubmitForm = (e) => {
//     e.preventDefault()
//     console.log("form submission")
//   }
//   return (
//     <section>
//       <form onSubmit={handleSubmitForm}>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           style={{ margin: "1rem 0" }}
//           onChange={handleOnChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <button onClick={() => console.log("again clicked")}>Click here</button>
//     </section>
//   )
// }

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((item) => item.id === id)
    console.log(book)
  }
  return (
    <>
      <h1>Best Selling Books</h1>
      <section className="booklist">
        {books.map((item, i) => {
          // console.log(item)
          return <Book index={i} {...item} key={item.id} getBook={getBook} />
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList />)
