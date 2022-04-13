import React from 'react'
import './Header.scss'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';

function Header({backButton}) {
  const navigate = useNavigate()
  return (
    <header className="header">
        {backButton ? (
            <IconButton onClick={()=>navigate(backButton)}>
              <ArrowBackIosIcon />
            </IconButton>
          ) :(
            <IconButton >
              <PersonIcon />
            </IconButton>) }
        <Link to="/">
          <WhatshotIcon className='header__logo'/>
        </Link>
        <Link to="/chats">
          <IconButton>
            <ForumIcon />
          </IconButton>
        </Link>
    </header>
  )
}

export default Header