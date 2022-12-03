import { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";

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
      // console.log(response.data);
    });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost/kodegoPHP/server/connect2react/index.php")
  //     .then((response) => response.json())
  //     .then((data) => setStudents(data))
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  const handleSubmit = () => {
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
    });
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
        height: "500px",
      }}
    >
      <h1>Student's List</h1>
      <form action="">
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Title</th>
            <th>Genre</th>
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
                <MdDelete id={student.author_id} onClick={handleDelete} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;
