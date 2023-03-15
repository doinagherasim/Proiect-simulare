function ListOfItems(props) {
    return (
        <div>
            <ul>
            {
                props.bookList.map((element, index) => 
                <li key={index}>
                 {element}
                </li>)
            }
            </ul>
        </div>
    )
};

export default ListOfItems;