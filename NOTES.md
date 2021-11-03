### Destructuring Examples

```jsx
const Hero = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useHeroQuery()
```
