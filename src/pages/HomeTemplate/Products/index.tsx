import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
  Stack,
  styled,
  Typography
} from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import Breadcrumb from 'src/components/Breadcrumb';
import Ba1 from '../../../assets/img/background/collection.jpg';
import './style.scss';

const Item = styled(Box)(({ theme }) => ({
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
}));

const SortingBox = () => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl variant='standard' sx={{ m: 1, minWidth: 130 }}>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value=''>Default sorting</MenuItem>
        <MenuItem value='best-selling'>Best Selling</MenuItem>
        <MenuItem value='alphabetically'>Alphabetically, A-Z</MenuItem>
        <MenuItem value='price-high-low'>Price, high to low</MenuItem>
        <MenuItem value='price-low-high'>Price, low to high</MenuItem>
        <MenuItem value='date-old-new'>Date, old to new</MenuItem>
        <MenuItem value='date-new-old'>Date, new to old</MenuItem>
      </Select>
    </FormControl>
  );
};

const DrawerMenu = () => {
  const [value, setValue] = useState<number[]>([20, 60]);

  const marks = [
    {
      value: 0,
      label: `$${value[0]}`,
    },
    {
      value: 100,
      label: `$${value[1]}`,
    },
  ];

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  function valuetext(value: number) {
    return `${value}°C`;
  }

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box>
      <Divider sx={{ fontWeight: 500, letterSpacing: '2px' }} textAlign='left'>
        CATEGORIES
      </Divider>
      <div className='mui-accordion'>
        <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Laptop</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary='Asus' />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary='Acer' />
            </ListItemButton>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Phone</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary='Apple' />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary='Samsung' />
            </ListItemButton>
          </AccordionDetails>
        </Accordion>
      </div>
      <Divider sx={{ fontWeight: 500, letterSpacing: '2px' }} textAlign='left'>
        PRICE
      </Divider>
      <Box sx={{ width: 300, margin: '10px auto' }}>
        <Slider
          aria-label='Custom marks'
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay='auto'
          marks={marks}
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
        />
      </Box>
      <Divider sx={{ fontWeight: 500, letterSpacing: '2px' }} textAlign='left'>
        SIZE
      </Divider>
      <Divider sx={{ fontWeight: 500, letterSpacing: '2px' }} textAlign='left'>
        COLOR
      </Divider>
      <Divider sx={{ fontWeight: 500, letterSpacing: '2px' }} textAlign='left'>
        TAGS
      </Divider>
      <Divider sx={{ fontWeight: 500, letterSpacing: '2px' }} textAlign='left'>
        BRAND
      </Divider>
    </Box>
  );
};

export const Products = () => {
  return (
    <Box>
      <Item
        sx={{
          backgroundImage: `url(${Ba1})`,
          justifyContent: 'center',
          alignItems: 'flex-end',
          textAlign: 'center',
          paddingTop: '60px',
        }}
      >
        <Box>
          <Typography variant='h3' sx={{ fontWeight: 400, color: 'white' }}>
            Products
          </Typography>
          <Breadcrumb />
        </Box>
      </Item>
      <Container maxWidth='xl'>
        <Stack
          sx={{
            marginTop: '40px',
            marginBottom: '40px',
          }}
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={2}
        >
          <Button
            size='large'
            variant='outlined'
            startIcon={<FilterAltOutlinedIcon />}
            sx={{
              border: '2px solid black',
              textTransform: 'initial',
              color: 'black',
              borderRadius: '0px',
              '&:hover': {
                backgroundColor: '#f97316',
                color: 'white',
                border: '2px solid transparent',
                borderRadius: '0px',
              },
            }}
          >
            Filter
          </Button>
          <Box>
            <SortingBox />
          </Box>
        </Stack>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <DrawerMenu />
          </Grid>
          <Grid item md={9}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};
