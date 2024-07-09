import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Bar } from 'react-chartjs-2';
import './Financial.css';

const dataSetsTab1 = [
  { label: 'Revenue(₹ in Crore)', data: [2594, 3048, 3520, 3479, 3375], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Profit After Tax (PAT)(₹ in Crore)', data: [106, 260, 210, 97, 35], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'EBITDA(₹ in Crore)', data: [271, 489, 422, 248, 154], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Net Worth(₹ in Crore)', data: [743, 995, 1166, 1244, 1253], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Debt Equity Ratio(₹ in Crore)', data: [1.00, 0.41, 0.25, 0.33, 0.44], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'ROE(%)', data: [15, 25, 19, 8, 0], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
];
const dataSetsTab2 = [
  { label: 'Revenue(₹ in Crore)', data: [1360, 1570, 1973, 2155, 2231], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Profit After Tax (PAT)(₹ in Crore)', data: [77, 188, 186, 130, 103], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'EBITDA(₹ in Crore)', data: [176, 321, 307, 228, 175], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Net Worth(₹ in Crore)', data: [705, 877, 1030, 1114, 1191], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Debt Equity Ratio(times)', data: [0.61, 0.17, 0.06, 0.11, 0.26], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'ROE(%)', data: [11, 18, 19, 12, 6], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
];

const Financial = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const renderCharts = (dataSets) => {
    return dataSets.map((dataset, index) => {
      const data = {
        labels: dataset.years,
        datasets: [
          {
            label: dataset.label,
            backgroundColor: dataset.data.map((_, i) => {
              if (i === dataset.data.length - 1) {
                return 'rgba(88,89,91,1)'; // Different color for the last bar
              } else {
                return 'rgba(164,166,169,1)'; // Same color for other bars
              }
            }),
            borderColor: 'rgba(88,89,91,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(88,89,91,1)',
            hoverBorderColor: 'rgba(88,89,91,1)',
            borderRadius: 10,
            data: dataset.data,
            barThickness: 18,
          },
        ],
      };

      const options = {
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.raw;
              },
            },
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value) => value,
            color: 'black',
            font: {
              weight: 'bold',
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
        layout: {
          padding: {
            left: 20, // Adjust top padding as needed
            right: 55, 
            top:50,
            bottom:40,// Adjust bottom padding as needed
          },
        },
        maintainAspectRatio: false,
        responsive: true, // Ensure chart responsiveness
      };

      return (
        <div key={index} style={{ padding: '8px', height: '400px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h4 style={{ textAlign: 'center', marginBottom: '10px' }}>{dataset.label}</h4>
          <div style={{ flexGrow: 1, minWidth: '300px', width: '90%' }}> {/* Ensure minimum width for responsiveness */}
            <Bar data={data} options={options} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className='marginal'>
      <h2 className='text-center text-2xl font-bold text-[#34434d] py-8'>Financial Highlights</h2>
      <div className='flex justify-center mb-4'>
        <button
          className={`px-4 py-2 mx-2 font-bold border ${activeTab === 'tab1' ? 'bg-[#0098b6] text-[#202128]' : 'bg-[#e2e3e4] text-[#202128] border-[#e2e3e4]'}`}
          onClick={() => setActiveTab('tab1')}
        >
          Consolidated
        </button>
        <button
          className={`px-4 py-2 mx-2 font-bold border ${activeTab === 'tab2' ? 'bg-[#0098b6] text-[#202128]' : 'bg-[#e2e3e4] text-[#202128] border-[#e2e3e4]'}`}
          onClick={() => setActiveTab('tab2')}
        >
          Standalone
        </button>
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        style={{ width: '70%' }} // Adjust the width of the carousel
      >
        {activeTab === 'tab1' ? renderCharts(dataSetsTab1) : renderCharts(dataSetsTab2)}
      </Carousel>
    </div>
  );
};

export default Financial;
