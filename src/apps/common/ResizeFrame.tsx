import React, {ReactNode} from "react";
import {css} from "@emotion/react";
import ColumnResizeHandler from "@/apps/common/ColumnResizeHandler.tsx";
import {Resizable} from 're-resizable';


const ResizeFrame = (props: {
  children?: ReactNode,
  defaultWidth: number,
  maxWidth?: number,
  minWidth?: number
}) => {

  return <div css={scrollFrame_css}>
    <div style={{width: "100%", height: "calc(100vh)", overflowX: "hidden"}}>
      <Resizable
        enable={{right: true}}
        maxWidth={props.maxWidth || 1000}
        minWidth={props.minWidth || 0}
        handleComponent={{right: ColumnResizeHandler(20)}}
        defaultSize={{
          width: props.defaultWidth,
          height: "calc(100vh)"
        }}
        style={{height: "calc(100vh)", overflowX: "hidden"}}
        bounds="window"
      >
        <div style={{height: "calc(100vh)"}}>
          {props.children}
        </div>
      </Resizable>
    </div>
  </div>
}

export default ResizeFrame

const scrollFrame_css = css({
  height: "calc(100vh)",
  overflowX: "hidden",
  overflowY: "hidden",
  marginRight: 5,
})
