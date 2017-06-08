let sampleData = [
  // Day/Month/Year
  [null, 'KBDShadow#55285', 'R0CK#11386'],
  ['Mon Jan 09 2017 01:34:45 GMT-0600 (Central Standard Time)', 1025, 3042],
  ['Sun Jan 08 2017 01:34:45 GMT-0600 (Central Standard Time)', 986, 3269],
  ['Sat Jan 07 2017 01:34:45 GMT-0600 (Central Standard Time)', 1091, 3188],
  ['Fri Jan 07 2017 08:34:45 GMT-0600 (Central Standard Time)', 2096, 3188],
  ['Fri Jan 06 2017 01:34:45 GMT-0600 (Central Standard Time)', 1196, 3188],
  ['Thu Jan 05 2017 01:34:45 GMT-0600 (Central Standard Time)', 1150, 3421],
  ['Wed Jan 04 2017 01:34:45 GMT-0600 (Central Standard Time)', 1212, 3367],
  ['Tue Jan 03 2017 01:34:45 GMT-0600 (Central Standard Time)', 1117, 3268]
]

let createGraph = (datapoints) => {
  window.chart = Highcharts.chart('graph', {
    chart: {
      type: 'line'
    },
    data: {
      rows: datapoints
    },
    title: {
      text: 'Competitive Skill Rating'
    },
    subtitle: {
      test: 'Based on previous stat retrievals'
    },
    xAxis: {
      tickInverval: 1, // NOTE: Value for time between datapoints
      tickWidth: 0,
      gridLinesWidth: 1,
      labels: {
        align: 'left',
        x: 3,
        y: 3
      }
    },
    yAxis: {
      title: {
        text: 'Skill rating'
      }
    },
    series: [{
        color: '#4a4c4e',
        linewidth: 2,
        marker: {
          radius: 2
        }
      },{
        color: '#9b4dca',
        linewidth: 2,
        marker: {
          radius: 2
        }
      }
    ]
  })
}

$(document).ready(() => {
  $('#submit').on('click', (event) => {
    // TODO: Some form validation
    let battletag = $('#battletag').val()
    $.getJSON('https://owapi.net/api/v3/u/' + encodeURI(battletag.replace('#', '-')) + '/stats').then((json) => {
      let tier = json.us.stats.competitive.overall_stats.tier
      let rank = json.us.stats.competitive.overall_stats.comprank
      // TODO ME
      let data = JSON.parse(localStorage.getItem('statHistory') || '[null, "' + battletag + '"]').push([new Date().toString(), rank])
      alert('Current Comp Skill Rating (' + tier[0].toUpperCase() + tier.substring(1) + '): ' + rank)
    }).catch((err) => {
      // TODO: Failed to fetch stats...
    })
  })
  createGraph(sampleData)
})
