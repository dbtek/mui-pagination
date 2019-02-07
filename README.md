<div align="center">
  <h2>mui-pagination</h2>
  <p>:one::two::three:</p>
  <p>
    A pagination component for React built with material-ui. Makes use of <a href="https://material-ui.com/lab/toggle-button/">ToggleButton</a> with <a href="https://github.com/zarkoselak/pagination-generator-js/">pagination-generator-js</a> by Zarko Selak.
  </p>
</div>

### Install
```bash
$ npm i -S mui-pagination
# or with yarn
$ yarn add mui-pagination
```

### Usage
```js
import React, { Component } from 'react'
import Pagination from 'mui-pagination'

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

### API

**Props***  
`totalItems` `{Number} *`  
Total number of items.  

`itemsPerPage` `{Number} *`  
Items to show on each page.  

`page` `{Number} *`  
Current page number.  

### Author
Ismail Demirbilek - [@dbtek](https://twitter.com/dbtek)
