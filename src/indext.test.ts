import { expect, test } from 'vitest'
import { masonryfy } from '.'

const defaultItem = {
  id: '',
  width: 1,
  height: 1
}

const createItem = (params: Partial<typeof defaultItem> & { id: (typeof defaultItem)['id'] }) => {
  return {
    ...defaultItem,
    ...params
  }
}

test('Create Item Matrix', () => {
  // ---------------------------------------------------------------------
  // ---------------------------------------------------------------------
  // ------------------------- 1 COLUMNS ---------------------------------
  // ---------------------------------------------------------------------
  // ---------------------------------------------------------------------

  // +-----+
  // | one |
  // +-----+

  const matrix1Column1Item = masonryfy([createItem({ id: 'one', height: 1 })], 1)
  expect(matrix1Column1Item[0][0].id).toEqual('one')

  // ----------------------------------------------
  //
  // +-----+
  // | one |
  // | two |
  // +-----+

  const matrix1Column2Items = masonryfy(
    [createItem({ id: 'one', height: 1 }), createItem({ id: 'two', height: 1 })],
    1
  )
  expect(matrix1Column2Items[0][0].id).toEqual('one')
  expect(matrix1Column2Items[0][1].id).toEqual('two')

  // ---------------------------------------------------------------------
  // ---------------------------------------------------------------------
  // ------------------------- 2 COLUMNS ---------------------------------
  // ---------------------------------------------------------------------
  // ---------------------------------------------------------------------

  // +-----+-------+
  // | one |       |
  // +-----+-------+

  const matrix1Item = masonryfy([createItem({ id: 'one', height: 10 })], 2)
  expect(matrix1Item[0][0].id).toEqual('one')

  // ----------------------------------------------
  //
  // +-------+-----+
  // | one   | two |
  // | three |     |
  // +-------+-----+

  const matrix2Columns3Items = masonryfy(
    [
      createItem({ id: 'one', height: 1 }),
      createItem({ id: 'two', height: 1 }),
      createItem({ id: 'three', height: 1 })
    ],
    2
  )

  expect(matrix2Columns3Items[0][0].id).toEqual('one')
  expect(matrix2Columns3Items[1][0].id).toEqual('two')
  expect(matrix2Columns3Items[0][1].id).toEqual('three')

  // ----------------------------------------------
  //
  // +-----+-------+
  // | one | two   |
  // |     | three |
  // +-----+-------+

  const matrix2ColumnsXLFirstItem = masonryfy(
    [
      createItem({ id: 'one', height: 10 }),
      createItem({ id: 'two', height: 1 }),
      createItem({ id: 'three', height: 1 })
    ],
    2
  )
  expect(matrix2ColumnsXLFirstItem[0][0].id).toEqual('one')
  expect(matrix2ColumnsXLFirstItem[1][0].id).toEqual('two')
  expect(matrix2ColumnsXLFirstItem[1][1].id).toEqual('three')

  // ----------------------------------------------
  //
  // +-----+-------+
  // | one | two   |
  // |     | three |
  // |     | four  |
  // |     | five  |
  // +-----+-------+

  const matrix2ColumnsXXLFirstItem = masonryfy(
    [
      createItem({ id: 'one', height: 10 }),
      createItem({ id: 'two', height: 1 }),
      createItem({ id: 'three', height: 1 }),
      createItem({ id: 'four', height: 1 }),
      createItem({ id: 'five', height: 1 })
    ],
    2
  )
  expect(matrix2ColumnsXXLFirstItem[0][0].id).toEqual('one')
  expect(matrix2ColumnsXXLFirstItem[1][0].id).toEqual('two')
  expect(matrix2ColumnsXXLFirstItem[1][1].id).toEqual('three')
  expect(matrix2ColumnsXXLFirstItem[1][2].id).toEqual('four')
  expect(matrix2ColumnsXXLFirstItem[1][3].id).toEqual('five')

  // ----------------------------------------------
  //
  // +-------+-------+
  // | one   | two   |
  // | three |       |
  // | four  |       |
  // | five  |       |
  // +-------+-------+

  const matrix2ColumnsXXLSecondItem = masonryfy(
    [
      createItem({ id: 'one', height: 1 }),
      createItem({ id: 'two', height: 10 }),
      createItem({ id: 'three', height: 1 }),
      createItem({ id: 'four', height: 1 }),
      createItem({ id: 'five', height: 1 })
    ],
    2
  )
  expect(matrix2ColumnsXXLSecondItem[0][0].id).toEqual('one')
  expect(matrix2ColumnsXXLSecondItem[1][0].id).toEqual('two')
  expect(matrix2ColumnsXXLSecondItem[0][1].id).toEqual('three')
  expect(matrix2ColumnsXXLSecondItem[0][2].id).toEqual('four')
  expect(matrix2ColumnsXXLSecondItem[0][3].id).toEqual('five')

  // ---------------------------------------------------------------------
  // ---------------------------------------------------------------------
  // ------------------------- 3 COLUMNS ---------------------------------
  // ---------------------------------------------------------------------
  // ---------------------------------------------------------------------

  // +-----+-----+-------+
  // | one | two | three |
  // +-----+-----+-------+

  const matrix3Columns = masonryfy(
    [
      createItem({ id: 'one', height: 1 }),
      createItem({ id: 'two', height: 1 }),
      createItem({ id: 'three', height: 1 })
    ],
    3
  )
  expect(matrix3Columns[0][0].id).toEqual('one')
  expect(matrix3Columns[1][0].id).toEqual('two')
  expect(matrix3Columns[2][0].id).toEqual('three')

  // ----------------------------------------------
  //
  // +------+-----+-------+
  // | one  | two | three |
  // | four |     |       |
  // +------+-----+-------+

  const matrix3Columns4Items = masonryfy(
    [
      createItem({ id: 'one', height: 1 }),
      createItem({ id: 'two', height: 1 }),
      createItem({ id: 'three', height: 1 }),
      createItem({ id: 'four', height: 1 })
    ],
    3
  )
  expect(matrix3Columns4Items[0][0].id).toEqual('one')
  expect(matrix3Columns4Items[1][0].id).toEqual('two')
  expect(matrix3Columns4Items[2][0].id).toEqual('three')
  expect(matrix3Columns4Items[0][1].id).toEqual('four')

  // ----------------------------------------------
  //
  // +------+------+-------+
  // | one  | two  | three |
  // |      | four |       |
  // |      | five |       |
  // +------+------+-------+

  const matrix3ColumnsXXLFirstItemXXLThirdItem = masonryfy(
    [
      createItem({ id: 'one', height: 10 }),
      createItem({ id: 'two', height: 1 }),
      createItem({ id: 'three', height: 10 }),
      createItem({ id: 'four', height: 1 }),
      createItem({ id: 'five', height: 1 })
    ],
    3
  )
  expect(matrix3ColumnsXXLFirstItemXXLThirdItem[0][0].id).toEqual('one')
  expect(matrix3ColumnsXXLFirstItemXXLThirdItem[1][0].id).toEqual('two')
  expect(matrix3ColumnsXXLFirstItemXXLThirdItem[2][0].id).toEqual('three')
  expect(matrix3ColumnsXXLFirstItemXXLThirdItem[1][1].id).toEqual('four')
  expect(matrix3ColumnsXXLFirstItemXXLThirdItem[1][2].id).toEqual('five')

  // ----------------------------------------------
  //
  // +------+------+-------+
  // | one  | two  | three |
  // |      | four | five  |
  // +------+------+-------+

  const matrix3ColumnsXXLFirstItem = masonryfy(
    [
      createItem({ id: 'one', height: 10 }),
      createItem({ id: 'two', height: 1 }),
      createItem({ id: 'three', height: 1 }),
      createItem({ id: 'four', height: 1 }),
      createItem({ id: 'five', height: 1 })
    ],
    3
  )
  expect(matrix3ColumnsXXLFirstItem[0][0].id).toEqual('one')
  expect(matrix3ColumnsXXLFirstItem[1][0].id).toEqual('two')
  expect(matrix3ColumnsXXLFirstItem[2][0].id).toEqual('three')
  expect(matrix3ColumnsXXLFirstItem[1][1].id).toEqual('four')
  expect(matrix3ColumnsXXLFirstItem[2][1].id).toEqual('five')

  // ---------------------------------------------------------------------
  // ---------------------------------------------------------------------
  // -------------------------  EDGE CASES -------------------------------
  // ---------------------------------------------------------------------
  // ---------------------------------------------------------------------

  // 0 value
  // +-----+-------+
  // | one |       |
  // +-----+-------+

  const matrix0Value = masonryfy([createItem({ id: 'one', height: 0 })], 2)
  expect(matrix0Value[0][0].id).toEqual('one')

  // ----------------------------------------------
  //
  // Negative Integer
  // +-----+-------+
  // | one |       |
  // +-----+-------+

  const matrixNegativeInteger = masonryfy([createItem({ id: 'one', height: -10 })], 2)
  expect(matrixNegativeInteger[0][0].id).toEqual('one')

  // ----------------------------------------------
  //
})
