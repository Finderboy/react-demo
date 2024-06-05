import { useState, useEffect, useCallback } from "react";

// 自定义翻页请求hooks
function useList({ api, initialParams }) {
    // 接口参数
    const [params, setParams] = useState(initialParams);
    // 数据
    const [list, setList] = useState([]);
    // 是否还在请求中
    const [loading, setLoading] = useState(false);
    // 是否还有更多数据
    const [hasMore, setHasMore] = useState(true);
    // 总数
    const [total, setTotal] = useState(0);
    // 是叠加还是翻页
    const [add, setAdd] = useState(false);
    // hooks自身第一次useEffect不执行，需要外部调用getList触发useEffect
    const [key, setKey] = useState(false);

    // 采用参数合并的方式
    const getList = useCallback(
        (param, option = {}) => {
            const { isAdd = false } = option;
            setParams({ ...params, ...param });
            setAdd(isAdd);
            setKey(true);
        },
        [params]
    );

    useEffect(() => {
        if (!key) {
            return;
        }
        setLoading(true);
        api(params).then((res) => {
            setLoading(false);
            if (!res) {
                return;
            }
            const { pageSize, pageNo, items } = res;
            setHasMore(pageSize * pageNo < res.total);
            setTotal(res.total);
            setList(!add ? items : [...list, ...items]);
        });
    }, [params, add, key]);
    return { getList, list, loading, hasMore, total, params };
}

// 测试组件
function Test() {
    const { list, getList } = useList({
        api: getXXXList,
        initialParams: {
            pageSize: 10,
            pageNo: 1,
        },
    });

    const onClick = useCallback(() => {
        const pageSize = Math.floor(Math.random() * 10);
        getList({
            pageSize,
        });
    }, [getList]);

    useEffect(() => {
        getList();
    }, []);
    return (
        <div>
            <Button onClick={onClick}>点击发出请求</Button>
            {list.map((listItem) => (
                <ListItem item={listItem}></ListItem>
            ))}
        </div>
    );
}

function ListItem({ item }) {
    return <div></div>;
}

