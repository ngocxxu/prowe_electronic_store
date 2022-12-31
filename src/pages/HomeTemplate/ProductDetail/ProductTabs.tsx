import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Rating,
  Stack,
  Tab,
  TextField,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'src/redux/configStore';
import { ADD_TO_COMMENT_SAGA, GET_COMMENT_SAGA } from 'src/redux/consts/consts';
import { IComment } from 'src/types/GeneralTypes';
import Insta10 from '../../../assets/img/lib/instagram10.jpg';
import Insta9 from '../../../assets/img/lib/instagram9.jpg';
import Prod from '../../../assets/img/product/14.1.jpg';

const ListComment = ({ dataComment }: { dataComment: IComment[] }) => {
  return (
    <>
      <Typography
        sx={{
          letterSpacing: '3px',
          position: 'relative',
          paddingBottom: '10px',
        }}
        variant='button'
        display='block'
        gutterBottom
      >
        CUSTOMER REVIEWS
        <Box
          sx={{
            position: 'absolute',
            background: '#ff871d',
            width: '40px',
            height: '2px',
            bottom: 0,
            left: 0,
          }}
        ></Box>
      </Typography>

      {/* ------------- Comments -------------*/}
      {dataComment.length > 0 ? (
        dataComment.map((item, index) => {
          const { content, rate, userId, createdAt } = item;
          return (
            <Box
              key={index}
              sx={{
                marginBottom: '30px',
                marginTop: '20px',
                border: '1px solid #c4c4c4',
                borderRadius: '10px',
                padding: '15px',
              }}
            >
              <Stack
                justifyContent='space-between'
                direction='row'
                alignItems='center'
              >
                <Stack
                  direction='row'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Avatar
                    alt={userId.email}
                    src={`https://avatars.dicebear.com/api/bottts/${userId._id}.svg`}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box sx={{ marginLeft: '20px' }}>
                    <Typography variant='subtitle1'>{userId.email}</Typography>
                    <Typography variant='subtitle2' sx={{ color: '#979797' }}>
                      {dayjs(createdAt).format('MMMM D, YYYY h:mm A')}
                    </Typography>
                  </Box>
                </Stack>
                <Box>
                  <Rating name='read-only' value={rate} readOnly />
                </Box>
              </Stack>
              <Typography
                sx={{ marginTop: '15px', marginLeft: '15px' }}
                variant='subtitle1'
              >
                {content}
              </Typography>
            </Box>
          );
        })
      ) : (
        <Typography
          sx={{
            marginBottom: '30px',
            marginTop: '20px',
          }}
          variant='subtitle2'
        >
          No reviews yet
        </Typography>
      )}
    </>
  );
};

