import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js'; // Import Chart.js from node_modules

Chart.register(...registerables); // Register Chart.js components

const CGPAChart = ({ chartId, cgpa, maxCGPA }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['CGPA Scored', 'Remaining'],
        datasets: [{
          data: [cgpa, maxCGPA - cgpa],
          backgroundColor: ['#007bff', '#e9ecef'],
          borderColor: ['#007bff', '#e9ecef'],
          borderWidth: 1
        }]
      },
      options: {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            enabled: true
          },
          legend: {
            display: false
          }
        }
      }
    });

    // Cleanup chart instance on unmount
    return () => {
      chartInstance.destroy();
    };
  }, [cgpa, maxCGPA]);

  return <canvas ref={chartRef}></canvas>;
};

export default CGPAChart;
