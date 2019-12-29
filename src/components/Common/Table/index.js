import React from 'react'

import {
  Table,
  Header,
  Row,
  Detail
} from './styles'

export default ({title, keyValues}) => {
  return (
    <Table>
      <thead>
        <Row>
          <Header colSpan="2">{title}</Header>
        </Row>
      </thead>
      <tbody>
        {keyValues.map(({key, value}) => (
          <Row key={`tablekey_${key}`}>
            <Detail>{key}</Detail>
            <Detail>{value}</Detail>
          </Row>
        ))}
      </tbody>
    </Table>
  )
}