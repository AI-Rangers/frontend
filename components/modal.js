import { Fragment, useState } from 'react'
// reactstrap components
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const ModalDialog = ({ modal, setModal, order, handleSubmit}) => {
  // const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle} >
        下單
      </Button>
      {/* <Modal isOpen={modal} toggle={toggle} {...args}> */}
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>你的訂單</ModalHeader>
        <ModalBody>
          <div>商品 : {order.item}</div>
          <div>單價 : ${order.price} </div>
          <div>數量 : {order.qty}</div>
          <div>總價 : ${order.total}</div>
          <div>目前剩餘金額 : {order.money_before}</div>
          <div>預計剩餘金額 : {order.money_after}</div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            確認支付
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            取消
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default function Modal1({ isOpen, setIsOpen }) {
  // let [isOpen, setIsOpen] = useState(true)
 
  return (<>

  </>)
}


    // <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
    //   <Dialog.Panel>
    //     <Dialog.Title>Deactivate account</Dialog.Title>
    //     <Dialog.Description>
    //       This will permanently deactivate your account
    //     </Dialog.Description>

    //     <p>
    //       Are you sure you want to deactivate your account? All of your data
    //       will be permanently removed. This action cannot be undone.
    //     </p>

    //     <button onClick={() => setIsOpen(false)}>Deactivate</button>
    //     <button onClick={() => setIsOpen(false)}>Cancel</button>
    //   </Dialog.Panel>
    // </Dialog>