import './index.css'
function Item(props) {
    return (
        <div className="title">
            <span>{ props.name }</span>
            <span>{ props.price }</span>
        </div>
    )
}
function MainList(props) {
    return (
        <div>
            <div className="title">
                <span>Title</span>
                <span>Price</span>
            </div>
            {
                props.mainList.map((item, index) => {
                    return (
                        <div key={index}>
                            <Item name={item.name} price={item.price} />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default MainList
