const Container = ({ children }) => {
  return <div className="max-w-[1440px] w-full mx-auto">{children}</div>;
};

Container.propTypes = {
    children: PropTypes.node,
}

export default Container;
