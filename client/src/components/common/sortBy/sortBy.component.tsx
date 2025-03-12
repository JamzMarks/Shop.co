function SortBy(){
    return(
        <>
        <label htmlFor="sortByTime">Sort by time:</label>
        <select name="sortByTime" id="sortByTime">
            <option value="Latest">Latest</option>
            <option value="Newest">Newest</option>
        </select>
        </>
    )
}

export default SortBy;