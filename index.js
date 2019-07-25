const ctx = document.getElementById('myChart').getContext('2d')
const random = document.getElementById('random')
const columns = document.getElementById('columns')

random.addEventListener('click',  () => {
  myChart.data.datasets.map(set => {
    set.data = getRandomData()
  })
  myChart.data.labels = getLabels()
  myChart.update()
})

const getLabels = () => {
  let labels = Array()
  for (i = 0; i < columns.value; i++) {
    labels.push(`Label ${i}`)
  }
  return labels
}

const getRandomNumber = () => (Math.floor(Math.random() * (20)) + 1)

const getRandomData = () => {
  let data = Array()
  for (i = 0; i < columns.value; i++) {
    data.push(getRandomNumber())
  }
  return data
}

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: getLabels(),
        datasets: [{
            label: '# of Votes',
            data: [4, 8, 3],
            stack: 'Group A',
            borderWidth: 1
        }, {
          label: '# of Risas',
          data: [5, 6, 4],
          stack: 'Group A',
          borderWidth: 1
      }]
    },
    options: {
        scales: {
            xAxes: [{
              stacked: true
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                stacked: true
            }]
        }
    }
})