const barChartData = [
  {
    day: "Sat",
    deposit: 400,
    withdraw: 300,
  },
  {
    day: "Sun",
    deposit: 500,
    withdraw: 400,
  },
  {
    day: "Mon",
    deposit: 1000,
    withdraw: 700,
  },
  {
    day: "Tue",
    deposit: 200,
    withdraw: 500,
  },
  {
    day: "Wed",
    deposit: 300,
    withdraw: 600,
  },
  {
    day: "Thu",
    deposit: 400,
    withdraw: 700,
  },
  {
    day: "Fri",
    deposit: 1200,
    withdraw: 800,
  },
];

export const barChartDataset = {
  labels: barChartData.map((each) => each.day),
  datasets: [
    {
      label: "Deposit",
      data: barChartData.map((each) => each.deposit),
      backgroundColor: "#1814F3",
      borderRadius: 50,
      borderSkipped: false,
      maxBarThickness: 15,
      categoryPercentage: 0.6,
    },
    {
      label: "Withdraw",
      data: barChartData.map((each) => each.withdraw),
      backgroundColor: "#16DBCC",
      borderRadius: 50,
      borderSkipped: false,
      maxBarThickness: 15,
      categoryPercentage: 0.6,
    },
  ],
};

export const barChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  layout: {
    padding: 20,
  },
  plugins: {
    datalabels: false,
    legend: {
      position: "top",
      align: "end",
      labels: {
        usePointStyle: true,
      },
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};

export const pieChartData = [
  {
    category: "Entertainment",
    bgColor: "#343C6A",
    value: 30,
  },
  {
    category: "Bill Expenses",
    bgColor: "#FC7900",
    value: 15,
  },
  {
    category: "Others",
    bgColor: "#1814F3",
    value: 35,
  },
  {
    category: "Investments",
    bgColor: "#FA00FF",
    value: 20,
  },
];

export const pieChartDatasets = {
  labels: pieChartData.map((each) => each.category),
  datasets: [
    {
      label: "expenses",
      data: pieChartData.map((each) => each.value),
      backgroundColor: pieChartData.map((each) => each.bgColor),
      rotation: -60,
      offset: 10,
    },
  ],
};

export const pieChartOptions = {
  layout: {
    padding: 40,
  },
  resizeDelay: 0,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: false,
    datalabels: {
      anchor: "center",
      color: "white",
      font: {
        size: 12,
        weight: "bold",
      },
      labels: {
        category: {
          align: "center",
          formatter: function (_, context) {
            return pieChartData[context.dataIndex].category;
          },
        },
        value: {
          formatter: function (value) {
            return value + "%";
          },

          color: "white",
          align: "top",
        },
      },
    },
  },
};

export const usersData = [
  {
    name: "Arjun",
    role: "CEO",
    image: "/users/1.png",
  },
  {
    name: "Manikanta",
    role: "Developer",
    image: "/users/2.png",
  },
  {
    name: "Pavan",
    role: "Workman",
    image: "/users/3.png",
  },
];

export const balanceHistoryData = [
  {
    month: "Jul",
    balance: 50,
  },
  {
    month: "Aug",
    balance: 600,
  },
  {
    month: "Sep",
    balance: 300,
  },
  {
    month: "Oct",
    balance: 1200,
  },
  {
    month: "Nov",
    balance: 700,
  },
  {
    month: "Dec",
    balance: 900,
  },
  {
    month: "Jan",
    balance: 400,
  },
];
