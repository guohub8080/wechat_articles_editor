import byDefault from "@/utils/common/byDefault.ts";
import {useEffect, useRef} from "react";

const ExImgDesc = (props: { src?: string, description?: string | string[], color?: string }) => {
  const src = byDefault(props.src, "https://ts1.cn.mm.bing.net/th/id/R-C.57384e4c2dd256a755578f00845e60af?rik=uy9%2bvT4%2b7Rur%2fA&riu=http%3a%2f%2fimg06file.tooopen.com%2fimages%2f20171224%2ftooopen_sy_231021357463.jpg&ehk=whpCWn%2byPBvtGi1%2boY1sEBq%2frEUaP6w2N5bnBQsLWdo%3d&risl=&pid=ImgRaw&r=0"
  )
  const commonRadius = 8
  let imgBtmRadius = 0
  if (typeof props.description === "undefined") imgBtmRadius = 8
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);
  useEffect(() => {
    if (imgRef) {
      imgRef.current.style.setProperty("width", "100%", "important")
      imgRef.current.style.setProperty("max-width", "550px", "important")
      imgRef.current.style.setProperty("object-fit", "contain", "important")
    }
    if (imgRef2) {
      imgRef2.current.style.setProperty("min-width", "100%", "important")
      imgRef2.current.style.setProperty("max-width", "100%", "important")
      imgRef2.current.style.setProperty("width", "100%", "important")
      imgRef2.current.style.setProperty("object-fit", "contain", "important")
    }
  }, [])

  const UnderImg = () => {
    if (typeof props.description === "undefined") {
      return
    }
    if (typeof props.description === "string") {
      return <section style={{
        paddingTop: 5,
        paddingBottom: 10,
        border: "1px #d1d5db solid",
        borderRadius: commonRadius,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTop: 0
      }}>
        <DescriptionOne description={props.description}
                        color={props.color}/>
      </section>
    }
    if (props.description instanceof Array) {
      return <section style={{
        paddingTop: 5,
        paddingBottom: 10,
        border: "1px #d1d5db solid",
        borderRadius: commonRadius,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTop: 0
      }}>
        {props.description.map(
          (x, y) => <DescriptionOne key={y}
                                    description={x}
                                    color={props.color}/>)}
      </section>
    }
  }
  return <section>
    <section style={{
      width: "100%",
      paddingLeft: 15,
      paddingRight: 15,
      marginTop: 15,
      marginBottom: 15,
      marginLeft: "auto",
      marginRight: "auto"
    }}>
      <section ref={imgRef} style={{
        borderRadius: commonRadius,
        overflow: "hidden",
        backgroundColor: "white",
        boxShadow: "0 0 15px #efefef",
        margin: "0 auto"
      }}>
        <section style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: 0,
          margin: 0
        }}>
          <img src={src} referrerPolicy="no-referrer" alt=""
               ref={imgRef2}
               style={{
                 width: "100%",
                 objectFit: "contain",
                 margin: 0,
                 padding: 0,
                 height: "fit-content",
                 borderTopRightRadius: commonRadius,
                 borderTopLeftRadius: commonRadius,
                 borderBottomLeftRadius: imgBtmRadius,
                 borderBottomRightRadius: imgBtmRadius,
               }}/>
        </section>
        {/*描述框*/}
        <UnderImg/>
      </section>
    </section>
  </section>
}

const DescriptionOne = (props: { description: string, color?: string }) => {
  return <section style={{
    width: "100%",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 1.3,
    color: byDefault(props.color, "#5d5d5d"),
    paddingTop: 3,
    paddingLeft: 10,
    paddingRight: 10
  }}>
    {props.description}
  </section>
}
export default ExImgDesc