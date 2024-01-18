// EmployeeTable.js
import { useState, useEffect } from "react";
import employeeData from "../../employeeData";
import { Table } from "react-bootstrap";
import Input from "../common/Input";
import EditModal from "../EditModal";

interface Employee {
  id: number;
  name: string;
  position: string;
}

function EmployeeTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedData, setSelectedData] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = () => {
      setEmployees(employeeData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.title = filter;
  }, [filter])

  const openEditModal = (data: any) => {
    setSelectedData(data);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setSelectedData(null);
    setShowEditModal(false);
  };

  const saveChanges = (editedData: any) => {
    // Handle the logic to save the edited data
    console.log("Saving changes:", editedData);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <h2>Employee list</h2>
        <form>
          <div className="col-3">
            <Input
              placeholder="Filter"
              type="text"
              value={filter}
              onChange={(value) => setFilter(value)}
            ></Input>
          </div>
        </form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>
                  <button
                    className="btn bg-black text-white"
                    onClick={() => openEditModal(employee)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        { showEditModal &&
          <EditModal
            show={showEditModal}
            handleClose={closeEditModal}
            handleSave={saveChanges}
            initialData={selectedData}
          />
        }
      </div>
    </>
  );
}

export default EmployeeTable;
