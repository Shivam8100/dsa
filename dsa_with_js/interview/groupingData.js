const obj = [
  { key: "sample 1", data: "Data1" },
  { key: "sample 1", data: "Data1" },
  { key: "sample 2", data: "Data2" },
  { key: "sample 1", data: "Data1" },
  { key: "sample 3", data: "Data1" },
  { key: "sample 4", data: "Data1" },
];

//output
// {
//     'sample 1': [
//       { key: 'sample 1', data: 'Data1' },
//       { key: 'sample 1', data: 'Data1' },
//       { key: 'sample 1', data: 'Data1' }
//     ],
//     'sample 2': [ { key: 'sample 2', data: 'Data2' } ],
//     'sample 3': [ { key: 'sample 3', data: 'Data1' } ],
//     'sample 4': [ { key: 'sample 4', data: 'Data1' } ]
//   }

//solution
let output = {};
obj.forEach((item) => {
  if (output[item.key]) {
    //key available
    output[item.key].push(item);
  } else {
    output[item.key] = [item];
  }
});
console.log(output);
