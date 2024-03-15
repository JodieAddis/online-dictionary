interface ParagraphProps {
  content: string;
  css: string;
}

const Typographies = ({ content, css }: ParagraphProps) => (
  <p className={css}>{content}</p>
);

export default Typographies;
