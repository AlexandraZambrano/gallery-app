import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Modal, Header, Button } from 'semantic-ui-react';
import { FaPen, FaTrash, FaRegWindowClose } from 'react-icons/fa';
import './modal.css'

const ModalComponent = ({
    open, 
    setOpen, 
    img, 
    title, 
    id, 
    handleDelete
}) => {
    const navigate = useNavigate();

  return (
    <div>
      <Modal 
      onClose={() => setOpen(false)} 
      onOpen={() => setOpen(true)} 
      open={open}>

        <div className='close-btn-modal-div'>
          <button className='close-modal-btn' onClick={() => setOpen(false)}>X</button>
        </div>

        <div className='modal-action-btns'>
            <Button color='transparent' icon='checkmark' onClick={() => handleDelete(id)} ><FaTrash /></Button>
            <Button color='transparent' onClick={() => navigate(`/update/${id}`)}><FaPen /></Button>
        </div>

        {/* <Modal.Header>Picture Detail</Modal.Header> */}
        <h2 className='picture-title-modal'>{title}</h2>
        {/* <Modal.Content image> */}

            <div className='image-uploaded-detail'>
                <img src={img} alt={title} style={{width:'300px'}} />
            </div>
            {/* <Image size='medium' src={img} wrapped /> */}
            {/* <Modal.Description> */}
                {/* <h3>{title}</h3> */}
            {/* </Modal.Description> */}
        {/* </Modal.Content> */}
   
        {/* <Modal.Actions> */}

        {/* </Modal.Actions> */}
  
      </Modal>
    </div>
  )
}

export default ModalComponent
