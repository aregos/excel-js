const CODES = {
  A: 65,
  Z: 90
}

function toCell(row) {
  return function(_, col) {
    return `
    <div class="cell" contenteditable="true" data-type="cell" data-col="${col}" data-id="${row}:${col}"></div>
    `
  }
}

function toColumn(col, index) {
  return `
        <div class="column" data-type="resizable" data-col="${index}">
            ${col}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `
}

function createRow(index, content) {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
    <div class="row" data-type="resizable">
        <div class="row-info">
            ${index ? index : ''}
            ${resize}
        </div>
        <div class="row-data">${content}</div>
    </div>
</div>
    `
}

function toChar(_, index) {
  return String.fromCharCode(index + CODES.A)
}

export function createTable(rowsCount = 15) {
  const colCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  rows.push(createRow(null, cols))

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colCount)
        .fill('')
        // .map((_, col) => toCell(row, col))
        .map(toCell(row))
        .join('')
    rows.push(createRow(row + 1, cells))
  }

  return rows.join('')
}
