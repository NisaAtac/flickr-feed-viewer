import { useState } from "react";

export default (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const [fetchedData, setFetchedData] = useState([]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // handle submit by fetching data with the corresponding tag value
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    const fetchData = async () => {
      const response = await fetch(`/api?tag=${value}`);
      const responseData = await response.json();
      // update state of responseData
      setFetchedData(responseData);
    };
    fetchData();
  };
  return [value, handleChange, handleSubmit, fetchedData];
};
