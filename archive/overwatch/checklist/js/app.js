let modalApp = new Vue({
  el: '#modal-app',
  data: {
    modals: [{
      name: 'error',
      title: 'Unexpected Error',
      body: 'There was an error retrieving the item list.  Please try again later.'
    }],
    currentModal: null
  }
})

let app = new Vue({
  el: '#primary-app',
  data: {
    currentPage: 'rooster',
    lootboxes: null
  },
  created: function() {
    this.fetchLists()
  },
  updated: function() {
    let self = this
    try {
      self.lootboxes = JSON.parse(localStorage.getItem('lootboxes'))
    } catch (e) {
      console.error('Error Parsing JSON, resetting saved items', e);
      localStorage.removeItem('lootboxes')
      localStorage.removeItem('previousPage')
      return modalApp.$set(modalApp, 'currentModal', 'error')
    }
    localStorage.setItem('previousPage', this.currentPage)
  },
  methods: {
    fetchLists: function() {
      let self = this
      let checklist = 'https://rawgit.com/itotallyrock/itotallyrock.github.io/master/overwatch/checklist/itemlist.json'
      $.getJSON(checklist).then((lootboxes) => {
        if (localStorage.getItem('lootboxes') == null) {
          // TODO: Sort lootboxes put checked at the bottom of category and by decending value
          localStorage.setItem('lootboxes', JSON.stringify(lootboxes))
        } else {
          let stringified = JSON.stringify(lootboxes)
          if (localStorage.getItem('lootboxes').replace('owned: true', 'owned: false') !== stringified) {
            // File has difference (itemlist has been updated) so delete current
            // TODO: Save current checklist to new list
            localStorage.setItem('lootboxes', stringified)
          }
        }
        try {
          lootboxes = JSON.parse(localStorage.getItem('lootboxes'))
          // Set current page to latest lootbox
          let pages = Object.keys(lootboxes)
          self.currentPage = localStorage.getItem('previousPage') || pages[pages.length - 1]
          self.lootboxes = lootboxes
        } catch (jsonParseError) {
          lootboxes = []
          self.lootboxes = lootboxes
          modalApp.$set(modalApp, 'currentModal', error)
          console.error(jsonParseError)
        }
      }).catch((xhrError) => {
        modalApp.$set(modalApp, 'currentModal', error)
        console.error(xhrError)
      })
    }
  }
})
