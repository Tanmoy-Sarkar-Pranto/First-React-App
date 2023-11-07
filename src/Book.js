const Book = (props) => {
  console.log(props)
  const { author, bookName, img, getBook, id, index } = props
  return (
    <article className="book">
      <p className="index">#{index + 1}</p>
      <img src={img} alt={bookName} />
      <h2>{bookName}</h2>
      <h4>{author.toUpperCase()}</h4>
      <button
        onClick={() => {
          getBook(id)
        }}
      >
        click here
      </button>
      {props.children}
    </article>
  )
}

export default Book
