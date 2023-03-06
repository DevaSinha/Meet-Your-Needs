import React from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate, } from 'react-router';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/system';
import '../Css/layout.css'
import { Divider } from '@mui/material';



function Navigation() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const isLoggedIn = localStorage.getItem('user') !== null;
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate("/login");
    };

    return (
        <div className='class="d-flex p-2"'>
            <Box sx={{ flexGrow: 1, height: '90vh' }}
                style={{
                    float: 'left',
                    paddingLeft: '20px',
                    paddingRight: '30px',
                    paddingTop: '50px',
                    bgcolor: '#5fe5f5',
                    marginRight: '20px'
                }}>
                <Stack spacing={2}>
                    <Item><Nav.Link href="/">Home</Nav.Link></Item>

                    <Item><Nav.Link href="/about">About</Nav.Link></Item>
                    <Item><Nav.Link href="/contact">Contact</Nav.Link></Item>
                    {isLoggedIn ?
                        <Item><Nav.Link onClick={handleLogout}>Logout</Nav.Link></Item> :
                        <Item><Nav.Link href="/login">Login</Nav.Link></Item>}
                </Stack>

            </Box>
            <Divider orientation="vertical">
            </Divider>

        </div>
    );
}

export default Navigation;
