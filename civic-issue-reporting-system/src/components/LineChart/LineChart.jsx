    import { Line } from 'react-chartjs-2';
    import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title
    } from 'chart.js';

    // Register chart.js components
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title
    );

    const LineChart = ({title, data}) => {

    // Sample chart options
    const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        position: 'top',
        labels: {
            color: '#1f2937',
        },
        },
    },
        title: {
        display: true,
        text: title,
        font: {
            size: 16,
            weight: "bold",
        },
        },
    scales: {
        x: {
        ticks: { color: '#6b7280' },
        },
        y: {
        ticks: { color: '#6b7280' },
        },
    },
    };

    return (
        <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] mb-10">
        {title && (
            <h2 className="text-lg font-semibold text-gray-500 mb-4">{title}</h2>
        )}
        <Line data={data} options={options} />
        </div>
    );
    };

    export default LineChart;
