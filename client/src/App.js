import List from "./components/List";
import Form from "./components/Form";

import React, { useState, useEffect } from "react";
import people from "./api/people";

const App = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState("false");
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const onFormSubmit = (name) => {
    people.post("http://localhost:5000/people", name);
    console.log(name);
    setNumberOfPeople(numberOfPeople + 1);
  };

  useEffect(() => {
    const getPeople = async () => {
      setIsLoading("true");
      const response = await people.get("/people");
      setList(response.data);
      console.log(list);
    };
    getPeople();
    setIsLoading("false)");
    setNumberOfPeople(list.length);
  }, [isLoading, numberOfPeople]);

  return (
    <div className="container">
      <Form onFormSubmit={onFormSubmit} />
      <List list={list} />
    </div>
  );
};

export default App;
