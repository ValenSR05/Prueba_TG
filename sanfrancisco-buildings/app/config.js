define([], function () {
  return {
    portalUrl: "https://uvgeomatica.maps.arcgis.com/",
    itemId: "e2e6cd326c3c4aa38097c8d8b2fb3622",
    buildingLayerTitle: "Construcciones",
    heightField: "ALTURAS",
    usageField: "COMUNA",
    yearField: "NPISOS",
    timeline: {
      bin: 5,
      minYear: 1900,
      maxYear: 2020
    },
    noDataColor: "white",
    otherColor: "#FFB55A",
    yearClasses: [{
      minYear: 1,
      maxYear: 2,
      color: "#bd0026",
      label: "<2"
    }, {
      minYear: 3,
      maxYear: 4,
      color: "#f03b20",
      label: "3-4"
    }, {
      minYear: 5,
      maxYear: 6,
      color: "#fd8d3c",
      label: "5-6"
    }, {
      minYear: 7,
      maxYear: 8,
      color: "#feb24c",
      label: "7-8"
    }, {
      minYear: 8,
      maxYear: 9,
      color: "#fed976",
      label: "8-9"
    }, {
      minYear: 9,
      maxYear: 10,
      color: "#ffffb2",
      label: "9-10"
    }],
    heightVariable: {
      stops: [
        { value: 10, color: "#e0ecf4", label: "< 10m" },
        { value: 70, color: "#8856a7", label: "> 70m" }
      ],
      binSize: 10
    },
    usageValues: [{
      value: "Comuna 13",
      color: "#FD7F6F",
      label: "Comuna 13"
    }, {
      value: "Comuna 8",
      color: "#7EB0D5",
      label: "Comuna 8"
    }, {
      value: "Comuna 15",
      color: "#BD7EBE",
      label: "Comuna 15"
    }, {
      value: "Comuna 12",
      color: "#B2E061",
      label: "Comuna 12"
    }]
  }
});
