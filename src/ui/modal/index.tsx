import { FC } from "react";
import { Modal as MuiModal, Box, SxProps, Theme } from "@mui/material"
import { IModalProps } from "./model/modal.type";

const style: SxProps<Theme> = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: ({ spacing }) => spacing(4),
    maxWidth: 500,
    width: '100%',
    borderRadius: ({ radius }) => radius()
};

const Modal: FC<IModalProps> = ({ children, isOpen, handleToggle }) => {
    return (
        <MuiModal
            open={isOpen}
            onClose={() => handleToggle()}
            disableEnforceFocus
        >
            <Box sx={{ ...style }}>
                {children}
            </Box>
        </MuiModal>
    )
}

export default Modal;