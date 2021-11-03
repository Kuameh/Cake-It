### Destructuring Examples

```jsx
const Hero = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useHeroQuery()
```

### Graphql Fragments

```graphql
fragment name on location {
  query
  here
}
```

> Add `...name` to where fragment should be used
