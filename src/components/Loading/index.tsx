import Loading1 from '../../assets/img/gif/loading1.gif';
import Loading2 from '../../assets/img/gif/loading2.gif';

export const LoadingPage = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <img className='block mx-auto my-auto' src={Loading1} alt='Loading1' />
    </div>
  );
};

export const LoadingPage2 = () => {
  return (
    <>
      <img className='block mx-auto my-auto' src={Loading2} alt='Loading2' />
    </>
  );
};
