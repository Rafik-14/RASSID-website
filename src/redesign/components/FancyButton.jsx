export default function FancyButton({
  href,
  onClick,
  children,
  className = '',
  dark = false,
  ...props
}) {
  const content = (
    <>
      <span className="top-key" />
      <span className="text">{children}</span>
      <span className="bottom-key-1" />
      <span className="bottom-key-2" />
    </>
  );

  const classes = `fancy ${dark ? 'fancy-dark' : ''} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
}
