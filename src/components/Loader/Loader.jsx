import { CirclesWithBar } from 'react-loader-spinner';
import { LoaderWrapp } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapp>
      <CirclesWithBar
        height="100"
        width="100"
        color="#ffff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </LoaderWrapp>
  );
};
