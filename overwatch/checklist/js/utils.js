String.prototype.capitalize = function() {
  return this.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });
}
// let getLootboxTotal = (lootbox) => {
//   let total = 0
//   let n = 0
//   // Loop skins/emotes/victory
//   Object.keys(lootbox).forEach((category) => {
//     if (category === 'total') return;
//     console.log('foreach', category, n, total)
//     // Add to the total the categories value
//     total += getCategoryTotal(lootbox, category)
//   })
//   return total
// }
// let getCategoryTotal = (lootbox, category) => {
//   let total = 0
//   console.log('lootbox', lootbox);
//   console.log('category', category);
//   console.log('items', category.items);
//   if (!(lootbox[category].items instanceof Array)) return 0;
//   lootbox[category].items.forEach((item) => {
//     if (item.owned) return;
//     total += item.price
//   })
//   return total
// }
