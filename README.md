# Masonryfy

Convert an array of items into an array of columns of items.

Each item is placed in the shortest column, creating a Masonry like structure.

Each item must specify a width and height. 

## 📦 Install

```sh 
pnpm add masonryfy

# OR:
yarn add masonryfy
npm i masonryfy

```

## ⚡Usage

Masonryfy takes an array of objects with `width` and `height` properties, and turns it into a matrix specifying the number of columns.  

The items will be distributed accounting for their with and height, as a Masonry Layout.


```ts
  const items = [ 
    { id: 'one', width: 100, height: 300 },
    { id: 'two', width: 100, height: 100 },
    { id: 'three', width: 100, height: 200 },
    { id: 'four', width: 100, height: 100 }
  ]

  const itemMatrix = masonryfy(items, 3)
        // ^? [
            // [{ id: 'one', width: 100, height: 300 }],
            // [{ id: 'two', width: 100, height: 100 }, { id: 'four', width: 100, height: 100 }],
            // [{ id: 'three', width: 100, height: 200 }],
            // ]

  // +------+-------+-------+
  // | one  | two   | three |
  // |      | four  |       |
  // +------+-------+-------+
```

Te result can be used by any frontend to create a masonry-like layout like so:

```tsx
// Example using React. But can be adapted to any frontend framework.

export const MasonryGrid = ({ items }: Props) => {
  const itemMatrix = masonryfy(items, 3)

  return (
    <section className="w-full flex flex-col">
      {itemMatrix[0]?.length > 0 && (

        <ul className="flex max-w-7xl gap-8">

          {itemMatrix.map((col, index) => (
            <li key={'grid-column' + index} className="w-1/3">
              {col.length > 0 && (
                <ul className="flex flex-col gap-8">
                  {col.map(item => {
                    return (
                      <Item
                        key={item.id}
                        item={item}
                      />
                    )
                  })}
                </ul>
              )}
            </li>
          ))}

        </ul>

      )}

    </section>
  )
}
```

## What
