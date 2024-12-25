/* eslint-disable no-mixed-spaces-and-tabs */
import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import Side from "@/apps/side/Side.tsx";
import {css} from "@emotion/react";
import FloatTool from "@/apps/home/FloatTool.tsx";
import ResizeFrame from "@/apps/common/ResizeFrame.tsx";
import ViewFrame from "@/apps/common/ViewFrame.tsx";
import config from "@/config.ts";

const Home = () => {
  // 设置背景颜色
  const [bgColor, setBgColor] = useState("#A8A8A8")
  const changeBgColor = (color: string) => setBgColor(color)
  const [viewPadding, setViewPadding] = useState(20)
  const [articleScroll, setArticleScroll] = useState(0)
  // 是否隐藏侧边栏
  const [isSideHide, setIsSideHide] = useState(false)
  return <>
    <FloatTool
      defaultBgColor={bgColor}
      switchSide={() => setIsSideHide(!isSideHide)}
      defaultViewPadding={viewPadding}
      setViewContentEdge={setViewPadding}
      articleScroll={articleScroll}
      setArticleScroll={setArticleScroll}
      changeBgColor={changeBgColor}/>
    <div style={{backgroundColor: "white"}}>
      {/*浮动工具*/}
      <div style={{backgroundColor: bgColor, overflowX: "hidden"}}>
        <div style={{display: "flex", overflowX: "hidden"}}>
          {/*侧边栏*/}
          {!isSideHide && <div css={visible_css}>
              <ResizeFrame defaultWidth={300} maxWidth={600}>
                  <Side/>
              </ResizeFrame>
          </div>}
          {/*主要的视图*/}
          <div style={{height: "calc(100vh)"}}>
            <ViewFrame
              isMainView={true} contentEdge={viewPadding} scroll={articleScroll}
              setScroll={setArticleScroll}>
              <div>
                <section
                  id={config.rootSectionID}
                  {...config.waterMark}
                  className={`HTML toolkit made by ${config.rootSectionID}`}>
                  <Outlet/>
                </section>
              </div>
            </ViewFrame>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Home

const visible_css = css({
  height: "calc(100vh)",
  overflowY: "hidden",
})

