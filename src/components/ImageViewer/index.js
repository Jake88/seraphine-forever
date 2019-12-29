import React, { useState } from 'react'
import {
  ImageSelector,
  ImageConfiner,
  ThumbnailImg
} from './styles'

export default ({images}) => {
  const [selectedImage, selectImage] = useState(0)

  return (
    <div>
      <ImageConfiner src={images[selectedImage].src} />
      <ImageSelector>
        {images.map((image, index) => <ThumbnailImg
          key={`thumbanil${index}`}
          altText={image.altText}
          bgsrc={image.src}
          onClick={() => selectImage(index)}
        />)}
      </ImageSelector>
    </div>
  )
}