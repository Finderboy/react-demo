import View2 from '../ViewModel/View2'
import React, { useState } from 'react'
import MainList from '../ViewModel/mainList'
function ViewModel() {
    const [form, setForm] = useState({
        filterText: '',
        inStockOnly: false,
    })
    const changeText = (text) => {
        setForm({
            ...form,
            filterText: text,
        })
        // getList()
    }
    const [mainList, setMainList] = useState([
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ])
    return (
        <div>
            <View2 form={form} changeText={changeText} />
            <MainList mainList={mainList} />
        </div>
    )
}
export default ViewModel
