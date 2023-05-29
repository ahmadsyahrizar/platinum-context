//localStorage & sessionStorage
// localStorage.getItem("item2") => get data from browser storage
// localStorage.setItem("item2") => set/save data from browser storage
// localStorage.removeItem("item2") => remove/delete data from browser storage
// localStorage.clear() => delete all browser storage data

// sessionStorage.getItem("item2") => get data from browser storage
// sessionStorage.setItem("item2") => set/save data from browser storage
// sessionStorage.removeItem("item2") => remove/delete data from browser storage
// sessionStorage.clear() => delete all browser storage data

// USIA PENYIMPANANNYA/ KAPAN DATA TERSEBUT HILANG DI BROWSER STORAGE
// local storage => akan terus ada selamanya, sampai kita sendiri yg hapus
// session storage => hilang ketika tab atau browser kita close.

//
// input data
// read data
// delete data

import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const TODO_LIST = "todoList";

const TodoAppWebStorage = () => {
  const getlocalStorage = sessionStorage.getItem(TODO_LIST);
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const handleOnChange = ({ target }) => {
    setTodo(target.value);
  };

  const handleSubmit = () => {
    // when submitted, store to web storage
    if (getlocalStorage) {
      const data = JSON.parse(getlocalStorage); // merubah data json ke object js
      const newData = [...data, todo]; //["ngepel", "nyapu"] berubah menjadi ] ["ngepel", "nyapu", "olahraga"]
      setList(newData); //nyimpen data di state kita
      sessionStorage.setItem(TODO_LIST, JSON.stringify(newData)); // nyimpen data ke local storage dalam bentuk JSON
    } else {
      sessionStorage.setItem(TODO_LIST, JSON.stringify([todo])); //[olahraga]
    }
  };

  const handleOnDelete = (val) => {
    const data = JSON.parse(getlocalStorage);
    const newData = data.filter((valName) => valName !== val);
    setList(newData);
    sessionStorage.setItem(TODO_LIST, JSON.stringify(newData));
  };

  const handleDeleteAll = () => {
    sessionStorage.removeItem(TODO_LIST);
    setList([]);
  };

  useEffect(()=>{
    // to create cookie;
    document.cookie = "userIBinarApp=123213412341234213423;max-age=60"
  },[]);

  useEffect(() => {
    if (getlocalStorage) {
      const data = JSON.parse(getlocalStorage); // merubah data JSON local storage ke object js
      setList(data); // nyimpen data di state kita
    }
  }, [getlocalStorage]);

  return (
    <Container style={{ margin: "5em" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Input Your Activity</Form.Label>
        <Form.Control
          value={todo}
          onChange={handleOnChange}
          type="text"
          placeholder="Input your list here"
        />
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>

      <div>
        <div>LIST</div>
        {list.map((val, idx) => {
          return (
            <Card
              key={idx}
              style={{
                padding: "1em",
                margin: "1em 0",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div>{val}</div>
              <Button
                onClick={() => handleOnDelete(val)}
                size="sm"
                variant="danger"
                style={{ width: "100px" }}
              >
                Delete
              </Button>
            </Card>
          );
        })}
      </div>
      <Button onClick={handleDeleteAll} variant="danger" size="small">
        Delete all Todo List
      </Button>
    </Container>
  );
};

export default TodoAppWebStorage;
