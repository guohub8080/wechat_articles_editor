import logo from "@/assets/svgs/logoSvg/colorLogo.svg";
import googleColors from "@/assets/colors/googleColors.ts";

const HeadExample = () => {
  const fontSize = 12
  const iconSize = 15
  return <section style={{width: "100%", display: "flex", alignItems: "start", marginBottom: 8}}>

    <section>
      <img src={logo} style={{width: iconSize, height: iconSize, marginRight: 5,marginTop:3}}
           referrerPolicy="no-referrer" alt=""/>
    </section>
    <section style={{fontSize: fontSize, color: googleColors.blue400, paddingTop: 3}}>
      <span style={{color: "gray", fontSize: fontSize}}>点击上方蓝字关注</span>
      <span style={{fontSize: fontSize}}>guohub8080</span>
    </section>

  </section>
}
export default HeadExample