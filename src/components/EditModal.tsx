import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface EditModalProps {
  show: boolean;
  handleClose: () => void;
  handleSave: (editedData: EmployeeData) => void;
  initialData: EmployeeData | null;
}

interface EmployeeData {
  id: number;
  name: string;
  position: string;
}

function EditModal({
  show,
  handleClose,
  handleSave,
  initialData,
}: EditModalProps) {
  const [editedData, setEditedData] = useState<EmployeeData>(
    initialData || {
      id: 0,
      name: "",
      position: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    handleSave(editedData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={editedData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPosition">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter position"
              name="position"
              value={editedData.position}
              onChange={handleChange}
            />
          </Form.Group>
          {/* Add more form fields as needed */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveClick}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
