import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/configStore';
import ComparisonBar from './ComparisonBar';
import ComparisonDetail from './ComparisonDetail';

const Comparison = () => {
  const { isOpenComparisonTable } = useSelector(
    (state: RootState) => state.otherReducer
  );
  const {
    dataComparison: { comparisonItems },
  } = useSelector((state: RootState) => state.comparisonReducer);

  return (
    <>
      {comparisonItems.length > 0 && (
        <div className='fixed w-full bottom-0 left-0 py-2 px-4 bg-black text-white z-[1001]'>
          <div className='relative z-[9999]'>
            <ComparisonBar />

            {/* Comparison Detail Table */}
            {isOpenComparisonTable && <ComparisonDetail />}
          </div>
        </div>
      )}
    </>
  );
};

export default Comparison;
