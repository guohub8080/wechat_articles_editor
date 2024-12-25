import {ConfigProvider} from "antd";
import zhCN from "antd/locale/zh_CN";
import {RouterProvider} from "react-router-dom";
import router from "./utils/router";
import React from "react";

// 自动扫描页面目录

const App = () => {
    return (<>
        <ConfigProvider locale={zhCN}>
            <RouterProvider router={router}/>
        </ConfigProvider>
    </>)
}

export default App