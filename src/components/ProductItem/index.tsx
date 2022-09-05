import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Tooltip } from '@mui/material';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProductAPI } from 'src/types/GeneralTypes';
import './style.scss';

export const ProductItem = memo(({ item }: { item: IProductAPI }) => {
  const navigate = useNavigate();
  const { is, image, name, price, _id, sale } = item;

  return (
    <div className='mb-10 container-product-item'>
      <div className='max-w-full cursor-pointer relative group overflow-hidden'>
        {is.sale && (
          <figure className='label-sale'>
            <span>{sale}%</span>
          </figure>
        )}
        <img className='w-full' src={image.main} alt='pd1' />
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
            <Tooltip
              sx={{
                backgroundColor: 'white',
                padding: '12px',
                '&:hover': {
                  backgroundColor: '#f9773a',
                  color: 'white',
                },
              }}
              title='Compare'
              placement='top'
              arrow
            >
              <IconButton>
                <CompareArrowsIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <div
          className='font-semibold mb-2 mt-3'
          onClick={() => navigate(`/shop/phone/${_id}`)}
        >
          <span className='hover:text-orange-500 transition ease-out cursor-pointer'>
            {name}
          </span>
        </div>
        <p className='font-bold text-orange-500'>${price.raw}</p>
      </div>
    </div>
  );
});
