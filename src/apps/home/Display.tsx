import {css} from "@emotion/react";
import favicon from "@/assets/svgs/logoSvg/favicon.svg"
const Display = () => {
    return <div css={display_css}>
        <div>
            <div >
                <img src={favicon} alt="" style={{width:80}}/>
            </div>
        </div>
    </div>
}
const display_css = css({
    minWidth:0,
    backgroundColor: "white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
})
export default Display