export const ProductTabs = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [value, setValue] = useState('1');
  const [reviewValue, setReviewValue] = useState<number | null>(5);
  const [text, setText] = useState<string | null>();
  const { dataComment } = useSelector(
    (state: RootState) => state.commentReducer
  );
  const { myInfo } = useSelector((state: RootState) => state.userReducer);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    dispatch({
      type: ADD_TO_COMMENT_SAGA,
      payload: {
        id: myInfo._id,
        idProduct: id,
        content: text,
        rate: reviewValue,
      },
    });
    setText('');
    // console.dir(formRef.current);
  };

  useEffect(() => {
    dispatch({
      type: GET_COMMENT_SAGA,
      payload: id,
    });
  }, [dispatch, id]);

  return (
    <Box
      sx={{
        width: '100%',
        borderTop: '1px solid #e1e1e1',
        padding: '10px 0',
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            sx={{ paddingBottom: '15px' }}
            centered
            onChange={handleChange}
            aria-label='lab API tabs example'
            textColor='secondary'
            indicatorColor='secondary'
          >
            <Tab label='DESCRIPTION' value='1' />
            <Tab label='ADDITIONAL INFORMATION' value='2' />
            <Tab label={`REVIEW (${dataComment.length})`} value='3' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <Container maxWidth='lg'>
            <Grid
              container
              spacing={4}
              direction='row'
              justifyContent='center'
              alignItems='center'
            >
              <Grid item md={6}>
                <img className='w-full' src={Insta10} alt='insta10' />
              </Grid>
              <Grid item md={6}>
                <Typography
                  variant='h4'
                  sx={{ fontWeight: '500', textAlign: 'center' }}
                >
                  Things You Need To Know
                </Typography>
                <Typography
                  sx={{ color: '#969696', margin: '20px 0' }}
                  variant='body1'
                >
                  Things You Need To Know There are many variations of passages
                  of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised
                  words which don't look even slightly believable. If you are
                  going to use a passage of Lorem Ipsum, you need to...
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography
                  variant='h4'
                  sx={{ fontWeight: '500', textAlign: 'center' }}
                >
                  Things You Need To Know
                </Typography>
                <Typography
                  sx={{ color: '#969696', margin: '20px 0' }}
                  variant='body1'
                >
                  Things You Need To Know There are many variations of passages
                  of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised
                  words which don't look even slightly believable. If you are
                  going to use a passage of Lorem Ipsum, you need to...
                </Typography>
              </Grid>
              <Grid item md={6}>
                <img className='w-full' src={Insta9} alt='insta9' />
              </Grid>
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel value='2'>
          <Container maxWidth='lg'>
            <Grid container spacing={4}>
              <Grid item md={8} container>
                <Grid item md={6}>
                  <Typography
                    sx={{
                      letterSpacing: '2px',
                      color: '#979797',
                      fontWeight: '600',
                    }}
                    variant='overline'
                  >
                    MORE INFORMATION TO YOU
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: '500',
                      position: 'relative',
                      paddingBottom: '15px',
                    }}
                    variant='h5'
                  >
                    Things You Need To Know
                    <Box
                      sx={{
                        position: 'absolute',
                        background: '#ff871d',
                        width: '40px',
                        height: '2px',
                        bottom: 0,
                        left: 0,
                      }}
                    ></Box>
                  </Typography>
                  <Typography
                    sx={{ color: '#969696', margin: '20px 0' }}
                    variant='body1'
                  >
                    We use industry standard SSL encryption to protect your
                    details. Potentially sensitive information such as your
                    name, address and card details are encoded so they can only
                    be read on the secure server.
                  </Typography>
                  {[
                    'Safe Payments',
                    'Accept Credit Cart',
                    'Different Payment Method',
                    'Price Include VAT',
                    'Easy To Order',
                  ].map((item, index) => (
                    <Typography
                      sx={{
                        color: '#979797',
                        fontWeight: '500',
                        padding: '5px 0',
                      }}
                      variant='subtitle1'
                      key={index}
                    >
                      {item}
                    </Typography>
                  ))}
                </Grid>
                <Grid item md={6}>
                  <Typography
                    sx={{
                      fontWeight: '500',
                      marginTop: '34px',
                    }}
                    variant='h6'
                  >
                    Express Delivery
                  </Typography>
                  {[
                    'Europe & USA within 2-4 days',
                    'Rest of the world within 3-7 days',
                    'Selected locations',
                  ].map((item, index) => (
                    <Typography
                      sx={{
                        color: '#979797',
                        fontWeight: '500',
                        padding: '5px 0',
                      }}
                      variant='subtitle1'
                      key={index}
                    >
                      {item}
                    </Typography>
                  ))}
                  <Typography
                    sx={{
                      fontWeight: '500',
                      marginTop: '10px',
                    }}
                    variant='h6'
                  >
                    Need More Information
                  </Typography>
                  {[
                    'Orders & Shipping',
                    'Returns & Refunds',
                    'Payments',
                    'Your Orders',
                  ].map((item, index) => (
                    <Typography
                      sx={{
                        color: '#979797',
                        fontWeight: '500',
                        padding: '5px 0',
                      }}
                      variant='subtitle1'
                      key={index}
                    >
                      {item}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
              <Grid item md={4}>
                <img src={Prod} alt='prod' className='w-full' />
              </Grid>
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel value='3'>
          <Container maxWidth='lg'>
            <ListComment dataComment={dataComment} />

            <Divider />

            <Stack direction='row' spacing={2} alignItems='center'>
              <Typography
                sx={{
                  fontWeight: '500',
                  marginTop: '30px',
                }}
                variant='subtitle1'
              >
                Your Rating:
              </Typography>
              <Box sx={{ marginTop: 'auto' }}>
                <Rating
                  sx={{ paddingTop: '33px' }}
                  name='simple-controlled'
                  value={reviewValue}
                  onChange={(event, newValue) => {
                    setReviewValue(newValue);
                  }}
                />
              </Box>
            </Stack>
            <Stack
              direction='row'
              spacing={2}
              justifyContent='center'
              alignItems='start'
              sx={{ marginTop: '15px' }}
            >
              <Box
                sx={{ width: '100%' }}
                component='form'
                onSubmit={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleSubmit();
                  e.preventDefault();
                }}
              >
                <TextField
                  required
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                  // error={text?.trim() === ''}
                  // helperText={
                  //   text?.trim() === '' ? 'Please input your review!' : ' '
                  // }
                  fullWidth
                  id='outlined-multiline-static'
                  label='Your Review'
                  multiline
                  rows={4}
                />
                <Button
                  type='submit'
                  sx={{ width: '100%', mt: 2 }}
                  size='large'
                  color='warning'
                  variant='contained'
                >
                  Submit
                </Button>
              </Box>
            </Stack>
          </Container>
        </TabPanel>
      </TabContext>
    </Box>
  );
};
