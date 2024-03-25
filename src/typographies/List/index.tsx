interface ListProps {
  key?: number;
  onclick?: () => void;
  content: string;
  css: string;
}

const Typographies = ({ content, css, onclick }: ListProps) => (
  <li className={css} onClick={onclick}>
    {content}
  </li>
);

export default Typographies;
