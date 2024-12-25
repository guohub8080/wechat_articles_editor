import ExSection from "@/components/frames/ExSection.tsx";
import QrCode from "antd/es/qr-code";
import googleColors from "@/assets/colors/googleColors.ts";

const FootExample = () => {
  return (
    <section>
      <ExSection>
        <section style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
          <section style={{marginBottom: 10, color: googleColors.blue600, fontSize: 12}}>
            更多资讯请关注
          </section>
          <QrCode value={"guohub.top"} size={120}/>
          <section style={{marginTop: 10, fontSize: 12, color: googleColors.blue600}}>
            guohub.top
          </section>
        </section>
      </ExSection>
    </section>
  )
}

export default FootExample