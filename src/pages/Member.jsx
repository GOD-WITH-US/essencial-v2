import React from 'react';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import MemberCard from './../components/Main/Contents/MemberCard';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import Sidebar from '../components/Main/Contents/Sidebar';

const Member = () => {
    // Récupération de l'ID de l'utilisateur connecté à l'aide de useSelector
    const loggedInUserId = useSelector((state) => state.userReducer?._id);

    // Utilisez useSelector pour accéder directement aux données d'utilisateurs
    const usersData = useSelector((state) => state.usersReducer);

    // Vérifier si loggedInUserId est défini et si usersData est un tableau
    if (!loggedInUserId || !Array.isArray(usersData)) {
        return null;
    }

    // Filtrer les utilisateurs pour exclure l'utilisateur connecté
    const filteredUsers = usersData.filter(
        (user) => user._id !== loggedInUserId
    );

    return (
        <Grid container direction="column" style={{ minHeight: '100vh' }}>

            <Grid item>
                <Header />
            </Grid>

            <Grid container item alignItems="stretch" style={{ flexGrow: 1 }}>

                <Grid item xs={2} sx={{ backgroundColor: '#a8c6b4' }}>
                    <Sidebar />
                </Grid>

                <Grid item xs display="flex" flexDirection="column" style={{ flexGrow: 1 }}>
                    <Grid item flexGrow="1" style={{ overflow: 'auto' }}>
                        <Grid container spacing={1}>
                            {filteredUsers.map((user, index) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} marginTop={5} key={index}>
                                    <MemberCard
                                        user={user}
                                        sx={{
                                            width: '100%',
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            <Grid item sx={{ width: '100%' }}>
                <Footer />
            </Grid>

        </Grid>
    );
};

export default Member;
