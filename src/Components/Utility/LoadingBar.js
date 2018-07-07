import { BarLoader } from 'react-spinners';
import React from 'react'

const LoadingBar = () => (
  <div className="loaderGrid">
    <div className='loader'>
      <h3>Loading...</h3>
      <BarLoader
      width={200}
      />
    </div>
  </div>
)

export default LoadingBar;
