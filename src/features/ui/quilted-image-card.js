import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageCard() {

  /* Using Media Query */
  const theme = useTheme();
  const matchDownXs = useMediaQuery(theme.breakpoints.down('xs'));
  const matchDownSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownLg = useMediaQuery(theme.breakpoints.down('lg'));
  const matchDownXl = useMediaQuery(theme.breakpoints.down('xl'));

  const responseCols = (item) => {
    // 1 보다 크고, xs 라면 한줄로 만든다.
    if(item.cols > 1) {
      if(matchDownSm) {
        const newCols = 5;
        return newCols;
      }
      else {
        return item.cols;
      }
    }
    // 1 이거나, 없는 값이고, xs 라면
    else if((item.cols === 1 || item.cols === undefined)){
      if(matchDownSm) {
        const newColumn = 5;
        return newColumn;
      }
    }
  } 
  const responseRows = (item) => {
    
  } 

  return (
    <ImageList
      sx={{ width: '100%', maxWidth: '900px', height: 800 }}
      variant='quilted'
      cols={5}
      rows={10}
      rowHeight={121}
    >
      {itemData.map((item, idx) => ( 
       
        <ImageListItem
          key={item.img}
          cols={responseCols(item)}
          rows={responseRows(item)}
          sx={{minHeight : '200px'}}
        >
          <img
            {...srcset(item.img, 225, item.rows, item.cols)}
            alt={item.title}
            loading='lazy'
            style={{ borderRadius: '10px', position: 'relative' }}
          />
          <Button
            variant='contained'
            sx={{
              margin: '10px',
              position: 'absolute ',
              zIndex: '2',
              top: 0,
              left: 0,
            }}
          >
            {idx}
          </Button>
          <ImageListItemBar
            title={item.title}
            subtitle={
              <Box sx={{ display: 'flex' }}>
                <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
                <Typography>196 Activities</Typography>
              </Box>
            }
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 1,
    cols: 4,
  },
  {
    img: 'https://images.pexels.com/photos/9318388/pexels-photo-9318388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Burger',
    rows: 1,
    cols : 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
    rows: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    rows: 2,
    cols: 2,
  },

  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    cols: 1,
    rows: 1,
    height : '170px !important'
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 1,
    height : '170px !important'
  },
];
