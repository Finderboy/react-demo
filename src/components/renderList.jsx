import React from 'react';
import { Button, List, Typography } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
const renderList = () => {
    return (
        <>
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark>[标题：]</Typography.Text> {item}
                    </List.Item>
                )}
            />
            <Button style={{ marginTop: '20px' }}>点击</Button>
        </>
    )
}

export default renderList;
