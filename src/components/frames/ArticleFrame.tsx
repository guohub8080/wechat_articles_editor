import googleColors from "@/assets/colors/googleColors.ts";

const ArticleFrame = (props: {
  children: any,
}) => {
  return (
    <section style={{
      padding: 2,
      borderRadius: 8,
      border: "1px solid #d9d9d9",
      backgroundColor: googleColors.blueGray50,
      paddingTop: 25,
      paddingBottom: 25, marginBottom: 25
    }}>
      {props.children}
    </section>
  )
}

export default ArticleFrame