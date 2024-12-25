import byDefault from "@/utils/common/byDefault.ts";
import googleColors from "@/assets/colors/googleColors.ts";

const B = (props: {
  children?: string
  color?: string
}) => {
  let fontColor = byDefault(props.color, googleColors.red400)
  return <strong style={{fontSize: 17, color: fontColor, fontWeight: 700}}>
    {props.children}
  </strong>
}
export default B