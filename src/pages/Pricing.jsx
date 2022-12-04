import { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

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
      <h1>Student's List</h1>
      <form className="input-group container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={inputs.firstName || ""}
          onChange={handleChange}
          className="form-control"
        />
        <input
          type="text"
          name="lastName"
          value={inputs.lastName || ""}
          onChange={handleChange}
          className="form-control"
        />
        <input
          type="text"
          name="title"
          value={inputs.title || ""}
          onChange={handleChange}
          className="form-control"
        />
        <input
          type="text"
          name="genre"
          value={inputs.genre || ""}
          onChange={handleChange}
          className="form-control"
        />
        <button type="submit" className="btn btn-outline-secondary">
          Submit
        </button>
      </form>
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
            <tr key={student.author_id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.title}</td>
              <td>{student.genre}</td>
              <td className="d-flex gap-3 text-center">
                <MdDelete
                  id={student.author_id}
                  onClick={handleDelete}
                  className="icon"
                  size={30}
                  style={{ color: "#c4302b" }}
                />
                <FaEdit
                  size={28}
                  style={{ color: "#FFC300" }}
                  className="icon"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;
