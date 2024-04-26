import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, Title, Tooltip, Legend, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js';
Chart.register(Title, Tooltip, Legend, PointElement, CategoryScale, LinearScale, LineElement);

const ChartComponent = () => {
  let dataX=[
    {
      "id": 2,
      "Label": "x2",
      "RandomNumber": "26.90030559606344"
    },
    {
      "id": 3,
      "Label": "x3",
      "RandomNumber": "550.1128154008304"
    },
    {
      "id": 4,
      "Label": "x4",
      "RandomNumber": "435.8870702256586"
    },
    {
      "id": 5,
      "Label": "x5",
      "RandomNumber": "420.9474342854015"
    },
    {
      "id": 6,
      "Label": "x6",
      "RandomNumber": "331.00448618287027"
    },
    {
      "id": 7,
      "Label": "x7",
      "RandomNumber": "205.44398540380465"
    },
    {
      "id": 8,
      "Label": "x8",
      "RandomNumber": "619.651695384313"
    },
    {
      "id": 9,
      "Label": "x9",
      "RandomNumber": "300.35501900084864"
    },
    {
      "id": 10,
      "Label": "x10",
      "RandomNumber": "267.56044782776377"
    },
    {
      "id": 11,
      "Label": "x11",
      "RandomNumber": "621.5126989365256"
    },
    {
      "id": 12,
      "Label": "x12",
      "RandomNumber": "529.612952182762"
    },
    {
      "id": 13,
      "Label": "x13",
      "RandomNumber": "135.44536539958864"
    },
    {
      "id": 14,
      "Label": "x14",
      "RandomNumber": "514.0645431444807"
    },
    {
      "id": 15,
      "Label": "x15",
      "RandomNumber": "185.25542578126837"
    },
    {
      "id": 16,
      "Label": "x16",
      "RandomNumber": "785.5498126688568"
    },
    {
      "id": 17,
      "Label": "x17",
      "RandomNumber": "854.1213173468493"
    },
    {
      "id": 18,
      "Label": "x18",
      "RandomNumber": "494.7426005445459"
    },
    {
      "id": 19,
      "Label": "x19",
      "RandomNumber": "846.7149238721105"
    },
    {
      "id": 20,
      "Label": "x20",
      "RandomNumber": "80.56583153205193"
    },
    {
      "id": 21,
      "Label": "x21",
      "RandomNumber": "505.74084403158224"
    },
    {
      "id": 22,
      "Label": "x22",
      "RandomNumber": "66.22121788249123"
    },
    {
      "id": 23,
      "Label": "x23",
      "RandomNumber": "428.69420526979206"
    },
    {
      "id": 24,
      "Label": "x24",
      "RandomNumber": "97.43438474495194"
    },
    {
      "id": 25,
      "Label": "x25",
      "RandomNumber": "128.03281172957617"
    },
    {
      "id": 26,
      "Label": "x26",
      "RandomNumber": "597.1485636696171"
    },
    {
      "id": 27,
      "Label": "x27",
      "RandomNumber": "226.78598860363164"
    },
    {
      "id": 28,
      "Label": "x28",
      "RandomNumber": "107.83873862567299"
    },
    {
      "id": 29,
      "Label": "x29",
      "RandomNumber": "221.08590086348914"
    },
    {
      "id": 30,
      "Label": "x30",
      "RandomNumber": "350.476458718296"
    },
    {
      "id": 31,
      "Label": "x31",
      "RandomNumber": "468.31969709771795"
    },
    {
      "id": 32,
      "Label": "x32",
      "RandomNumber": "202.54148303870036"
    },
    {
      "id": 33,
      "Label": "x33",
      "RandomNumber": "640.7663184896999"
    },
    {
      "id": 34,
      "Label": "x34",
      "RandomNumber": "483.5867657161999"
    },
    {
      "id": 35,
      "Label": "x35",
      "RandomNumber": "505.7314832985306"
    },
    {
      "id": 36,
      "Label": "x36",
      "RandomNumber": "387.5057584674407"
    },
    {
      "id": 37,
      "Label": "x37",
      "RandomNumber": "793.8438169871355"
    },
    {
      "id": 38,
      "Label": "x38",
      "RandomNumber": "580.4241746989288"
    },
    {
      "id": 39,
      "Label": "x39",
      "RandomNumber": "163.13629990381156"
    },
    {
      "id": 40,
      "Label": "x40",
      "RandomNumber": "701.0515942605491"
    },
    {
      "id": 41,
      "Label": "x41",
      "RandomNumber": "964.5865290091659"
    },
    {
      "id": 42,
      "Label": "x42",
      "RandomNumber": "500.5083528090465"
    },
    {
      "id": 43,
      "Label": "x43",
      "RandomNumber": "889.6305438821988"
    },
    {
      "id": 44,
      "Label": "x44",
      "RandomNumber": "342.27203901843853"
    },
    {
      "id": 45,
      "Label": "x45",
      "RandomNumber": "567.5769835000816"
    },
    {
      "id": 46,
      "Label": "x46",
      "RandomNumber": "428.1184173328139"
    },
    {
      "id": 47,
      "Label": "x47",
      "RandomNumber": "437.31051576377223"
    },
    {
      "id": 48,
      "Label": "x48",
      "RandomNumber": "776.7826258121032"
    },
    {
      "id": 49,
      "Label": "x49",
      "RandomNumber": "536.0685693241587"
    },
    {
      "id": 50,
      "Label": "x50",
      "RandomNumber": "953.7884847179217"
    },
    {
      "id": 51,
      "Label": "x51",
      "RandomNumber": "544.6639519879541"
    },
    {
      "id": 52,
      "Label": "x52",
      "RandomNumber": "83.01282735274977"
    },
    {
      "id": 53,
      "Label": "x53",
      "RandomNumber": "366.9760592733454"
    },
    {
      "id": 54,
      "Label": "x54",
      "RandomNumber": "850.9996535004972"
    },
    {
      "id": 55,
      "Label": "x55",
      "RandomNumber": "406.86876800490285"
    },
    {
      "id": 56,
      "Label": "x56",
      "RandomNumber": "28.17516352895474"
    },
    {
      "id": 57,
      "Label": "x57",
      "RandomNumber": "247.93006175835598"
    },
    {
      "id": 58,
      "Label": "x58",
      "RandomNumber": "68.07722636621772"
    },
    {
      "id": 59,
      "Label": "x59",
      "RandomNumber": "993.8581594098516"
    },
    {
      "id": 60,
      "Label": "x60",
      "RandomNumber": "970.6097330637964"
    },
    {
      "id": 61,
      "Label": "x61",
      "RandomNumber": "800.4580927814542"
    },
    {
      "id": 62,
      "Label": "x62",
      "RandomNumber": "602.215304284062"
    },
    {
      "id": 63,
      "Label": "x63",
      "RandomNumber": "765.1949005912298"
    },
    {
      "id": 64,
      "Label": "x64",
      "RandomNumber": "170.05622113759375"
    },
    {
      "id": 65,
      "Label": "x65",
      "RandomNumber": "293.7302085876203"
    },
    {
      "id": 66,
      "Label": "x66",
      "RandomNumber": "524.5428084250639"
    },
    {
      "id": 67,
      "Label": "x67",
      "RandomNumber": "357.26765684163615"
    },
    {
      "id": 68,
      "Label": "x68",
      "RandomNumber": "46.63328628015465"
    },
    {
      "id": 69,
      "Label": "x69",
      "RandomNumber": "983.1702919118555"
    },
    {
      "id": 70,
      "Label": "x70",
      "RandomNumber": "441.9135644354919"
    },
    {
      "id": 71,
      "Label": "x71",
      "RandomNumber": "504.49643893977344"
    },
    {
      "id": 72,
      "Label": "x72",
      "RandomNumber": "324.21777621716416"
    },
    {
      "id": 73,
      "Label": "x73",
      "RandomNumber": "260.4850079943899"
    },
    {
      "id": 74,
      "Label": "x74",
      "RandomNumber": "387.5029954354416"
    },
    {
      "id": 75,
      "Label": "x75",
      "RandomNumber": "832.1848827348664"
    },
    {
      "id": 76,
      "Label": "x76",
      "RandomNumber": "737.0103092308258"
    },
    {
      "id": 77,
      "Label": "x77",
      "RandomNumber": "379.8313563746958"
    },
    {
      "id": 78,
      "Label": "x78",
      "RandomNumber": "14.00431935785608"
    },
    {
      "id": 79,
      "Label": "x79",
      "RandomNumber": "797.607534093561"
    },
    {
      "id": 80,
      "Label": "x80",
      "RandomNumber": "270.1194087987049"
    },
    {
      "id": 81,
      "Label": "x81",
      "RandomNumber": "583.1022036405055"
    },
    {
      "id": 82,
      "Label": "x82",
      "RandomNumber": "26.52539090784306"
    },
    {
      "id": 83,
      "Label": "x83",
      "RandomNumber": "662.5398172490575"
    },
    {
      "id": 84,
      "Label": "x84",
      "RandomNumber": "388.13590244740817"
    },
    {
      "id": 85,
      "Label": "x85",
      "RandomNumber": "497.5767249357781"
    },
    {
      "id": 86,
      "Label": "x86",
      "RandomNumber": "415.4909315373125"
    },
    {
      "id": 87,
      "Label": "x87",
      "RandomNumber": "351.5210294003388"
    },
    {
      "id": 88,
      "Label": "x88",
      "RandomNumber": "551.4269274190948"
    },
    {
      "id": 89,
      "Label": "x89",
      "RandomNumber": "972.93777918495"
    },
    {
      "id": 90,
      "Label": "x90",
      "RandomNumber": "113.66343902283339"
    },
    {
      "id": 91,
      "Label": "x91",
      "RandomNumber": "313.94526990128384"
    },
    {
      "id": 92,
      "Label": "x92",
      "RandomNumber": "42.75591210549475"
    },
    {
      "id": 93,
      "Label": "x93",
      "RandomNumber": "738.6613588622795"
    },
    {
      "id": 94,
      "Label": "x94",
      "RandomNumber": "657.8548752713849"
    },
    {
      "id": 95,
      "Label": "x95",
      "RandomNumber": "215.42111065355368"
    },
    {
      "id": 96,
      "Label": "x96",
      "RandomNumber": "417.3366867551418"
    },
    {
      "id": 97,
      "Label": "x97",
      "RandomNumber": "644.1980922140468"
    },
    {
      "id": 98,
      "Label": "x98",
      "RandomNumber": "661.8198453887259"
    },
    {
      "id": 99,
      "Label": "x99",
      "RandomNumber": "171.30665635028691"
    },
    {
      "id": 100,
      "Label": "x100",
      "RandomNumber": "881.7705835128"
    },
    {
      "id": "1",
      "Label": "x1",
      "RandomNumber": "145.12451"
    }
  ]
  let dataY=[
    {
      "id": 1,
      "Label": "y1",
      "RandomNumber": "551.2471046720009"
    },
    {
      "id": 2,
      "Label": "y2",
      "RandomNumber": "708.4396747954867"
    },
    {
      "id": 3,
      "Label": "y3",
      "RandomNumber": "291.6138341740314"
    },
    {
      "id": 4,
      "Label": "y4",
      "RandomNumber": "511.31677759246537"
    },
    {
      "id": 5,
      "Label": "y5",
      "RandomNumber": "893.0540073933071"
    },
    {
      "id": 6,
      "Label": "y6",
      "RandomNumber": "896.3967958445046"
    },
    {
      "id": 7,
      "Label": "y7",
      "RandomNumber": "126.45972515337242"
    },
    {
      "id": 8,
      "Label": "y8",
      "RandomNumber": "208.03563526004856"
    },
    {
      "id": 9,
      "Label": "y9",
      "RandomNumber": "52.41573609752905"
    },
    {
      "id": 10,
      "Label": "y10",
      "RandomNumber": "441.36903380698584"
    },
    {
      "id": 11,
      "Label": "y11",
      "RandomNumber": "30.84633466768839"
    },
    {
      "id": 12,
      "Label": "y12",
      "RandomNumber": "457.37639117031637"
    },
    {
      "id": 13,
      "Label": "y13",
      "RandomNumber": "649.494903567146"
    },
    {
      "id": 14,
      "Label": "y14",
      "RandomNumber": "279.2087953653273"
    },
    {
      "id": 15,
      "Label": "y15",
      "RandomNumber": "676.5786470781511"
    },
    {
      "id": 16,
      "Label": "y16",
      "RandomNumber": "591.2719545989345"
    },
    {
      "id": 17,
      "Label": "y17",
      "RandomNumber": "24.9579004947882"
    },
    {
      "id": 18,
      "Label": "y18",
      "RandomNumber": "559.2952339028911"
    },
    {
      "id": 19,
      "Label": "y19",
      "RandomNumber": "259.99319446055796"
    },
    {
      "id": 20,
      "Label": "y20",
      "RandomNumber": "415.6860958130596"
    },
    {
      "id": 21,
      "Label": "y21",
      "RandomNumber": "284.24155668954745"
    },
    {
      "id": 22,
      "Label": "y22",
      "RandomNumber": "693.4447803946833"
    },
    {
      "id": 23,
      "Label": "y23",
      "RandomNumber": "441.01326395306876"
    },
    {
      "id": 24,
      "Label": "y24",
      "RandomNumber": "157.71087073648832"
    },
    {
      "id": 25,
      "Label": "y25",
      "RandomNumber": "545.1043690138129"
    },
    {
      "id": 26,
      "Label": "y26",
      "RandomNumber": "780.5344497468557"
    },
    {
      "id": 27,
      "Label": "y27",
      "RandomNumber": "307.0571688438036"
    },
    {
      "id": 28,
      "Label": "y28",
      "RandomNumber": "222.73592604824924"
    },
    {
      "id": 29,
      "Label": "y29",
      "RandomNumber": "388.5832862980931"
    },
    {
      "id": 30,
      "Label": "y30",
      "RandomNumber": "936.44726621057"
    },
    {
      "id": 31,
      "Label": "y31",
      "RandomNumber": "976.0194270504609"
    },
    {
      "id": 32,
      "Label": "y32",
      "RandomNumber": "672.7112922369008"
    },
    {
      "id": 33,
      "Label": "y33",
      "RandomNumber": "902.9312744298596"
    },
    {
      "id": 34,
      "Label": "y34",
      "RandomNumber": "845.9051204218861"
    },
    {
      "id": 35,
      "Label": "y35",
      "RandomNumber": "378.61604728756026"
    },
    {
      "id": 36,
      "Label": "y36",
      "RandomNumber": "93.12479186285252"
    },
    {
      "id": 37,
      "Label": "y37",
      "RandomNumber": "653.7574916210126"
    },
    {
      "id": 38,
      "Label": "y38",
      "RandomNumber": "558.2829216260625"
    },
    {
      "id": 39,
      "Label": "y39",
      "RandomNumber": "362.2031982995155"
    },
    {
      "id": 40,
      "Label": "y40",
      "RandomNumber": "225.8294503349921"
    },
    {
      "id": 41,
      "Label": "y41",
      "RandomNumber": "407.1133964598724"
    },
    {
      "id": 42,
      "Label": "y42",
      "RandomNumber": "469.4713084504699"
    },
    {
      "id": 43,
      "Label": "y43",
      "RandomNumber": "269.9663426728102"
    },
    {
      "id": 44,
      "Label": "y44",
      "RandomNumber": "292.50098145120717"
    },
    {
      "id": 45,
      "Label": "y45",
      "RandomNumber": "458.22871292365494"
    },
    {
      "id": 46,
      "Label": "y46",
      "RandomNumber": "860.6733790339796"
    },
    {
      "id": 47,
      "Label": "y47",
      "RandomNumber": "586.6666515633536"
    },
    {
      "id": 48,
      "Label": "y48",
      "RandomNumber": "284.2043745697776"
    },
    {
      "id": 49,
      "Label": "y49",
      "RandomNumber": "278.6995291169777"
    },
    {
      "id": 50,
      "Label": "y50",
      "RandomNumber": "455.1674534464248"
    },
    {
      "id": 51,
      "Label": "y51",
      "RandomNumber": "206.20493426038254"
    },
    {
      "id": 52,
      "Label": "y52",
      "RandomNumber": "202.17733233203006"
    },
    {
      "id": 53,
      "Label": "y53",
      "RandomNumber": "514.5210247576244"
    },
    {
      "id": 54,
      "Label": "y54",
      "RandomNumber": "88.14213941202387"
    },
    {
      "id": 55,
      "Label": "y55",
      "RandomNumber": "484.1019468192349"
    },
    {
      "id": 56,
      "Label": "y56",
      "RandomNumber": "362.81403617544555"
    },
    {
      "id": 57,
      "Label": "y57",
      "RandomNumber": "707.9789351938555"
    },
    {
      "id": 58,
      "Label": "y58",
      "RandomNumber": "746.9994768789026"
    },
    {
      "id": 59,
      "Label": "y59",
      "RandomNumber": "691.4018289339085"
    },
    {
      "id": 60,
      "Label": "y60",
      "RandomNumber": "689.4912333411592"
    },
    {
      "id": 61,
      "Label": "y61",
      "RandomNumber": "374.22652402477934"
    },
    {
      "id": 62,
      "Label": "y62",
      "RandomNumber": "668.4666699305322"
    },
    {
      "id": 63,
      "Label": "y63",
      "RandomNumber": "340.5088152928611"
    },
    {
      "id": 64,
      "Label": "y64",
      "RandomNumber": "573.2210759990062"
    },
    {
      "id": 65,
      "Label": "y65",
      "RandomNumber": "326.4813509068096"
    },
    {
      "id": 66,
      "Label": "y66",
      "RandomNumber": "445.6999042142685"
    },
    {
      "id": 67,
      "Label": "y67",
      "RandomNumber": "62.467401899109326"
    },
    {
      "id": 68,
      "Label": "y68",
      "RandomNumber": "243.43274676215378"
    },
    {
      "id": 69,
      "Label": "y69",
      "RandomNumber": "971.631003567394"
    },
    {
      "id": 70,
      "Label": "y70",
      "RandomNumber": "231.3536201507189"
    },
    {
      "id": 71,
      "Label": "y71",
      "RandomNumber": "691.7860334363829"
    },
    {
      "id": 72,
      "Label": "y72",
      "RandomNumber": "650.8263813555259"
    },
    {
      "id": 73,
      "Label": "y73",
      "RandomNumber": "724.2152002980446"
    },
    {
      "id": 74,
      "Label": "y74",
      "RandomNumber": "475.61352202379686"
    },
    {
      "id": 75,
      "Label": "y75",
      "RandomNumber": "597.067110827261"
    },
    {
      "id": 76,
      "Label": "y76",
      "RandomNumber": "67.90245450889351"
    },
    {
      "id": 77,
      "Label": "y77",
      "RandomNumber": "73.48957568441118"
    },
    {
      "id": 78,
      "Label": "y78",
      "RandomNumber": "199.77705027078125"
    },
    {
      "id": 79,
      "Label": "y79",
      "RandomNumber": "152.7091360115325"
    },
    {
      "id": 80,
      "Label": "y80",
      "RandomNumber": "101.00424023686324"
    },
    {
      "id": 81,
      "Label": "y81",
      "RandomNumber": "130.1645707442453"
    },
    {
      "id": 82,
      "Label": "y82",
      "RandomNumber": "553.7244540758459"
    },
    {
      "id": 83,
      "Label": "y83",
      "RandomNumber": "188.62701009895437"
    },
    {
      "id": 84,
      "Label": "y84",
      "RandomNumber": "952.1491417881771"
    },
    {
      "id": 85,
      "Label": "y85",
      "RandomNumber": "681.9301670286192"
    },
    {
      "id": 86,
      "Label": "y86",
      "RandomNumber": "541.4786536864115"
    },
    {
      "id": 87,
      "Label": "y87",
      "RandomNumber": "707.4734202070898"
    },
    {
      "id": 88,
      "Label": "y88",
      "RandomNumber": "264.6227842815609"
    },
    {
      "id": 89,
      "Label": "y89",
      "RandomNumber": "926.798958569474"
    },
    {
      "id": 90,
      "Label": "y90",
      "RandomNumber": "839.3538647421707"
    },
    {
      "id": 91,
      "Label": "y91",
      "RandomNumber": "726.5931789296092"
    },
    {
      "id": 92,
      "Label": "y92",
      "RandomNumber": "480.7597161293246"
    },
    {
      "id": 93,
      "Label": "y93",
      "RandomNumber": "842.2610826907702"
    },
    {
      "id": 94,
      "Label": "y94",
      "RandomNumber": "745.0075711009349"
    },
    {
      "id": 95,
      "Label": "y95",
      "RandomNumber": "660.6655804932129"
    },
    {
      "id": 96,
      "Label": "y96",
      "RandomNumber": "914.0612917389318"
    },
    {
      "id": 97,
      "Label": "y97",
      "RandomNumber": "634.0318982237872"
    },
    {
      "id": 98,
      "Label": "y98",
      "RandomNumber": "366.57464426775675"
    },
    {
      "id": 99,
      "Label": "y99",
      "RandomNumber": "553.2917285772951"
    },
    {
      "id": 100,
      "Label": "y100",
      "RandomNumber": "197.18419612343672"
    }
  ]
  const xDataFifty = dataX.slice(0, 50).map(item => item.RandomNumber);
  const yDataFifty = dataY.slice(0, 50).map(item =>item.RandomNumber);
  const data = {
    labels: Array.from(Array(50).keys()).map(i => `Data ${i + 1}`),
    datasets: [
      {
        label: 'X Data',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: xDataFifty
      },
      {
        label: 'Y Data',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(192,75,192,0.4)',
        borderColor: 'rgba(192,75,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(192,75,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(192,75,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: yDataFifty
      }
    ]
  };

  return (
    <div style={{paddingLeft:"10%",paddingRight:"10%"}}>
      <h2>Line Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default ChartComponent;