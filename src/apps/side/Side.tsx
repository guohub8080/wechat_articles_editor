import {css} from "@emotion/react";
import {ConfigProvider, Tabs} from 'antd';
import ArticleList from "@/apps/side/ArticleList.tsx";
import About from "./About";


const Side = () => {
  return <div>
    <div css={side_css}>
      <ConfigProvider theme={themeObj}>
        <Tabs tabBarStyle={{backgroundColor: "#efefef"}}
              tabBarGutter={0}
              defaultActiveKey="1" items={items} size="small"/>
      </ConfigProvider>
    </div>
  </div>
}
export default Side

const side_css = css({
  height: "calc(100vh)",
  overflowY: "auto",
  minWidth: 200,
  overflowX: "hidden",
  zIndex: 900,
  backgroundColor: "white",

})
const themeObj = {
  components: {
    Tabs: {cardHeight: 12, cardPaddingSM: "12px",},
  },
}
const items = [
  {
    label: '推文列表',
    key: '1',
    children: <ArticleList/>
  },
  {
    label: '关于',
    key: '2',
    children: <About/>
  },
]