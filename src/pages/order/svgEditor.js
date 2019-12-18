import React from 'react'

import SvgEditor from 'components/SvgEditor'

import { Panel } from 'components/common'


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
