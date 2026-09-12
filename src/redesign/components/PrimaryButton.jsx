export default function PrimaryButton({
  href,
  onClick,
  children,
  icon: Icon,
  className = '',
  size = 'md',
  dark = false,
  variant = 'primary', // 'primary' | 'outline'
  ...props
}) {
  const sizeClass = size === 'sm' ? 'btn-sm' : '';
  const variantClass = variant === 'outline' ? 'btn-rassid-outline' : 'btn-rassid-lime';
  const classes = `${variantClass} ${sizeClass} ${dark ? 'dark-canvas' : ''} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon className="size-4 stroke-[2.5] rtl:rotate-180" />}
    </>
  );

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
