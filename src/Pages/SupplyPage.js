import { Grid } from "@mui/material";
import AreaChart from "../Components/AreaChart";

export default function SupplyPage() {
  const dates = [
    "2022-05-16",
    "2022-05-23",
    "2022-05-30",
    "2022-06-06",
    "2022-06-13",
    "2022-06-20",
    "2022-06-27",
    "2022-07-04",
    "2022-07-11",
    "2022-07-18",
    "2022-07-25",
    "2022-08-01",
    "2022-08-08",
    "2022-08-15",
    "2022-08-22",
    "2022-08-29",
    "2022-09-05",
    "2022-09-12",
    "2022-09-19",
    "2022-09-26",
    "2022-10-03",
    "2022-10-10",
    "2022-10-17",
    "2022-10-24",
    "2022-10-31",
    "2022-11-07",
    "2022-11-14",
    "2022-11-21",
    "2022-11-28",
    "2022-12-05",
    "2022-12-12",
    "2022-12-19",
    "2022-12-26",
    "2023-01-02",
    "2023-01-09",
    "2023-01-16",
    "2023-01-23",
    "2023-01-30",
    "2023-02-06",
    "2023-02-13",
    "2023-02-20",
    "2023-02-27",
    "2023-03-06",
    "2023-03-13",
    "2023-03-20",
    "2023-03-27",
    "2023-04-03",
    "2023-04-10",
    "2023-04-17",
    "2023-04-24",
    "2023-05-01",
    "2023-05-08",
    "2023-05-15",
    "2023-05-22",
    "2023-05-29",
    "2023-06-05",
    "2023-06-12",
    "2023-06-19",
    "2023-06-26",
    "2023-07-03",
    "2023-07-10",
    "2023-07-17",
    "2023-07-24",
    "2023-07-31",
    "2023-08-07",
    "2023-08-14",
    "2023-08-21",
    "2023-08-28",
    "2023-09-04",
    "2023-09-11",
    "2023-09-18",
    "2023-09-25",
    "2023-10-02",
    "2023-10-09",
    "2023-10-16",
    "2023-10-23",
    "2023-10-30",
    "2023-11-06",
    "2023-11-13",
    "2023-11-20",
    "2023-11-27",
    "2023-12-04",
    "2023-12-11",
    "2023-12-18",
    "2023-12-25",
    "2024-01-01",
    "2024-01-08",
    "2024-01-15",
    "2024-01-22",
    "2024-01-29",
    "2024-02-05",
    "2024-02-12",
    "2024-02-19",
    "2024-02-26",
    "2024-03-04",
    "2024-03-11",
    "2024-03-18",
    "2024-03-25",
    "2024-04-01",
    "2024-04-08",
    "2024-04-15",
    "2024-04-22",
    "2024-04-29",
  ];
  const CommunityPool = [
    270000000, 270000000, 270000000, 270000000, 270000000, 270000000, 270000000,
    270000000, 270000000, 270000000, 270000000, 270000000, 270000000, 270000000,
    270000000, 270000000, 270000000, 270000000, 270000000, 270000000, 270000000,
    270000000, 270000000, 270000000, 270000000, 270000000, 270000000, 270000000,
    270000000, 270000000, 270000000, 270000000, 270000000, 270000000, 270000000,
    270000000, 270000000, 270000000, 270000000, 270000000, 270000000, 270000000,
    270000000, 270000000, 270000000, 270000000, 270000000, 270000000, 270000000,
    270000000, 270000000, 270000000, 270000000, 270000000, 270000000, 270000000,
    270000000, 270000000, 270000000, 270000000, 270000000, 270000000, 270000000,
    270000000, 270000000, 270000000, 270000000, 270000000, 270000000, 270000000,
    270000000, 270000000, 270000000, 270000000, 270000000, 270000000, 270000000,
    270000000, 270000000, 270000000, 270000000, 270000000, 270000000, 270000000,
    270000000, 270000000, 270000000, 270000000, 270000000, 270000000, 270000000,
    270000000, 270000000, 270000000, 270000000, 270000000, 270000000, 270000000,
    270000000, 270000000, 270000000, 270000000, 270000000,
  ];
  const Devs = [
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000,
  ];
  const Pre_Lunc = [
    105000000, 105000000, 105000000, 105000000, 105000000, 105000000, 105000000,
    105000000, 105000000, 105000000, 105000000, 105000000, 105000000, 105000000,
    105000000, 105000000, 105000000, 105000000, 105000000, 105000000, 105000000,
    105000000, 105000000, 108062500, 111125000, 114187500, 117250000, 120312500,
    123375000, 126437500, 129500000, 132562500, 135625000, 138687500, 141750000,
    144812500, 147875000, 150937500, 154000000, 157062500, 160125000, 163187500,
    166250000, 169312500, 172375000, 175437500, 178500000, 181562500, 184625000,
    187687500, 190750000, 193812500, 196875000, 199937500, 203000000, 206062500,
    209125000, 212187500, 215250000, 218312500, 221375000, 224437500, 227500000,
    230562500, 233625000, 236687500, 239750000, 242812500, 245875000, 248937500,
    252000000, 255062500, 258125000, 261187500, 264250000, 267312500, 270375000,
    273437500, 276500000, 279562500, 282625000, 285687500, 288750000, 291812500,
    294875000, 297937500, 301000000, 304062500, 307125000, 310187500, 313250000,
    316312500, 319375000, 322437500, 325500000, 328562500, 331625000, 334687500,
    337750000, 340812500, 343875000, 346937500, 350000000,
  ];
  const Pre_AUST = [
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30875000, 31750000, 32625000, 33500000, 34375000,
    35250000, 36125000, 37000000, 37875000, 38750000, 39625000, 40500000,
    41375000, 42250000, 43125000, 44000000, 44875000, 45750000, 46625000,
    47500000, 48375000, 49250000, 50125000, 51000000, 51875000, 52750000,
    53625000, 54500000, 55375000, 56250000, 57125000, 58000000, 58875000,
    59750000, 60625000, 61500000, 62375000, 63250000, 64125000, 65000000,
    65875000, 66750000, 67625000, 68500000, 69375000, 70250000, 71125000,
    72000000, 72875000, 73750000, 74625000, 75500000, 76375000, 77250000,
    78125000, 79000000, 79875000, 80750000, 81625000, 82500000, 83375000,
    84250000, 85125000, 86000000, 86875000, 87750000, 88625000, 89500000,
    90375000, 91250000, 92125000, 93000000, 93875000, 94750000, 95625000,
    96500000, 97375000, 98250000, 99125000, 100000000,
  ];
  const Post_Lunc = [
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30000000, 30000000, 30000000, 30000000, 30000000,
    30000000, 30000000, 30875000, 31750000, 32625000, 33500000, 34375000,
    35250000, 36125000, 37000000, 37875000, 38750000, 39625000, 40500000,
    41375000, 42250000, 43125000, 44000000, 44875000, 45750000, 46625000,
    47500000, 48375000, 49250000, 50125000, 51000000, 51875000, 52750000,
    53625000, 54500000, 55375000, 56250000, 57125000, 58000000, 58875000,
    59750000, 60625000, 61500000, 62375000, 63250000, 64125000, 65000000,
    65875000, 66750000, 67625000, 68500000, 69375000, 70250000, 71125000,
    72000000, 72875000, 73750000, 74625000, 75500000, 76375000, 77250000,
    78125000, 79000000, 79875000, 80750000, 81625000, 82500000, 83375000,
    84250000, 85125000, 86000000, 86875000, 87750000, 88625000, 89500000,
    90375000, 91250000, 92125000, 93000000, 93875000, 94750000, 95625000,
    96500000, 97375000, 98250000, 99125000, 100000000,
  ];
  const Post_AUST = [
    45000000, 45000000, 45000000, 45000000, 45000000, 45000000, 45000000,
    45000000, 45000000, 45000000, 45000000, 45000000, 45000000, 45000000,
    45000000, 45000000, 45000000, 45000000, 45000000, 45000000, 45000000,
    45000000, 45000000, 46312500, 47625000, 48937500, 50250000, 51562500,
    52875000, 54187500, 55500000, 56812500, 58125000, 59437500, 60750000,
    62062500, 63375000, 64687500, 66000000, 67312500, 68625000, 69937500,
    71250000, 72562500, 73875000, 75187500, 76500000, 77812500, 79125000,
    80437500, 81750000, 83062500, 84375000, 85687500, 87000000, 88312500,
    89625000, 90937500, 92250000, 93562500, 94875000, 96187500, 97500000,
    98812500, 100125000, 101437500, 102750000, 104062500, 105375000, 106687500,
    108000000, 109312500, 110625000, 111937500, 113250000, 114562500, 115875000,
    117187500, 118500000, 119812500, 121125000, 122437500, 123750000, 125062500,
    126375000, 127687500, 129000000, 130312500, 131625000, 132937500, 134250000,
    135562500, 136875000, 138187500, 139500000, 140812500, 142125000, 143437500,
    144750000, 146062500, 147375000, 148687500, 150000000,
  ];

  const packedData = {
    xAxis: dates,
    yAxis: [CommunityPool, Devs, Pre_Lunc, Pre_AUST, Post_Lunc, Post_AUST],
  };

  return (
    <>
      <div className="h2">Supply</div>
      <Grid container spacing={2}>
        <Grid item xs={0} md={2} sx={{ p: 1 }}></Grid>
        <Grid item xs={12} md={8} sx={{ p: 1 }}>
          <AreaChart
            chartTitle="Vesting Schedule"
            chartDataLoad={packedData}
            chartYAxisLabel={[
              "CommunityPool",
              "Devs",
              "Pre_Lunc",
              "Pre_AUST",
              "Post_Lunc",
              "Post_AUST",
            ]}
            chartBackgroundColors={[
              "#6822C7",
              "#CAA7FA",
              "#283593",
              "#A18754",
              "#C77F22",
              "#762894",
            ]}
          ></AreaChart>
        </Grid>
        <Grid item xs={0} md={2} sx={{ p: 1 }}></Grid>
      </Grid>
    </>
  );
}
