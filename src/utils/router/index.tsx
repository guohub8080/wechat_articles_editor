import {createHashRouter, Navigate} from 'react-router-dom'
import Home from '@/apps/home/Home.tsx'
import React from "react";

const modules = import.meta.glob('/src/articles/**/*.tsx');

// automatic generate routes:
const routes = Object.keys(modules).map((filePath) => {
  const path = filePath
    .replace('/src/articles/', '') // 去掉根路径
    .replace(/\/index\.tsx$/, '') // 去掉 index.tsx
    .replace(/\.tsx$/, ''); // 去掉 .tsx 后缀

  return {
    path: path === '' ? '/' : path, // 路由路径
    element: React.lazy(modules[filePath as any] as any), // 动态加载组件
    title: filePath
      .replace('/src/articles/', '') // 去掉前缀
      .replace(/\.tsx$/, '') // 去掉后缀
  };
});

//export default methods:
const r: any = createHashRouter([
  {
    path: "",
    element: <Navigate to={routes[routes.length - 1].path}></Navigate>
  },
  {
    path: "/",
    element: <Home/>,
    children: routes.map((route) => ({
      path: route.path,
      element: (
        <React.Suspense
          fallback={<div>Loading...</div>}>
          <route.element/>
        </React.Suspense>
      ),
      title: route.title,
    }))
  },
  {
    path: "*", // 匹配所有未知路径
    element: <Navigate to="/home" replace/>, // 重定向到 "/home"
  },
]);

export default r