import React from "react";
import {isNumber} from "util";
import style from "./index.module.scss";

export default class Paginator extends React.Component {
  changePage = page => {
    this.props.onPageChange && this.props.onPageChange(page);
  };

  render() {
    let {page, size, total} = this.props;

    if (total == 0) {
      return (
        <div
          style={this.props.style}
          className={this.props.className || `${style.pagination_container}`}>
          No results found
        </div>
      );
    }

    // Check Page.
    page = isNumber(page) ? page : 0;

    // Determine how many pages there are.
    let pages = isNumber(total) && isNumber(size) ? Math.ceil(total / size) : 0;

    // Don't render too many buttons if there are a lot of pages.
    let minPage = page - 3;
    let maxPage = page + 3;

    let hasMinButton = false;
    let hasMaxButton = false;

    // Range includes Minimum page?
    if (minPage <= 0) {
      minPage = 0;
      hasMinButton = true;
    }

    // Range includes Maximum page?
    if (maxPage >= pages) {
      maxPage = pages;
      hasMaxButton = true;
    }

    const pageButtons = [];
    let minButton = null;
    let maxButton = null;

    // Create First Page button, if it isn't in the range.
    if (!hasMinButton) {
      minButton = (
        <div className="button-grouping">
          <button
            onClick={() => this.changePage(0)}
            className={page === 0 ? `${style.button_active}` : `${style.button}`}>
            1
          </button>
          <span>...</span>
        </div>
      );
    }

    // Create a Page button for all Pages in the Specified Range.
    for (let pageIndex = minPage; pageIndex < maxPage; pageIndex++) {
      pageButtons.push(
        <button
          key={pageIndex}
          active={(pageIndex == page).toString()}
          onClick={() => this.changePage(pageIndex)}
          className={
            page === pageIndex ? `${style.button_active}` : `${style.button}`
          }>
          {pageIndex + 1}
        </button>
      );
    }

    // Create Final Page button, if it isn't in the range.
    if (!hasMaxButton) {
      maxButton = (
        <div className="button-grouping">
          <span>...</span>
          <button
            onClick={() => this.changePage(pages - 1)}
            className={
              page === pages ? `${style.button_active}` : `${style.button}`
            }>
            {pages}
          </button>
        </div>
      );
    }

    return (
      <div
        style={this.props.style}
        className={this.props.className || `${style.pagination_container}`}>
        {!hasMinButton ? minButton : null}
        {pageButtons}
        {!hasMaxButton ? maxButton : null}
      </div>
    );
  }
}
