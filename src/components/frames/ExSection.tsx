import {CSSProperties, ReactNode, useEffect, useRef} from "react";
import config from "@/config.ts";


/***
 * 带有水印的普通框架
 * @param props
 * @constructor
 */
const ExSection = (props: {
  style?: CSSProperties
  children?: ReactNode
  important?: [string, string | null | undefined][]
}) => {
  // 如果需要加important，那么走下面的逻辑
  const ref = useRef(null)
  useEffect(() => {
    if (props.important && ref.current) {
      props.important.map((x) => {
        ref.current.style.setProperty(x[0], x[1], "important")
      })
    }
  }, [props.important])
  // 如果没有填入了props.important
  if (typeof props.important === "undefined") {
    return <section style={props.style} {...config.waterMark}>
      {props.children}
    </section>
  }
  // 如果填入了important，证明需要强调一些属性
  return <section style={props.style} ref={ref} {...config.waterMark}>
    {props.children}
  </section>

}
export default ExSection