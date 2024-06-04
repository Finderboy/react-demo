import { Button } from "antd";

function Children (props) {
    const add = () => {
        props.addNum();
    }
    return (
        <div>
            <h1>{ props.num }</h1>
            <Button onClick={ add }>点击</Button>
        </div>
    )
}
export default Children;
