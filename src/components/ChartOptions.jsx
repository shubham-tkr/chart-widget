const maxRatingRank = 24;

let options = {
  chart: {
    type: "column",
  },
  credits: {
    enabled: false,
  },

  title: {
    useHTML: true,
    style: {
      fontWeight: "bold",
    },
    text: "Ratings",
  },

  plotOptions: {
    series: {
      groupPadding: 0.2,
      pointPadding: 0,
      states: {
        inactive: {
          opacity: 1,
        },
      },
    },
  },

  yAxis: {
    lineColor: "black",
    lineWidth: 0.3,
    tickInterval: 1,
    reversed: true,
    min: 1,
    max: maxRatingRank,
    title: {
      text: "Rank",
    },
  },

  xAxis: {
    lineColor: "black",
    lineWidth: 0.3,
    categories: ["Fitch", "Moodys", "SnP"],
    scrollbar: {
      enabled: false,
    },
  },

  series: [
    {
      name: "Previous",
      color: "grey",
      data: [
        { y: 8, low: maxRatingRank },
        { y: 7, low: maxRatingRank },
        { y: 9, low: maxRatingRank },
      ],
    },
    {
      name: "Current",
      color: "blue",
      data: [
        { y: 7, low: maxRatingRank },
        { y: 6, low: maxRatingRank },
        { y: 7, low: maxRatingRank },
      ],
    },
  ],
};

export const getChartOptions = (data) => {
  const agencies = data.ratings.map(
    (eachAgencyRating) => eachAgencyRating.agency
  );
  const previousData = data.ratings.map((eachAgencyRating) => {
    return { y: eachAgencyRating.previous, low: maxRatingRank };
  });
  const currentData = data.ratings.map((eachAgencyRating) => {
    return { y: eachAgencyRating.current, low: maxRatingRank };
  });

  options.xAxis.categories = agencies;
  options.series[0].data = previousData;
  options.series[1].data = currentData;
  console.log(options);
  return options;
};
