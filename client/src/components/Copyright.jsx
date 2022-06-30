import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/loukansif/escape-game/">
          SLI & SYL
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

