const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

console.time('old');
const oldWayGrouped = inventory.reduce((acc, cur) => {
  if (acc[cur.type]) {
    acc[cur.type].push(cur);
  } else {
    acc[cur.type] = [cur];
  }

  return acc;
}, {});
console.timeEnd('old');

console.time('new');
const newWayGrouped = Object.groupBy(inventory, item => item.type);
console.timeEnd('new');

console.log('old', oldWayGrouped);
console.log('new', newWayGrouped);