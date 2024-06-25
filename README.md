# branching bench

Synthetic bench of if-else vs switch-case vs ternary

# prerequisites

Before running benchmark necessary dependencies should be installed:  
`npm i`

# benchmark

`npm start` or `node index.js`  

Each approach will be runned in separate process, after which a summary table with execution statistics and comparisons will be displayed.

# Add new user-defined approaches

To add new approach to be tested and benchmarked, it should fulfil following requirements:  
- Ecmascript module syntax
- named function (will be used in tests and benchmarks as label)
- default exported
- be in separate file inside [approahces](./approaches/) directory
  
Approach will automaticaly be benchmarked in separate process.

Here is an example of correctly disgned approach:
```js
export default function ifElse (value) {
  if (value === 1) return 'one'
  else if (value === 2) return 'two'
  else if (value === 3) return 'three'
  else if (value === 4) return 'four'
  else if (value === 5) return 'five'
  else return 'default'
}

```
