import React, { useState } from "react";
import { Modal, Button } from "antd";

const ModalContainer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Next Question
      </Button>
      <Modal title="Mood: Respect:" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={800}>
        <p>Test </p>
      </Modal>
    </>
  );
};
export default ModalContainer;
