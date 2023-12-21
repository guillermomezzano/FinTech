const HeadingTitle = ({ title, subtitle, rightContent }) => {
  return (
    <div className="cursor-pointer bg-gray-100 shadow-md px-8 py-6 -mx-6 -mt-6 mb-6 justify-between items-center flex">
      <h1 className="text-3xl font-bold uppercase">{title}</h1>
      {subtitle && <p className="text-lg">{subtitle}</p>}
      {rightContent}
    </div>
  );
};

export default HeadingTitle;
