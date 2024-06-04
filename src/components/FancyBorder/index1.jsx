function SplitPane(props) {
    return (
        <div className="split-pane">
            <div className="split-pane__left">
                <div>{ props.left }</div>
            </div>
            <div className="split-pane__right">
                <div>{ props.right }</div>
            </div>
        </div>
    );
}
export default SplitPane;
