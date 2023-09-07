const NORMALIZATION_WIDTH = 100

export const masonryfy = <T extends { width: number; height: number }>(
  items: T[],
  columns = 2
): T[][] => {
  return items.reduce(
    (acc, item) => {
      const normalizedHeight =
        item.width === 0 ? NORMALIZATION_WIDTH : (item.height / item.width) * NORMALIZATION_WIDTH
      const shortestColIndex = acc.columnHeights.indexOf(Math.min(...acc.columnHeights))

      acc.matrix[shortestColIndex].push(item)
      acc.columnHeights[shortestColIndex] += normalizedHeight

      return acc
    },
    {
      columnHeights: Array.from({ length: columns }, () => 0).fill(0),
      matrix: Array.from({ length: columns }, () => [])
    } as {
      columnHeights: number[]
      matrix: T[][]
    }
  ).matrix
}
