import { RotatingLines } from 'react-loader-spinner';

function LoadingSpinner() {
  return (
    <div className="spinner-wrapper">
      <RotatingLines
        visible={true}
        height="46"
        width="46"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
      />
    </div>
  );
}

export default LoadingSpinner;
