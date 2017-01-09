let sampleData = [
  // Day/Month/Year
  [null, 'KBDShadow#55285', 'R0CK#11386'],
  ['1/1/17', 1025, 3042],
  ['2/1/17', 986, 3269],
  ['3/1/17', 1091, 3188],
  ['4/1/17', 1150, 3421],
  ['6/1/17', 1212, 3367],
  ['9/1/17', 1117, 3268]
]

let createGraph = (datapoints) => {
  let chart = Highcharts.chart('graph', {
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
      alert('Current Comp Skill Rating (' + tier[0].toUpperCase() + tier.substring(1) + '): ' + rank)
    }).catch((err) => {
      // TODO: Failed to fetch stats...
    })
  })
  createGraph(sampleData)
})
