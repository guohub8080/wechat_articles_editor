import React from "react";
import HeadExample from "@/components/heads/HeadExample.tsx";
import ExImgDesc from "@/components/frames/ExImgDesc.tsx";
import P from "@/components/docs/P.tsx";
import ArticleFrame from "@/components/frames/ArticleFrame.tsx";
import FootExample from "@/components/foots/FootExample.tsx";
import B from "@/components/docs/B.tsx";

export default function () {

  return (
    <section style={{fontSize: 25}}>
      <HeadExample/>
      <ArticleFrame>
        <P>这是一个使用React作为编辑语言的编辑器的Demo。</P>
        <P>点击悬浮窗格或者<B>Ctrl + C</B>进行复制源码。</P>
        <P textIndent={0}>默认段落是首行缩进2字符，你也可以设置无缩进。</P>
        <P align={"center"}>可以居中排列。</P>
        <P align={"right"}>可以右边排列。</P>
        <P>一个示例图片：</P>
        <ExImgDesc/>
        <P>带有标题的图片：</P>
        <ExImgDesc description={"这是一个描述"}/>
        <P>只要会使用React，便可以进行无限拓展。</P>
      </ArticleFrame>
      <ArticleFrame>
        <FootExample/>
      </ArticleFrame>
    </section>
  )
}

