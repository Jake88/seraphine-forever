import React from 'react'
import Image from 'assets/christmasbaubles.jpg'
import IconList from 'components/IconList'
import {ImageBanner} from 'components/common'

export default props => (
  <div>
    <IconList />
    <ImageBanner 
      height={'250px'}
      img={Image}
      />
  </div>
)