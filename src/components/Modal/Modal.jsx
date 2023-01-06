import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'semantic-ui-react';
import { FaPen, FaTrash} from 'react-icons/fa';
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

        <h2 className='picture-title-modal'>{title}</h2>

            <div className='image-uploaded-detail'>
                <img src={img} alt={title} style={{width:'300px'}} />
            </div>
      </Modal>
    </div>
  )
}

export default ModalComponent
