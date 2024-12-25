import {useNavigate} from "react-router-dom";
import {css} from "@emotion/react";
import collect from "collect.js";
import router from "@/utils/router";


const ArticleList = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const routeMap = collect(router.routes).where("path", "/").first()?.children as any
  const navigate = useNavigate()
  const handleClick = (targetPath: string) => navigate(targetPath)

  return <div css={articleFrame_css}>
    {routeMap?.map((x, y) => {
      return <div key={y} onClick={() => handleClick(x.path)}
                  css={eachArticle_css}>
        {`${x?.path.toString() as any}`}
      </div>
    })}
  </div>
}
export default ArticleList

const articleFrame_css = css({
  // backgroundColor: "gray",
  height: "calc(100vh - 70px)",
  overflowY: "auto",
})
const eachArticle_css = css({
  cursor: "pointer",
  userSelect: "none",
  height: 40,
  display: "flex",
  alignItems: "center",
  paddingLeft: 10,
  borderBottomColor: "#c0d7ea",
  borderBottomStyle: "solid",
  borderBottomWidth: 1,

  "&:hover": {
    backgroundColor: "#EFEFEF"
  }
})