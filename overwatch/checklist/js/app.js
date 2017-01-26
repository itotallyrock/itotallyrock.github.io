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
      if (localStorage.getItem('lootboxes') == null) {
        let checklist = 'https://gist.githack.com/itotallyrock/c681edefec6f03a1e2dfd2b1d1e83657/raw/323b4ed2568fb5295444ee703446961abe5d82d6/itemchecklist.json'
        $.getJSON(checklist).then((lootboxes) => {
          // TODO: Sort lootboxes put checked at the bottom of category and by decending value
          localStorage.setItem('lootboxes', JSON.stringify(lootboxes))

          // Set current page to latest lootbox
          let pages = Object.keys(lootboxes)
          self.currentPage = localStorage.getItem('previousPage') || pages[pages.length - 1]
          self.lootboxes = lootboxes
        }).catch((xhrError) => {
          modalApp.$set(modalApp, 'currentModal', error)
          console.error(xhrError);
        })
      } else {
        let lootboxes = {}
        try {
          lootboxes = JSON.parse(localStorage.getItem('lootboxes'))
        } catch (e) {
          console.error('Error Parsing JSON, resetting saved items', e);
          localStorage.removeItem('lootboxes')
          localStorage.removeItem('previousPage')
          return modalApp.$set(modalApp, 'currentModal', 'error')
        }
        let pages = Object.keys(lootboxes)
        self.currentPage = localStorage.getItem('previousPage') || pages[pages.length - 1]
        self.lootboxes = lootboxes
      }
    }
  }
})
