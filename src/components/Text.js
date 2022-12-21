import "./Text.css";

const Text = ({
  children,
  block,
  paragraph,
  size,
  strong,
  underline,
  delete: del,
  mark,
  code,
  color,
  ...props
}) => {
  const Tag = block ? "div" : paragraph ? "p" : "span";
  //태그를 동적으로 사용하기

  const fontStyle = {
    fontWeight: strong ? "bold" : undefined,
    fontSize: typeof size === "number" ? size : undefined,
    textDecoration: underline ? "underline" : undefined,
  };

  if (mark) {
    children = <mark>{children}</mark>;
  }
  if (code) {
    children = <code>{children}</code>;
  }
  if (del) {
    children = <del>{children}</del>;
  }

  return (
    <Tag
      className={typeof size === "string" ? `Text--size-${size}` : undefined}
      style={{ ...props.style, ...fontStyle }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Text;
