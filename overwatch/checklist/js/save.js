let saveItemStatus = function (element, checked) {
  let lootboxes
  try {
    lootboxes = JSON.parse(localStorage.getItem('lootboxes'))
  } catch (e) {
    modalApp.$set(modalApp, 'currentModal', 'error')
    return console.error(e);
  }
  lootboxes[$(element).attr('lootbox')][$(element).attr('category')].items[Math.round($(element).attr('index'))].owned = checked
  localStorage.setItem('lootboxes', JSON.stringify(lootboxes))
  // app.$set(app, 'lootboxes', lootboxes)
}
