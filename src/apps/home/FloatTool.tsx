/* eslint-disable no-mixed-spaces-and-tabs */
import {css} from "@emotion/react";
import {Button, ColorPicker, InputNumber, message} from "antd";
import Draggable from 'react-draggable';
import logo from "@/assets/svgs/logoSvg/favicon.svg"
import ButtonGroup from "antd/es/button/button-group";
import {useKeyPress} from "ahooks";
import {useEffect, useState} from "react";
import {useWindowSize} from "usehooks-ts";
import config from "@/config.ts";

const FloatTool = (props: {
  // eslint-disable-next-line @typescript-eslint/ban-types
  changeBgColor: Function,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setViewContentEdge: Function,
  // eslint-disable-next-line @typescript-eslint/ban-types
  switchSide: Function,
  defaultBgColor: string,
  defaultViewPadding: number,
  articleScroll: number,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setArticleScroll: Function
}) => {
  useKeyPress("ctrl.c", () => copyWechatHTMLText())
  useKeyPress("s", () => props.switchSide())
  useKeyPress("ctrl.x", () => copyWechatRichHTML())
  const copyWechatRichHTML = () => {
    const frameHTML = document.getElementById(config.rootSectionID.toString())
    const innerHTMLNode = frameHTML.getElementsByClassName(config.rootSectionID.toString())[0]
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    innerHTMLNode.style.width = "650px"
    const copyItem = new ClipboardItem({
      "text/html": new Blob([frameHTML.outerHTML], {type: "text/html"}),
    })
    navigator.clipboard.write([copyItem]).then(() => {
      console.log("已复制富文本RICH HTML")
    })
    message.success("已复制富文本RICH HTML")
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    innerHTMLNode.style.width = null
  }
  const copyWechatHTMLText = () => {
    const frameHTML = document.getElementById(config.rootSectionID.toString())
    const innerHTMLNode = frameHTML.getElementsByClassName(config.rootSectionID.toString())[0]
    const svgs = document.getElementsByTagName("svg")
    for (const i of svgs) {
      i.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    }
    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-expect-error
    navigator.clipboard.writeText(frameHTML.outerHTML).then(() => {
      console.log("已复制源代码")
    })
    message.success("已复制源代码TEXT SOURCE")
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    innerHTMLNode.style.width = null
  }
  const [x, setX] = useState(500)
  const [y, setY] = useState(100)
  const [x0, setX0] = useState(100)
  const [y0, setY0] = useState(100)
  const windowSize = useWindowSize()
  useEffect(() => {
    setX(800)
    setY(100)
  }, [windowSize])
  return <Draggable
    handle="strong" position={{x: x, y: y}}
    onStart={(e) => {
      if ("nativeEvent" in e) {
        if ("offsetX" in e.nativeEvent) setX0(e?.nativeEvent?.offsetX)
        if ("offsetY" in e.nativeEvent) setY0(e?.nativeEvent?.offsetY)
      }
    }}
    onStop={(e) => {
      if ("clientX" in e) setX(e?.clientX - x0)
      if ("clientY" in e) setY(e?.clientY - y0)
    }}>
    <div css={floatToolFrame_css}>
      <strong>
        <DragHandler/>
      </strong>
      <div style={{backgroundColor: "#EFEFEF", width: "fit-content", padding: 5, borderRadius: 8}}>
        <div className="logo展示区" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          marginBottom: 10
        }}>
          <img style={{width: 25}} src={logo} alt=""/>
          <div style={{fontWeight: 700}}>公众号预览</div>
        </div>
        <div className="颜色调整">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 15,
              marginBottom: 5
            }}>
            <div>设置背景色</div>
            <ColorPicker allowClear={false} format="hex" showText={true} onChange={(e, y) => {
              props.changeBgColor(y)
            }} defaultValue={props.defaultBgColor} style={{width: 150}}
            />
          </div>

          <div style={{display: "flex", justifyContent: "center", gap: 3}}>
            <div onClick={() => props.changeBgColor("#000000")}>
              <ColorPicker defaultValue="#000000" open={false}/>
            </div>
            <div onClick={() => props.changeBgColor("#BDBDBD")}>
              <ColorPicker defaultValue="#BDBDBD" open={false}/>
            </div>
            <div onClick={() => props.changeBgColor("#ffffff")}>
              <ColorPicker defaultValue="#ffffff" open={false}/>
            </div>
            <div onClick={() => props.changeBgColor("#0D47A1")}>
              <ColorPicker defaultValue="#0D47A1" open={false}/>
            </div>
            <div onClick={() => props.changeBgColor("#B71C1C")}>
              <ColorPicker defaultValue="#B71C1C" open={false}/>
            </div>
            <div onClick={() => props.changeBgColor("#00C853")}>
              <ColorPicker defaultValue="#00C853" open={false}/>
            </div>
            <div onClick={() => props.changeBgColor("#FF5722")}>
              <ColorPicker defaultValue="#FF5722" open={false}/>
            </div>
          </div>
        </div>
      </div>
      <div className="padding调整" style={{marginTop: 5}}>
        <InputNumber
          addonBefore="公众号预览窗格Padding"
          changeOnWheel
          onMouseOver={(e) => e.currentTarget.focus()}
          min={0} max={100}
          step={10}
          defaultValue={props.defaultViewPadding}
          onChange={e => props.setViewContentEdge(e)}
          controls
        />
      </div>
      <div className="文章滚动调整" style={{marginTop: 10}}>
        <InputNumber
          addonBefore="文章滚动位置"
          changeOnWheel
          onMouseOver={(e) => e.currentTarget.focus()}
          min={0}
          step={100}
          value={props.articleScroll}
          formatter={(value) => `@ ${value}`.split(".")[0]}
          defaultValue={props.articleScroll}
          onChange={e => props.setArticleScroll(e)}
          controls
        />
      </div>
      <div className="文章位置同时调整" style={{marginTop: 5}}>
        <ButtonGroup>
          <Button onClick={() => props.setArticleScroll(props.articleScroll + 100)}>+100</Button>
          <Button onClick={() => props.setArticleScroll(props.articleScroll + 200)}>+200</Button>
          <Button
            onClick={() => props.setArticleScroll(props.articleScroll - 100 <= 0 ? 0 : props.articleScroll - 100)}>-100</Button>
          <Button
            onClick={() => props.setArticleScroll(props.articleScroll - 200 <= 0 ? 0 : props.articleScroll - 200)}>-200</Button>
        </ButtonGroup>

      </div>

      <Button style={{width: "100%", marginTop: 15, marginBottom: 15}}
              onClick={() => props.switchSide()}>切换侧边显示 (S)
      </Button>
      <Button style={{width: "100%", marginTop: 5, marginBottom: 5}} type="primary"
              onClick={copyWechatRichHTML}>复制HTML到剪贴板 (Ctrl X)</Button>
      <Button
        style={{width: "100%", marginTop: 5, marginBottom: 5}} type="primary"
        onClick={copyWechatHTMLText}>复制源代码到剪贴板 (Ctrl C)</Button>
    </div>
  </Draggable>
}
export default FloatTool

const floatToolFrame_css = css({
  width: 300,
  padding: 20,
  paddingTop: 0,
  backgroundColor: "#EFEFEF",
  borderRadius: 8,
  boxShadow: "0px 0px 20px 1px rgba(0, 0, 0, 0.2);",
  position: "absolute",
  zIndex: 999
})

const DragHandler = () => {
  return <div style={{
    width: "100%",
    height: 30,
    backgroundColor: "#444444",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "move",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginBottom: 10
  }}>
    <div style={{width: 150, height: 4, backgroundColor: "#EFEFEF", borderRadius: 4}}></div>
  </div>
}
