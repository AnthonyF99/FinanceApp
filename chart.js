//Income chart
const income = document.getElementById('income-chart');

// Change default options for ALL charts
Chart.defaults.set('plugins.datalabels', {
  color: 'white'
});

Chart.defaults.plugins.legend.display = false;
Chart.defaults.scales.linear.max = 4000;
Chart.defaults.scales.linear.min = 0;

export const chartIncome = new Chart(income, {
  type: 'bar',
  data: {
    labels: ['E-commerce', 'Google Adsense', 'Side Hustle', 'Salary'],
    datasets: [{
      label: 'Income source',
      data: [1500, 2300, 1800, 3000], // Prix des investissements
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      // Ajoute le prix au-dessus des barres
      datalabels: {
        display: true,
        color: 'white', // Couleur des prix
        align: 'end', // Position du label (au-dessus des barres)
        anchor: 'end', // Accrochage au sommet des barres
        formatter: (value) => value + '€', // Format du texte (prix avec €)
        font: {
          weight: 'bold',
          size: 14
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        display:false
      },
      x: {
        grid: {
          display: false // Cache la grille de l'axe X
        },
        ticks: {
          display: true, // Les labels seront toujours visibles
          color: 'white',
          maxRotation: 0, // Empêche la rotation
          minRotation: 0  // Empêche la rotation
        }
      }
    }
  },
  plugins: [ChartDataLabels]
});



//Spending chart

const spending = document.getElementById('spending-chart');

export const chartSpending = new Chart(spending, {
  type: 'line',
  data: {
    labels: ['', '', '', ''],
    datasets: [{
        label: '',
        data: [90, 500, 800, 50],
        fill: false,
        borderColor: 'rgb(185, 192, 192)',
        tension: 0.1,
    }]
  },
  options: {
    plugins: {
      // Ajoute le prix au-dessus des barres
      datalabels: {
        display: true,
        color: 'white', // Couleur des prix
        align: 'end', // Position du label (au-dessus des barres)
        anchor: 'end', // Accrochage au sommet des barres
        formatter: (value) => value + '€', // Format du texte (prix avec €)
        font: {
          weight: 'bold',
          size: 14
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        display: false
      }
    }
  }
});

//Income chart

const income2 = document.getElementById('income-line');

new Chart(income2, {
  type: 'line',
  data: {
    labels: ['', '', '', ''],
    datasets: [{
        label: '',
        data: [90, 59, 80, 50],
        fill: false,
        borderColor: 'rgb(185, 192, 192)',
        tension: 0.1,
    }]
  },
  options: {
    plugins: {
      // Ajoute le prix au-dessus des barres
      datalabels: {
        display: true,
        color: 'white', // Couleur des prix
        align: 'end', // Position du label (au-dessus des barres)
        anchor: 'end', // Accrochage au sommet des barres
        formatter: (value) => value + '€', // Format du texte (prix avec €)
        font: {
          weight: 'bold',
          size: 14
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        display: false
      }
    }
  }
});

//Asset chart

const asset = document.getElementById('asset-chart');
export const chartAsset = new Chart(asset, {
  type: 'doughnut',
  data: {
    labels: ['Gold','Stock','Warehouse','Land'],
    datasets: [{
      label:'assets',
      data: [90, 10, 20, 30],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 90, 86)'
      ],
      hoverOffset: 4      
    }]
  }
})