import styled from 'styled-components'
import * as gs from 'utils/globalStyles'

export const ImageConfiner = styled.div`
  overflow: hidden;
  min-height: calc(570px + ${gs.spacing.normal});
  border: ${gs.spacing.normal} solid ${gs.colours.white};
  border-bottom: 70px solid ${gs.colours.white};
  box-shadow: 0 4px 4px ${gs.colours.grey};
  margin-bottom: ${gs.spacing.normal};
  background: url(${({src}) => src});
  background-size: cover;
  background-position: center;
`

export const ImageSelector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const ThumbnailImg = styled.div`
  border: 2px solid ${gs.colours.primary.lightest};
  height: 100px;
  width: 100px;
  background-image: url(${({bgsrc}) => bgsrc});
  background-size: cover;
  background-position: center;
  margin-right: ${gs.spacing.small};
  cursor: pointer;
  overflow: hidden;

  &:hover {
    border-color: ${gs.colours.primary.lighter};
  }

  ${gs.media.down(gs.mediaSizes.sm)`
    border: 1px solid ${gs.colours.primary.lightest};
    height: 60px;
    width: 60px;
  `}
`