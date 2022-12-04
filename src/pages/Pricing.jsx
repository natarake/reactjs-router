import { useState, useEffect } from "react";
import axios from "axios";
import TableBody from "../components/TableBody";
import Input from "../components/Input";

const Pricing = () => {
  const [inputs, setInputs] = useState([]);
  const [students, setStudents] = useState([]);
  const url = "http://localhost/kodegoPHP/server/connect2react/index.php";

  useEffect(() => {
    axios.get(url).then((response) => {
      setStudents(response.data);
    });
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let getData = new FormData();
    getData.append("firstName", inputs.firstName);
    getData.append("lastName", inputs.lastName);
    getData.append("title", inputs.title);
    getData.append("genre", inputs.genre);
    getData.append("function", "insert");
    axios({
      method: "POST",
      url: url,
      data: getData,
    })
      .then(function () {
        axios.get(url).then((response) => {
          setStudents(response.data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    setInputs("");
  };

  const handleDelete = (e) => {
    let getData = new FormData();
    getData.append("author_id", e.currentTarget.id);
    getData.append("function", "delete");
    axios({
      method: "POST",
      url: url,
      data: getData,
    })
      .then(function () {
        axios.get(url).then((response) => {
          setStudents(response.data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "500px",
      }}
    >
      <Input
        inputs={inputs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <table className="table container">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <TableBody
              student={student}
              key={student.author_id}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;
