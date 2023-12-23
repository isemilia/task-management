import { Box, Typography } from "@mui/material";
import { FC } from "react";
import ContentWrapper from "../../ui/content-wrapper";

const Home: FC = () => {
    return (
        <Box>
            <ContentWrapper>
                <Typography component={'h1'} variant={'h4'}>Welcome to your TaskHub!</Typography>
                <Box sx={{ maxWidth: '750px', marginTop: ({ spacing }) => spacing(2), '& > *': { padding: ({ spacing }) => `${spacing(2)} 0` } }}>
                    <Typography>TaskHub is a minimalist task manager, designed as my personal project. It's developed using React, TypeScript, Redux, and Material-UI on the frontend, and powered by MongoDB, Node.js, and Express on the backend. No frills, just a straightforward tool for managing your tasks.</Typography>
                    <Typography component={'h3'} variant={'h5'}>Tech Stack:</Typography>
                    <Box sx={{ display: 'flex', gap: ({ spacing }) => spacing(2) }}>
                        <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
                        <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
                        <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="MUI" />
                    </Box>
                    <Box sx={{ display: 'flex', gap: ({ spacing }) => spacing(2) }}>
                        <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.JS" />
                        <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.JS" />
                        <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                    </Box>
                </Box>
            </ContentWrapper>
        </Box>
    )
}

export default Home;