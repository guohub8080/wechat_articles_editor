import cssPresets from "@/assets/styles/cssPresets.ts";
import {css} from "@emotion/react";
import colorLogo from "@/assets/svgs/logoSvg/colorLogo.svg";
import googleColors from "@/assets/colors/googleColors.ts";
import {Button} from "antd";

const About = () => {
  return (<div css={about_css}>
    <div className="logo_frame">
      <div className="logo">
        <img src={colorLogo} alt=""/>
      </div>
      <div className="author_name">@Guohub8080</div>
    </div>
    <Button
      style={{width: 160, marginTop: 5}}
      onClick={() => window.open("https://github.com/guohub8080")}
      type="primary">Github主页</Button>
    <Button
      style={{marginTop: 10, width: 160}}
      onClick={() => window.open("https://github.com/guohub8080/wechat_articles_editor")}
      type="primary">项目主页</Button>
  </div>)
}

export default About;

const about_css = css({
  width: "100%",
  height: "100%",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "& .logo_frame": {
    backgroundColor: googleColors.blueGray50,
    width: 160,
    height: 160,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    userSelect: "none",
    marginBottom: 10,
    marginTop: 20,
  },
  "& .logo": {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    ...cssPresets.flexCenter,

    "& img": {
      display: "block",
      width: 60,
      height: 60,
      filter: "drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.2))",
    }
  },
  "& .author_name": {
    fontSize: 18,
    marginLeft: "auto",
    marginRight: "auto",
    color: googleColors.blue800,
  }
})