import { useState } from "react";

export default (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // handle submit by fetching data with the corresponding tag value
  const handleSubmit = (e, setData) => {
    if (e) {
      e.preventDefault();
    }
    const fetchData = async () => {
      const response = await fetch(`/api?tag=${value}`);
      const responseData = await response.json();
      // update state of responseData
      setData(responseData);
    };
    fetchData();
  };
  return [value, handleChange, handleSubmit];
};
