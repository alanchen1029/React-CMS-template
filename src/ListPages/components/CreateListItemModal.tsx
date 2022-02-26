import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";

import { Food } from "../../types/demoTable.model";
import { ListItemForm } from ".";

interface IProps
{
  getNewCreatedItem: (newItem: Food) => void;
}

export const CreateListItemModal = ({ getNewCreatedItem }: IProps): JSX.Element =>
{
  const [openCreateListItemModal, setOpenCreateListItemModal] = useState(false);

  const handleModalOpen = () =>
  {
    setOpenCreateListItemModal(true);
  }

  const handleModalClose = () =>
  {
    setOpenCreateListItemModal(false);
  }

  const createItem = (values: Food) =>
  {
    //do api request here

    // if succeed
    getNewCreatedItem(values);
    handleModalClose();
  }

  return (
    <>
      <Button variant="outlined" onClick={handleModalOpen}>Create Item</Button>
      <Modal
        open={openCreateListItemModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="cms-modal"
      >
        <Fade in={openCreateListItemModal}>
          <div className="modal-panel">
            <div className="panel-header">
              Create List Item Modal
            </div>
            <div className="panel-body">
              <ListItemForm
                onSubmit={createItem}
                cancelSubmit={handleModalClose}
              />
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  )
}