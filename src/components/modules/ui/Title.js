const Title = ({ children, className, variant = "h1", classTitle }) => {
  const renderHeading = (styles, variant, content) => {
    const headingMap = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
    };

    const HeadingTag = headingMap[variant] || "h1";

    return <HeadingTag className={styles}>{content}</HeadingTag>;
  };

  return renderHeading(
    `${classTitle || "title"} ${className}`,
    variant,
    children
  );
};

export default Title;
