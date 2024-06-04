import { Input, Radio } from 'antd';
function View2(props) {
    const changeValue = (e) => {
        props.changeText(e.target.value);
    }
    return (
        <div>
            <Input placeholder={props.filterText} onChange={changeValue} />
            <Radio>Only show products in work</Radio>
        </div>
    )
}
export default View2
