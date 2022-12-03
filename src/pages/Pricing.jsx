import { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Pricing = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const url = "http://localhost/kodegoPHP/server/connect2react/index.php";
    axios.get(url).then((response) => {
      setStudents(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let getData = new FormData();
    getData.append("firstName", firstName);
    getData.append("lastName", lastName);
    getData.append("title", title);
    getData.append("genre", genre);
    getData.append("function", "insert");
    axios({
      method: "POST",
      url: "http://localhost/kodegoPHP/server/connect2react/index.php",
      data: getData,
      config: 'Content-Type = "multipart/form-data"',
    })
      .then(function (response) {
        const url = "http://localhost/kodegoPHP/server/connect2react/index.php";
        axios.get(url).then((response) => {
          setStudents(response.data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    setFirstName("");
    setLastName("");
    setTitle("");
    setGenre("");
  };

  const handleDelete = (e) => {
    let getData = new FormData();
    getData.append("author_id", e.currentTarget.id);
    getData.append("function", "delete");
    axios({
      method: "POST",
      url: "http://localhost/kodegoPHP/server/connect2react/index.php",
      data: getData,
      config: 'Content-Type = "multipart/form-data"',
    })
      .then(function (response) {
        const url = "http://localhost/kodegoPHP/server/connect2react/index.php";
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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="form-control"
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="form-control"
        />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
        <input
          type="text"
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
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
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.author_id}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.title}</td>
                <td>{student.genre}</td>
                <td className="text-center">
                  <MdDelete
                    id={student.author_id}
                    onClick={handleDelete}
                    className="icon"
                    size={30}
                    style={{ color: "#c4302b" }}
                  />
                </td>
                <td className="text-center">
                  <FaEdit
                    size={28}
                    style={{ color: "#FFC300" }}
                    className="icon"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;
