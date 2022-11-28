import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function AlCard() {
  const [id, setId] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //TODO: change then part of api request
  //TODO: resolve ERROR: endpoint expecting a map not a string. either change api or change input into a map
  const deleteMoneyPot = async () => {
    console.log(id);
    const res = await Axios.get(`http://localhost:5009/jump/${id}`);

    console.log(res.data);
    setModalDescription(res.data);
    handleOpen();
  };

  return (
    <div className="card card-shadow delete-gradient">
      <div>
        <br />
        <br />
        <h5>Jump</h5>
      </div>
      <div className="card-body card-shadow">
        <TextField
          id="standard-basic"
          label="Enter Operation"
          variant="standard"
          required
          size="small"
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
        <br />
        <br />
        <Button onClick={deleteMoneyPot} variant="contained">
          Submit
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box>
            <div className="modal-gradient">
              <h4>Instruction</h4>
              <h5>{modalDescription}</h5>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default AlCard;
