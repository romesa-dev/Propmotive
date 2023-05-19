import { useHeadingStyle, useParagraphStyle } from "./text.style";
import React from 'react';

export function SubHeading({ children }) {
  const {
    classes: { subHeading, text, outline },
  } = useHeadingStyle();
  return (
    <div className={subHeading}>
      <div className={text}>{children}</div>
      <div className={outline}></div>
    </div>
  );
}


export function Paragraph({ inputString, lineBreaks = '\n\n' }) {
  const paragraphs = inputString.split(lineBreaks);
  const {
    classes: { paragraphStyle },
  } = useParagraphStyle();
  return (
    <div className={paragraphStyle}>
    {paragraphs.map((paragraph, index) => (
      <React.Fragment key={index}>
        {paragraph}
        <br />
        <br />
      </React.Fragment>
    ))}
  </div>
  );
}

