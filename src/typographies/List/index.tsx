interface ListProps {
  key?: number;
  content: string;
  css: string;
}

const Typographies = ({ content, css }: ListProps) => (
  <li className={css}>{content}</li>
);

export default Typographies;
