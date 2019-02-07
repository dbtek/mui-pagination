import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { SkipPrevious, SkipNext } from '@material-ui/icons';
import { pagination as generate } from 'pagination-generator-js/src';

const Pagination = props => {
  const { totalItems, itemsPerPage, page: currentPage } = props;

  let pages;
  if (totalItems <= itemsPerPage) {
    return null;
  } else {
    pages = generate({
      total: totalItems,
      perPage: itemsPerPage,
      current: currentPage
    });
  }
  const max = pages[pages.length - 1].value;

  return React.createElement(
    ToggleButtonGroup,
    { exclusive: true, value: currentPage, onChange: props.onChange, style: { margin: '0.5rem 0' } },
    React.createElement(
      ToggleButton,
      { value: currentPage - 1, disabled: currentPage === 1 },
      React.createElement(SkipPrevious, { style: { height: 18 } })
    ),
    pages.map(page => React.createElement(
      ToggleButton,
      { value: page.value },
      page.value
    )),
    React.createElement(
      ToggleButton,
      { value: currentPage + 1, disabled: currentPage === max },
      React.createElement(SkipNext, { style: { height: 18 } })
    )
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Pagination;