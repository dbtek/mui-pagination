import React from 'react'
import {
  ToggleButton, ToggleButtonGroup
} from '@material-ui/lab'
import PropTypes from 'prop-types'
import { SkipPrevious, SkipNext } from '@material-ui/icons'
import { pagination as generate } from 'pagination-generator-js/src'

const Pagination = props => {
  const { totalItems, itemsPerPage, page: currentPage } = props

  let pages
  if (totalItems <= itemsPerPage) {
    return null
  } else {
    pages = generate({
      total: totalItems,
      perPage: itemsPerPage,
      current: currentPage
    })
  }
  const max = pages[pages.length - 1].value

  return (
    <ToggleButtonGroup exclusive value={currentPage} onChange={props.onChange} style={{ margin: '0.5rem 0'}}>
      <ToggleButton value={currentPage - 1} disabled={currentPage === 1}>
        <SkipPrevious style={{ height: 18 }} />
      </ToggleButton>
      {pages.map(page => <ToggleButton value={page.value}>{page.value}</ToggleButton>)}
      <ToggleButton value={currentPage + 1} disabled={currentPage === max}>
        <SkipNext style={{ height: 18 }} />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Pagination
