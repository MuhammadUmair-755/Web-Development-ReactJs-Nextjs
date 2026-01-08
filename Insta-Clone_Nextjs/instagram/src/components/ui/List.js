function List({list, render}) {
    return (
        <>
           {list.map((item)=> render(item))} 
        </>
    )
}

export default List
