import React from 'react'
import {FaTimes} from 'react-icons/fa';
import { useGlobalContext } from './context';
function Modal() {
    const {isModalOpen,closeModel} = useGlobalContext()
  return (
    <div className={`${isModalOpen?"modal-overlay show-modal":"modal-overlay "}`}>
        <div className="modal-container">
            <h3>modal content</h3>
            <button className="colose-modal-btn" onClick={closeModel}>
                <FaTimes/>
            </button>
        </div>
        hi
    </div>
  )
}

export default Modal