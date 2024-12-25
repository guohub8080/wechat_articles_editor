import {ReactNode} from "react";
import byDefault from "@/utils/common/byDefault.ts";

const P = (props: {
  mt?: number
  mb?: number
  children?: ReactNode
  fontSize?: number
  textIndent?: number | string
  px?: number
  align?: "right" | "center"
}) => {
  const px = byDefault(props.px, 15)
  let align: "justify" | "right" | "center" = "justify"
  if (props?.align === "right") align = "right"
  else if (props?.align === "center") align = "center"
  return <section style={{
    paddingLeft: px, paddingRight: px,
    marginBottom: byDefault(props.mb, 15),
    marginTop: byDefault(props.mt, 0),
    display: "block"
  }}>
    <p style={{
      fontSize: props.fontSize || 17,
      lineHeight: 1.8,
      textIndent: byDefault(props.textIndent, "2em"),
      textAlign: align
    }}>
      {props.children}
    </p>
  </section>
}
export default P