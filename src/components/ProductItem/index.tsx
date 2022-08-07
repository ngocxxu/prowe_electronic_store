import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Pd1 from '../../assets/img/product/7.1.jpg';
import './style.scss';

export const ProductItem = () => {
  return (
    <div className='mb-10 container-product-item'>
      <div className='max-w-full cursor-pointer relative group overflow-hidden'>
        <figure className='label-sale'>
          <span>-14%</span>
        </figure>
        <img className='w-full' src={Pd1} alt='pd1' />
        <div className='absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto'>
          <div className='opacity-0 group-hover:opacity-100 transition ease-in-out delay-150 flex justify-around items-center gap-3'>
            <Tooltip
              sx={{
                backgroundColor: 'white',
                padding: '12px',
                '&:hover': {
                  backgroundColor: '#f9773a',
                  color: 'white',
                },
              }}
              title='Add to Cart'
              placement='top'
              arrow
            >
              <IconButton>
                <AddShoppingCartIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              sx={{
                backgroundColor: 'white',
                padding: '12px',
                '&:hover': {
                  backgroundColor: '#f9773a',
                  color: 'white',
                },
              }}
              title='Quickview'
              placement='top'
              arrow
            >
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              sx={{
                backgroundColor: 'white',
                padding: '12px',
                '&:hover': {
                  backgroundColor: '#f9773a',
                  color: 'white',
                },
              }}
              title='Add to Wishlist'
              placement='top'
              arrow
            >
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <div className='font-semibold mb-2 mt-3'>
          <span className='hover:text-orange-500 transition ease-out cursor-pointer'>
            Samsung Galaxy S9+
          </span>
        </div>
        <p className='font-bold text-orange-500'>$200.00</p>
      </div>
    </div>
  );
};
