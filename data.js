new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'follow-chart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    lineColors: ['orange'],
    data: [
        { year: '2008', value: 0 },
        { year: '2009', value: 9 },
        { year: '2010', value: 5 },
        { year: '2011', value: 3 },
        { year: '2012', value: 5 },
        { year: '2013', value: 8 },
        { year: '2014', value: 8 },
        { year: '2015', value: 5 },
        { year: '2016', value: 6 },
        { year: '2017', value: 13 },
        { year: '2018', value: 12 },
        { year: '2019', value: 8 },
        { year: '2020', value: 17 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});

Morris.Donut({
    element: 'donut-example',
    colors: ['orange', '#0072f2', '#f24a26'],
    labelColor: "#ffffff",
    data: [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales", value: 30},
      {label: "Mail-Order Sales", value: 20}
    ]
});




