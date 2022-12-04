import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Table = ({ student, handleDelete }) => {
  return (
    <tr>
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
        <FaEdit size={28} style={{ color: "#FFC300" }} className="icon" />
      </td>
    </tr>
  );
};

export default Table;
