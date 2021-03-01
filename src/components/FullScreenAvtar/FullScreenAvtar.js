import { useState, useEffect } from "react";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";


const StyledModal = Modal.styled`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
  `;

const Button = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: #003865;
  position:absolute;
  bottom:30px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
`;

function FancyModalButton({ showModalBollean, imagePath }) {
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        if (showModalBollean) {
            setIsOpen(true);
        }
    }, [showModalBollean, imagePath]);


    function toggleModal(e) {
        setOpacity(0);
        setIsOpen(!isOpen);
    }

    function afterOpen() {
        setTimeout(() => {
            setOpacity(1);
        }, 100);
    }

    function beforeClose() {
        return new Promise((resolve) => {
            setOpacity(0);
            setTimeout(resolve, 300);
        });
    }

    return (
        <div>
            <StyledModal
                isOpen={isOpen}
                afterOpen={afterOpen}
                beforeClose={beforeClose}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
                opacity={opacity}
                backgroundProps={{ opacity }}
            >
                <span><Img src={imagePath} /></span>
                <Button onClick={toggleModal}>Close</Button>
            </StyledModal>
        </div>
    );
}
const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

function FullScreenAvtar({ showModalBollean, imagePath }) {
    return (
        <ModalProvider backgroundComponent={FadingBackground}>
            <FancyModalButton showModalBollean={showModalBollean} imagePath={imagePath} />
        </ModalProvider>
    );
};

export default FullScreenAvtar; 