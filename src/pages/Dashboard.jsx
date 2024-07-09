import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '../common/Button/Button'
import Proutes from '../common/Proutes'
import { setLoader } from '../redux/slices/loaderSlice';

function Dashboard() {
  const dispatch = useDispatch();
  return (
    <Proutes>
      <Button onclick={() => dispatch(setLoader(true))}>hello</Button>
    </Proutes>
  )
}

export default Dashboard
