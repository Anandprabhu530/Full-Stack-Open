/* eslint-disable react/prop-types */

const Total = (props) => {
  const { parts } = props;
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <b>Total number of courses is {total}</b>;
};

export default Total;
