const books = [
    {
        title: "this is the thet title of the book",
        aurthur: "Naseem",
        img: "./logo192.png",
        id: 1,
    },
    {
        title: "this is the thet title of the second book",
        aurthur: "Ibrahim",
        img: "./logo192.png",
        id: 2,
        
    }
]


const Booklist = () => {
    return(
        <section>
            {books.map((book) =>{
                // console.log(book)
                const {title, aurthur, img} = book;
                return(
                    <Book title={title} aurthur={aurthur} img={img} />

                )
            })}
        </section>
    )

}
const Book = ({book:{title, aurthur, img}}) => {
    // const {title, aurthur, img} = props.book
return(
    <article>
        <img src={img} alt="title" />
        <h3>{title}</h3>
        <h4>{aurthur}</h4>

    </article>
    )
}



export default Booklist;