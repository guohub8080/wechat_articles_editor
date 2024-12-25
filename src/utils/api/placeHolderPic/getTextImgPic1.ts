import collect from "collect.js";
import googleColors from "@assets/colors/googleColors.ts";
import chroma from "chroma-js"

const getTextImgPic1 = (w: number, h: number, text: string) => {
  const bgColor = collect(googleColors).random().toString()
  let textColor = "000000"
  if (chroma(bgColor).get("hsl.l") < 0.5) textColor = "FFFFFF"
  return `https://fakeimg.pl/${w}x${h}/${bgColor.replace("#","")}/${textColor}/?text=${text}&font=bebas`
}
export default getTextImgPic1