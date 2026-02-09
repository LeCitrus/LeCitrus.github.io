import {
    useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
    Image, Text
  } from '@chakra-ui/react'

const ImageComponent = ({
    src, title, description
}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
        <Image 
            transition="transform 0.3s ease-in-out"
            _hover={{ 
                cursor: "pointer",
                transform: "scale(1.02)"
            }} 
            src={src} 
            onClick={onOpen}
        />
        <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset='scale' size="5xl" scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{description}</Text>
            <Image src={src}></Image>
          </ModalBody>
        </ModalContent>
        <ModalFooter />
      </Modal>
      </>
    );
};
export default ImageComponent;