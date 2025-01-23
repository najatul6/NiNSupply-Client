const DateComponent = ({ createdAt }) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-CA");
  return <span>{formattedDate}</span>;
};

export default DateComponent;
