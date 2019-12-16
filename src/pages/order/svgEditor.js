import React from 'react'
import PropTypes from 'prop-types'

import SvgEditor from 'components/SvgEditor'

import { Panel, Title, Paragraph } from 'components/common'


// To come in as props
import { BirthPillowConfig } from 'products/BirthPillow/config'

const SvgEditorPage = () => {
  return (
    <Panel>
      <p>Svg Editor page</p>
      <SvgEditor
        Svg={BirthPillowConfig.Svg}
        colours={BirthPillowConfig.colourConfig}
      />
    </Panel>
  )
}

SvgEditorPage.propTypes = {
}

export default SvgEditorPage
