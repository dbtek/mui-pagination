import React from 'react'
import {
  ToggleButton, ToggleButtonGroup
} from '@material-ui/lab'
import PropTypes from 'prop-types'
import { SkipPrevious, SkipNext } from '@material-ui/icons'
import { pagination as generate } from 'pagination-generator-js/src'
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  button: {
    borderRadius: '4px !important',
    margin: '4px 2px 3px',
    padding: 4,
    minWidth: 35
  }
})

const Pagination = props => {
  const { totalItems, itemsPerPage, page: currentPage, classes } = props

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
    <ToggleButtonGroup exclusive value={currentPage} onChange={props.onChange} style={{ margin: '0.5rem 0', borderRadius: 4 }}>
      <ToggleButton value={currentPage - 1} disabled={currentPage === 1} className={classes.button}>
        <SkipPrevious style={{ height: 18 }} />
      </ToggleButton>
      {pages.map(page => <ToggleButton key={`page-${page.value}`} value={page.value} className={classes.button}>{page.value}</ToggleButton>)}
      <ToggleButton value={currentPage + 1} disabled={currentPage === max} className={classes.button}>
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

export default withStyles(styles)(Pagination)
