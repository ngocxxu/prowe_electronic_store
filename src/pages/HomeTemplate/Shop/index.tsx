import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Pagination from '@mui/material/Pagination';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
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
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from 'src/components/Breadcrumb';
import { ProductItem } from 'src/components/ProductItem';
import { RootState } from 'src/redux/configStore';
import {
  GET_ALL_PRODUCTS_QUERY_SAGA,
  GET_ALL_PRODUCTS_SAGA,
} from 'src/redux/consts/consts';
import { ChipData } from 'src/types/GeneralTypes';
import Ba1 from '../../../assets/img/background/collection.jpg';
import LogoBrand from '../../../assets/img/others/logo-brand.jpg';
import './style.scss';

const Item = styled(Box)(() => ({
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
}));

const SortingBox = () => {
  const dispatch = useDispatch();
  const [sortItem, setSortItem] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSortItem(event.target.value);
    dispatch({
      type: GET_ALL_PRODUCTS_QUERY_SAGA,
      payload: { sort: event.target.value },
    });
  };

  return (
    <FormControl variant='standard' sx={{ m: 1, minWidth: 130 }}>
      <Select value={sortItem} onChange={handleChange} displayEmpty>
        <MenuItem value=''>Default sorting</MenuItem>
        <MenuItem value='bestSell'>Best Selling</MenuItem>
        <MenuItem value='alphabet'>Alphabetically, A-Z</MenuItem>
        <MenuItem value='priceHighLow'>Price, high to low</MenuItem>
        <MenuItem value='priceLowHigh'>Price, low to high</MenuItem>
        <MenuItem value='dateOldNew'>Date, old to new</MenuItem>
        <MenuItem value='dateNewOld'>Date, new to old</MenuItem>
      </Select>
    </FormControl>
  );
};

const DrawerMenu = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState<number[]>([20, 60]);
  const [chipData, setChipData] = useState<readonly ChipData[]>([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'Vue.js' },
    { key: 4, label: 'Vue.js' },
    { key: 5, label: 'Vue.js' },
    { key: 6, label: 'Vue.js' },
  ]);

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

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleToggle = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const handleSearchFilter = () => {
    dispatch({
      type: GET_ALL_PRODUCTS_QUERY_SAGA,
      payload: { priceRange: value },
    });
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
          step={10}
          valueLabelDisplay='auto'
          marks={marks}
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          sx={{ color: '#f97316' }}
        />
      </Box>
      <Divider />
      <Stack
        sx={{
          marginTop: '15px',
          marginBottom: '15px',
        }}
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Button
          onClick={() => handleSearchFilter()}
          color='warning'
          variant='contained'
          size='small'
        >
          Search
        </Button>
        <Button color='warning' variant='outlined' size='small'>
          Unfilter
        </Button>
      </Stack>
      <Divider sx={{ fontWeight: 500, letterSpacing: '2px' }} textAlign='left'>
        TAGS
      </Divider>
      <Stack
        sx={{
          marginTop: '15px',
          marginBottom: '15px',
          flexWrap: 'wrap',
          rowGap: '5px',
        }}
        direction='row'
        spacing={1}
      >
        {chipData.map((data) => {
          return (
            <Box key={data.key}>
              <Chip
                label={data.label}
                onClick={
                  data.label === 'React' ? undefined : handleToggle(data)
                }
                clickable
              />
            </Box>
          );
        })}
      </Stack>
      <Divider sx={{ fontWeight: 500, letterSpacing: '2px' }} textAlign='left'>
        BRAND
      </Divider>
      <Box sx={{ maxWidth: '100%' }}>
        <img className='w-full' src={LogoBrand} alt='list-logo' />
      </Box>
    </Box>
  );
};

export const Shop = () => {
  const dispatch = useDispatch();
  const [toggleFilter, setToggleFilter] = useState(false);
  const { dataAllProducts } = useSelector(
    (state: RootState) => state.productReducer
  );
  const [dataTable, setDataTable] = useState({
    minValue: 0,
    maxValue: 12,
  });

  const handleChangeGrid = useCallback(
    (event: React.ChangeEvent<unknown>, page: number) => {
      if (page <= 1) {
        setDataTable({
          minValue: 0,
          maxValue: 12,
        });
      } else {
        setDataTable({
          minValue: dataTable.maxValue,
          maxValue: page * 12,
        });
      }
    },
    [dataTable]
  );

  useEffect(() => {
    dispatch({
      type: GET_ALL_PRODUCTS_SAGA,
    });
  }, [dispatch]);

  return (
    <Box>
      <Item
        sx={{
          backgroundImage: `url(${Ba1})`,
          justifyContent: 'center',
          alignItems: 'flex-end',
          textAlign: 'center',
          padding: '60px 0',
        }}
      >
        <Box>
          <Typography variant='h3' sx={{ fontWeight: 400, color: 'white' }}>
            Shop
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
            onClick={() => setToggleFilter(!toggleFilter)}
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
          {toggleFilter && (
            <Grid sx={{ transition: 'all 3s ease-out' }} item md={3}>
              <DrawerMenu />
            </Grid>
          )}
          <Grid container spacing={2} item md={toggleFilter ? 9 : 12}>
            {dataAllProducts &&
              dataAllProducts.length > 0 &&
              dataAllProducts
                .slice(dataTable.minValue, dataTable.maxValue)
                .map((item) => (
                  <Grid key={item._id} item md={toggleFilter ? 4 : 3}>
                    <ProductItem item={item} />
                  </Grid>
                ))}
            <Grid
              container
              direction='row'
              justifyContent='center'
              alignItems='center'
            >
              <Pagination
                sx={{ ml: 'auto', mr: 'auto' }}
                count={Math.ceil(dataAllProducts.length / 12)}
                onChange={handleChangeGrid}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
