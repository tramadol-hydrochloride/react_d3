D3 examples from the book [Interactive Data Visualization for the Web](https://www.oreilly.com/library/view/interactive-data-visualization/9781449340223/)

implemented on React

---

## Scale

```js
d3.scaleBand
```

Ordinal scale used for ordinal data, usually categories with some inherent order to them, such as: 
- grade B, grade A, grade AA
- freshman, sophomore, junior, senior 
```
.domain(["freshman", "sophomore", "junior", "senior"])
.domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
```

```js
d3.range(10)
# returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## Transition

When the component get the new props, React re-renders instantly before showing some transition effect.

Solve this by rendering the component from state instead of props and keeping that state in sync.

(https://swizec.com/blog/declarative-d3-transitions-react/swizec/8323)



