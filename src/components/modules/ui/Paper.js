const Paper = ({ children, ...props }) => {
  return (
    <div className="bg-white shadow-md p-6" {...props}>
      {children}
    </div>
  );
};

export default Paper;
