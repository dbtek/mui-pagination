material-ui-pagination
===

A pagination component for React built with material-ui. Makes use of [ToggleButton](https://material-ui.com/lab/toggle-button/) with [pagination-generator-js](https://github.com/zarkoselak/pagination-generator-js/) by Zarko Selak.

### Install
```bash
$ npm i -S material-ui-pagination
# or with yarn
$ yarn add material-ui-pagination
```

### Usage
```js
import React, { Component } from 'react'
import Pagination from 'material-ui-pagination'

class PaginatedList extends Component {
  state = {
    page: 1,
    totalItems: 100,
    itemsPerPage: 10
  }

  handlePageChange (page) {
    this.setState({ page })
  }

  render () {
    const { page, totalItems, itemsPerPage } = this.state
    return (
      <div>
        {/* items */}
        <Pagination
          page={page}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onChange={(e, val) => this.handlePageChange(val)}
        />
      </div>
    )
  }
}
```

### Author
Ismail Demirbilek - [@dbtek](https://twitter.com/dbtek)
