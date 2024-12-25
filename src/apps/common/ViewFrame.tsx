/* eslint-disable no-mixed-spaces-and-tabs */
import {ReactNode, useEffect, useRef} from "react";
import {css} from "@emotion/react";
import ResizeFrame from "@/apps/common/ResizeFrame.tsx";
import {useScroll} from "ahooks";

const viewFrame_css = css({
  width: "100%",
  overflowY: "hidden",
  height: "calc(100vh)",
  marginLeft: 15,
})
const ViewFrame = (props: {
  children?: ReactNode,
  contentEdge?: number,
  scroll: number,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setScroll?: Function,
  isMainView: boolean
}) => {
  const refScrollFrameDom = useRef(null);
  const scroll = useScroll(refScrollFrameDom);
  useEffect(() => {
    refScrollFrameDom.current.scrollTo({top: props.scroll})
  }, [props.scroll])

  useEffect(() => {
    if (props.isMainView) props.setScroll(scroll?.top)
  }, [scroll])
  return <div css={viewFrame_css}>
    <ResizeFrame defaultWidth={400} minWidth={200} maxWidth={900}>
      <div ref={refScrollFrameDom}
           style={{
             height: "calc(100vh)",
             width: "100%",
             overflowX: "hidden",
             overflowY: "scroll",
             marginRight: 0,
             padding: props.contentEdge || 0
           }}>
        {props.children}
      </div>
    </ResizeFrame>
  </div>
}
export default ViewFrame