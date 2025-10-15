function render(input, values){
  let result = ''
  if (typeof input !== 'object' || typeof values !== 'object') {
      throw new Error('InvalidType')
  }
  for (const key in input) {
      if (typeof input[key] === 'string') {
          let rendered = input[key]
          for (const valueKey in values) {
              rendered = rendered.replace('${' + valueKey + '}', values[valueKey])
          }
          console.log(values)
          console.log(`rendering string for ${key} is ${rendered}`)
          result += `<${key}>${rendered}</${key}>`
      } else {
          if (typeof input[key] === 'object') {
              result += `<${key}>${render(input[key], values)}</${key}>`
          }
      }
  }
  return result
}

module.exports = {
  render
}