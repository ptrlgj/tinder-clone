import React from 'react'
import './Header.scss'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { IconButton } from '@mui/material';


function Header() {
  return (
    <header className="header">
        <IconButton>
          <PersonIcon />
        </IconButton>
        <WhatshotIcon className='header__logo'/>
        <IconButton>
          <ForumIcon />
        </IconButton>
    </header>
  )
}

export default Header