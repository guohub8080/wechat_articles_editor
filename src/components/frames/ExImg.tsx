import {CSSProperties, useEffect, useRef} from "react";
import GetPlaceHolderPic1 from "@/utils/api/placeHolderPic/getPlaceHolderPic1.ts";
import config from "@/config.ts";
import {isNull, isUndefined} from "lodash";
import byDefault from "@/utils/common/byDefault.ts";


/***
 * 带有水印的普通图片（可加important）
 * @param props
 * @constructor
 */
const ExImg = (props: {
  style?: CSSProperties
  important?: [string, string | null | undefined][]
  url?: string
  properties?: object
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
  const url = byDefault(props.url, GetPlaceHolderPic1())
  // 如果没有填入了props.important
  if (isUndefined(props.important) || isNull(props.important)) {
    // @ts-ignore
    return <img style={props.style}
                {...config.waterMark}
                {...props.properties}
                referrerPolicy="no-referrer"
                src={url}
                data-src={url} alt=""/>
  }
  // 如果填入了important，证明需要强调一些属性
  return <img style={props.style}
              ref={ref}
              {...config.waterMark}
              {...props.properties}
              referrerPolicy="no-referrer"
              src={url}
              data-src={url}
              alt=""/>
}
export default ExImg