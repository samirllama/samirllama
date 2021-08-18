const BaseCta = ({
children,
tag = button,
}) => {
const Tag = tag;

return (
  <Tag 
  className={classNames('nav-bar',className)}
  {...otherProps}
  >
  {children}
  </Tag>
)
}
