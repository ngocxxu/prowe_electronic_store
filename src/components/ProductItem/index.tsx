import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Tooltip } from '@mui/material';
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'src/redux/configStore';
import {
  ADD_TO_CART_SAGA,
  ADD_TO_FAVOR_SAGA,
  GET_PRODUCT_SAGA,
  REMOVE_TO_FAVOR_SAGA,
} from 'src/redux/consts/consts';
import { toggleOpenQuickViewModal } from 'src/redux/reducers/otherReducer';
import { IProduct } from 'src/types/GeneralTypes';
import './style.scss';

export const ProductItem = memo(({ item }: { item: IProduct }) => {
  const { dataCart } = useSelector((state: RootState) => state.cartReducer);
  const { dataFavor } = useSelector((state: RootState) => state.favorReducer);
  const [toggleFavor, setToggleFavor] = useState(false);
  const dispatch = useDispatch();
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
        <img
          className='w-full cursor-pointer'
          onClick={() => {
            navigate(`/shop/${_id}`);
          }}
          src={image.main}
          alt='pd1'
        />
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
              <IconButton
                onClick={() =>
                  dispatch({
                    type: ADD_TO_CART_SAGA,
                    payload: {
                      idCart: dataCart.idCart,
                      data: {
                        idProduct: _id,
                        quantity: 1,
                        price: price.raw,
                      },
                    },
                  })
                }
              >
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
              <IconButton
                onClick={() => {
                  dispatch(toggleOpenQuickViewModal(true));
                  dispatch({
                    type: GET_PRODUCT_SAGA,
                    payload: _id,
                  });
                }}
              >
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              onClick={() => {
                setToggleFavor(!toggleFavor);
                !toggleFavor
                  ? dispatch({
                      type: ADD_TO_FAVOR_SAGA,
                      payload: {
                        idFavor: dataFavor.idFavor,
                        data: {
                          idProduct: _id,
                        },
                      },
                    })
                  : dispatch({
                      type: REMOVE_TO_FAVOR_SAGA,
                      payload: {
                        idFavor: dataFavor.idFavor,
                        idProduct: _id,
                      },
                    });
              }}
              sx={{
                backgroundColor: `${
                  dataFavor.favorItems.some((item) => item.product._id === _id)
                    ? '#f9773a'
                    : 'white'
                }`,
                color: `${
                  dataFavor.favorItems.some((item) => item.product._id === _id)
                    ? 'white'
                    : 'rgba(0, 0, 0, 0.54)'
                }`,
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
          onClick={() => {
            navigate(`/shop/${_id}`);
          }}
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
