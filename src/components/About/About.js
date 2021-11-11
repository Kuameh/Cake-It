import React from "react"
import { useAboutQuery } from "../../hooks/useAboutQuery"
import { AboutImage, AboutWrapper } from "./About.styles"

const About = () => {
  const data = useAboutQuery()
  //   console.log(data)

  return (
    <AboutWrapper>
      <AboutImage image={data.wpPage.featuredImage.node.localFile.publicURL} />
      <div
        className="about-text"
        dangerouslySetInnerHTML={{
          __html: data.wpPage.content,
        }}
      />
    </AboutWrapper>
  )
}

export default About
