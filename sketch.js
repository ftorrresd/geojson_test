let geoData;

function preload() {
  // Load the GeoJSON data
  // geoData = loadJSON('https://cernbox.cern.ch/remote.php/dav/public-files/mvilDxzTWjIsKUL/dt.json');
  geoData = {
  "crs": {
    "properties": {
      "name": "mapname"
    },
    "type": "name"
  },
  "features": [
    {
      "geometry": {
        "coordinates": [
          [
            [
              212,
              166
            ],
            [
              212,
              133
            ],
            [
              208,
              134
            ],
            [
              208,
              165
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S01_SL1",
        "name": "WM2_MB1_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              219,
              168
            ],
            [
              219,
              131
            ],
            [
              214,
              132
            ],
            [
              214,
              167
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S01_SL2",
        "name": "WM2_MB1_S01_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              226,
              170
            ],
            [
              226,
              129
            ],
            [
              221,
              131
            ],
            [
              221,
              168
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S01_SL3",
        "name": "WM2_MB1_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              238,
              173
            ],
            [
              238,
              126
            ],
            [
              233,
              128
            ],
            [
              233,
              171
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S01_SL1",
        "name": "WM2_MB2_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              244,
              174
            ],
            [
              244,
              125
            ],
            [
              239,
              126
            ],
            [
              239,
              173
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S01_SL2",
        "name": "WM2_MB2_S01_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              251,
              176
            ],
            [
              251,
              123
            ],
            [
              246,
              124
            ],
            [
              246,
              175
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S01_SL3",
        "name": "WM2_MB2_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              263,
              179
            ],
            [
              263,
              120
            ],
            [
              258,
              121
            ],
            [
              258,
              178
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S01_SL1",
        "name": "WM2_MB3_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              269,
              181
            ],
            [
              269,
              118
            ],
            [
              265,
              119
            ],
            [
              265,
              180
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S01_SL2",
        "name": "WM2_MB3_S01_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              276,
              183
            ],
            [
              276,
              116
            ],
            [
              271,
              118
            ],
            [
              271,
              181
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S01_SL3",
        "name": "WM2_MB3_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              288,
              186
            ],
            [
              288,
              113
            ],
            [
              283,
              114
            ],
            [
              283,
              185
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S01_SL1",
        "name": "WM2_MB4_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              295,
              188
            ],
            [
              295,
              111
            ],
            [
              290,
              113
            ],
            [
              290,
              186
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S01_SL3",
        "name": "WM2_MB4_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              212,
              132
            ],
            [
              196,
              104
            ],
            [
              192,
              107
            ],
            [
              207,
              134
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S02_SL1",
        "name": "WM2_MB1_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              219,
              131
            ],
            [
              201,
              99
            ],
            [
              197,
              102
            ],
            [
              214,
              132
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S02_SL2",
        "name": "WM2_MB1_S02_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              226,
              129
            ],
            [
              206,
              94
            ],
            [
              202,
              97
            ],
            [
              221,
              130
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S02_SL3",
        "name": "WM2_MB1_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              237,
              125
            ],
            [
              214,
              85
            ],
            [
              211,
              89
            ],
            [
              232,
              127
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S02_SL1",
        "name": "WM2_MB2_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              244,
              124
            ],
            [
              219,
              81
            ],
            [
              216,
              84
            ],
            [
              239,
              125
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S02_SL2",
        "name": "WM2_MB2_S02_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              251,
              122
            ],
            [
              224,
              76
            ],
            [
              221,
              79
            ],
            [
              246,
              123
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S02_SL3",
        "name": "WM2_MB2_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              262,
              119
            ],
            [
              233,
              67
            ],
            [
              229,
              71
            ],
            [
              258,
              120
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S02_SL1",
        "name": "WM2_MB3_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              269,
              117
            ],
            [
              238,
              62
            ],
            [
              234,
              66
            ],
            [
              264,
              118
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S02_SL2",
        "name": "WM2_MB3_S02_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              276,
              115
            ],
            [
              243,
              57
            ],
            [
              239,
              61
            ],
            [
              271,
              116
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S02_SL3",
        "name": "WM2_MB3_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              287,
              112
            ],
            [
              251,
              49
            ],
            [
              248,
              52
            ],
            [
              283,
              113
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S02_SL1",
        "name": "WM2_MB4_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              294,
              110
            ],
            [
              256,
              44
            ],
            [
              253,
              48
            ],
            [
              289,
              111
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S02_SL3",
        "name": "WM2_MB4_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              195,
              103
            ],
            [
              167,
              87
            ],
            [
              165,
              92
            ],
            [
              192,
              107
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S03_SL1",
        "name": "WM2_MB1_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              200,
              98
            ],
            [
              168,
              80
            ],
            [
              167,
              85
            ],
            [
              197,
              102
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S03_SL2",
        "name": "WM2_MB1_S03_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              205,
              93
            ],
            [
              170,
              73
            ],
            [
              169,
              78
            ],
            [
              202,
              97
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S03_SL3",
        "name": "WM2_MB1_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              214,
              85
            ],
            [
              174,
              62
            ],
            [
              172,
              67
            ],
            [
              210,
              88
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S03_SL1",
        "name": "WM2_MB2_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              218,
              80
            ],
            [
              175,
              55
            ],
            [
              174,
              60
            ],
            [
              215,
              83
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S03_SL2",
        "name": "WM2_MB2_S03_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              223,
              75
            ],
            [
              177,
              48
            ],
            [
              176,
              53
            ],
            [
              220,
              78
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S03_SL3",
        "name": "WM2_MB2_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              232,
              66
            ],
            [
              180,
              37
            ],
            [
              179,
              41
            ],
            [
              228,
              70
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S03_SL1",
        "name": "WM2_MB3_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              237,
              61
            ],
            [
              182,
              30
            ],
            [
              181,
              35
            ],
            [
              233,
              65
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S03_SL2",
        "name": "WM2_MB3_S03_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              242,
              56
            ],
            [
              184,
              23
            ],
            [
              183,
              28
            ],
            [
              238,
              60
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S03_SL3",
        "name": "WM2_MB3_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              250,
              48
            ],
            [
              187,
              12
            ],
            [
              186,
              16
            ],
            [
              247,
              51
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S03_SL1",
        "name": "WM2_MB4_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              255,
              43
            ],
            [
              189,
              5
            ],
            [
              188,
              10
            ],
            [
              251,
              46
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S03_SL3",
        "name": "WM2_MB4_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              166,
              87
            ],
            [
              133,
              87
            ],
            [
              134,
              91
            ],
            [
              165,
              91
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S04_SL1",
        "name": "WM2_MB1_S04_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              168,
              80
            ],
            [
              131,
              80
            ],
            [
              132,
              85
            ],
            [
              167,
              85
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S04_SL2",
        "name": "WM2_MB1_S04_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              170,
              73
            ],
            [
              129,
              73
            ],
            [
              131,
              78
            ],
            [
              168,
              78
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S04_SL3",
        "name": "WM2_MB1_S04_SL3"
      },
      "type": "Feature"
    },
	{
  "geometry": {
    "coordinates": [
      [
        [126, 61],
        [148.325, 61],
        [148.325, 66],
        [128, 66]
      ]
    ],
    "type": "Polygon"
  },
  "properties": {
    "id": "M2_MB2_S04_SL1_Left",
    "name": "M2_MB2_S04_SL1_Left"
  },
  "type": "Feature"
},
{
  "geometry": {
    "coordinates": [
      [
        [150.675, 61],
        [173, 61],
        [171, 66],
        [150.675, 66]
      ]
    ],
    "type": "Polygon"
  },
  "properties": {
    "id": "M2_MB2_S04_SL1_Right",
    "name": "M2_MB2_S04_SL1_Right"
  },
  "type": "Feature"
},
    // {
    //   "geometry": {
    //     "coordinates": [
    //       [
    //         [
    //           173,
    //           61
    //         ],
    //         [
    //           126,
    //           61
    //         ],
    //         [
    //           128,
    //           66
    //         ],
    //         [
    //           171,
    //           66
    //         ]
    //       ]
    //     ],
    //     "type": "Polygon"
    //   },
    //   "properties": {
    //     "id": "WM2_MB2_S04_SL1",
    //     "name": "WM2_MB2_S04_SL1"
    //   },
    //   "type": "Feature"
    // },
    {
      "geometry": {
        "coordinates": [
          [
            [
              174,
              55
            ],
            [
              125,
              55
            ],
            [
              126,
              60
            ],
            [
              173,
              60
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S04_SL2",
        "name": "WM2_MB2_S04_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              176,
              48
            ],
            [
              123,
              48
            ],
            [
              124,
              53
            ],
            [
              175,
              53
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S04_SL3",
        "name": "WM2_MB2_S04_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              179,
              36
            ],
            [
              120,
              36
            ],
            [
              121,
              41
            ],
            [
              178,
              41
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S04_SL1",
        "name": "WM2_MB3_S04_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              181,
              30
            ],
            [
              118,
              30
            ],
            [
              119,
              34
            ],
            [
              180,
              34
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S04_SL2",
        "name": "WM2_MB3_S04_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              183,
              23
            ],
            [
              116,
              23
            ],
            [
              118,
              28
            ],
            [
              181,
              28
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S04_SL3",
        "name": "WM2_MB3_S04_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              186,
              11
            ],
            [
              113,
              11
            ],
            [
              114,
              16
            ],
            [
              185,
              16
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S04L_SL1",
        "name": "WM2_MB4_S04L_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              188,
              4
            ],
            [
              111,
              4
            ],
            [
              113,
              9
            ],
            [
              186,
              9
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S04L_SL3",
        "name": "WM2_MB4_S04L_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              132,
              87
            ],
            [
              104,
              103
            ],
            [
              107,
              107
            ],
            [
              134,
              92
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S05_SL1",
        "name": "WM2_MB1_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              131,
              80
            ],
            [
              99,
              98
            ],
            [
              102,
              102
            ],
            [
              132,
              85
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S05_SL2",
        "name": "WM2_MB1_S05_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              129,
              73
            ],
            [
              94,
              93
            ],
            [
              97,
              97
            ],
            [
              130,
              78
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S05_SL3",
        "name": "WM2_MB1_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              125,
              62
            ],
            [
              85,
              85
            ],
            [
              89,
              88
            ],
            [
              127,
              67
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S05_SL1",
        "name": "WM2_MB2_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              124,
              55
            ],
            [
              81,
              80
            ],
            [
              84,
              83
            ],
            [
              125,
              60
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S05_SL2",
        "name": "WM2_MB2_S05_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              122,
              48
            ],
            [
              76,
              75
            ],
            [
              79,
              78
            ],
            [
              123,
              53
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S05_SL3",
        "name": "WM2_MB2_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              119,
              37
            ],
            [
              67,
              66
            ],
            [
              71,
              70
            ],
            [
              120,
              41
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S05_SL1",
        "name": "WM2_MB3_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              117,
              30
            ],
            [
              62,
              61
            ],
            [
              66,
              65
            ],
            [
              118,
              35
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S05_SL2",
        "name": "WM2_MB3_S05_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              115,
              23
            ],
            [
              57,
              56
            ],
            [
              61,
              60
            ],
            [
              116,
              28
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S05_SL3",
        "name": "WM2_MB3_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              112,
              12
            ],
            [
              49,
              48
            ],
            [
              52,
              51
            ],
            [
              113,
              16
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S05_SL1",
        "name": "WM2_MB4_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              110,
              5
            ],
            [
              44,
              43
            ],
            [
              48,
              46
            ],
            [
              111,
              10
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S05_SL3",
        "name": "WM2_MB4_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              103,
              104
            ],
            [
              87,
              132
            ],
            [
              92,
              134
            ],
            [
              107,
              107
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S06_SL1",
        "name": "WM2_MB1_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              98,
              99
            ],
            [
              80,
              131
            ],
            [
              85,
              132
            ],
            [
              102,
              102
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S06_SL2",
        "name": "WM2_MB1_S06_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              93,
              94
            ],
            [
              73,
              129
            ],
            [
              78,
              130
            ],
            [
              97,
              97
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S06_SL3",
        "name": "WM2_MB1_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              85,
              85
            ],
            [
              62,
              125
            ],
            [
              67,
              127
            ],
            [
              88,
              89
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S06_SL1",
        "name": "WM2_MB2_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              80,
              81
            ],
            [
              55,
              124
            ],
            [
              60,
              125
            ],
            [
              83,
              84
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S06_SL2",
        "name": "WM2_MB2_S06_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              75,
              76
            ],
            [
              48,
              122
            ],
            [
              53,
              123
            ],
            [
              78,
              79
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S06_SL3",
        "name": "WM2_MB2_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              66,
              67
            ],
            [
              37,
              119
            ],
            [
              41,
              120
            ],
            [
              70,
              71
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S06_SL1",
        "name": "WM2_MB3_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              61,
              62
            ],
            [
              30,
              117
            ],
            [
              35,
              118
            ],
            [
              65,
              66
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S06_SL2",
        "name": "WM2_MB3_S06_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              56,
              57
            ],
            [
              23,
              115
            ],
            [
              28,
              116
            ],
            [
              60,
              61
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S06_SL3",
        "name": "WM2_MB3_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              48,
              49
            ],
            [
              12,
              112
            ],
            [
              16,
              113
            ],
            [
              51,
              52
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S06_SL1",
        "name": "WM2_MB4_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              43,
              44
            ],
            [
              5,
              110
            ],
            [
              10,
              111
            ],
            [
              46,
              48
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S06_SL3",
        "name": "WM2_MB4_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              87,
              133
            ],
            [
              87,
              166
            ],
            [
              91,
              165
            ],
            [
              91,
              134
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S07_SL1",
        "name": "WM2_MB1_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              80,
              131
            ],
            [
              80,
              168
            ],
            [
              85,
              167
            ],
            [
              85,
              132
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S07_SL2",
        "name": "WM2_MB1_S07_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              73,
              129
            ],
            [
              73,
              170
            ],
            [
              78,
              168
            ],
            [
              78,
              131
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S07_SL3",
        "name": "WM2_MB1_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              61,
              126
            ],
            [
              61,
              173
            ],
            [
              66,
              171
            ],
            [
              66,
              128
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S07_SL1",
        "name": "WM2_MB2_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              55,
              125
            ],
            [
              55,
              174
            ],
            [
              60,
              173
            ],
            [
              60,
              126
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S07_SL2",
        "name": "WM2_MB2_S07_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              48,
              123
            ],
            [
              48,
              176
            ],
            [
              53,
              175
            ],
            [
              53,
              124
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S07_SL3",
        "name": "WM2_MB2_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              36,
              120
            ],
            [
              36,
              179
            ],
            [
              41,
              178
            ],
            [
              41,
              121
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S07_SL1",
        "name": "WM2_MB3_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              30,
              118
            ],
            [
              30,
              181
            ],
            [
              34,
              180
            ],
            [
              34,
              119
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S07_SL2",
        "name": "WM2_MB3_S07_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              23,
              116
            ],
            [
              23,
              183
            ],
            [
              28,
              181
            ],
            [
              28,
              118
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S07_SL3",
        "name": "WM2_MB3_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              11,
              113
            ],
            [
              11,
              186
            ],
            [
              16,
              185
            ],
            [
              16,
              114
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S07_SL1",
        "name": "WM2_MB4_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              4,
              111
            ],
            [
              4,
              188
            ],
            [
              9,
              186
            ],
            [
              9,
              113
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S07_SL3",
        "name": "WM2_MB4_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              87,
              167
            ],
            [
              103,
              195
            ],
            [
              107,
              192
            ],
            [
              92,
              165
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S08_SL1",
        "name": "WM2_MB1_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              80,
              168
            ],
            [
              98,
              200
            ],
            [
              102,
              197
            ],
            [
              85,
              167
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S08_SL2",
        "name": "WM2_MB1_S08_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              73,
              170
            ],
            [
              93,
              205
            ],
            [
              97,
              202
            ],
            [
              78,
              169
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S08_SL3",
        "name": "WM2_MB1_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              62,
              174
            ],
            [
              85,
              214
            ],
            [
              88,
              210
            ],
            [
              67,
              172
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S08_SL1",
        "name": "WM2_MB2_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              55,
              175
            ],
            [
              80,
              218
            ],
            [
              83,
              215
            ],
            [
              60,
              174
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S08_SL2",
        "name": "WM2_MB2_S08_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              48,
              177
            ],
            [
              75,
              223
            ],
            [
              78,
              220
            ],
            [
              53,
              176
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S08_SL3",
        "name": "WM2_MB2_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              37,
              180
            ],
            [
              66,
              232
            ],
            [
              70,
              228
            ],
            [
              41,
              179
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S08_SL1",
        "name": "WM2_MB3_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              30,
              182
            ],
            [
              61,
              237
            ],
            [
              65,
              233
            ],
            [
              35,
              181
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S08_SL2",
        "name": "WM2_MB3_S08_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              23,
              184
            ],
            [
              56,
              242
            ],
            [
              60,
              238
            ],
            [
              28,
              183
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S08_SL3",
        "name": "WM2_MB3_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              12,
              187
            ],
            [
              48,
              250
            ],
            [
              51,
              247
            ],
            [
              16,
              186
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S08_SL1",
        "name": "WM2_MB4_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              5,
              189
            ],
            [
              43,
              255
            ],
            [
              46,
              251
            ],
            [
              10,
              188
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S08_SL3",
        "name": "WM2_MB4_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              104,
              196
            ],
            [
              132,
              212
            ],
            [
              134,
              207
            ],
            [
              107,
              192
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S09_SL1",
        "name": "WM2_MB1_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              99,
              201
            ],
            [
              131,
              219
            ],
            [
              132,
              214
            ],
            [
              102,
              197
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S09_SL2",
        "name": "WM2_MB1_S09_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              94,
              206
            ],
            [
              129,
              226
            ],
            [
              130,
              221
            ],
            [
              97,
              202
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S09_SL3",
        "name": "WM2_MB1_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              85,
              214
            ],
            [
              125,
              237
            ],
            [
              127,
              232
            ],
            [
              89,
              211
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S09_SL1",
        "name": "WM2_MB2_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              81,
              219
            ],
            [
              124,
              244
            ],
            [
              125,
              239
            ],
            [
              84,
              216
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S09_SL2",
        "name": "WM2_MB2_S09_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              76,
              224
            ],
            [
              122,
              251
            ],
            [
              123,
              246
            ],
            [
              79,
              221
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S09_SL3",
        "name": "WM2_MB2_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              67,
              233
            ],
            [
              119,
              262
            ],
            [
              120,
              258
            ],
            [
              71,
              229
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S09_SL1",
        "name": "WM2_MB3_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              62,
              238
            ],
            [
              117,
              269
            ],
            [
              118,
              264
            ],
            [
              66,
              234
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S09_SL2",
        "name": "WM2_MB3_S09_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              57,
              243
            ],
            [
              115,
              276
            ],
            [
              116,
              271
            ],
            [
              61,
              239
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S09_SL3",
        "name": "WM2_MB3_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              49,
              251
            ],
            [
              112,
              287
            ],
            [
              113,
              283
            ],
            [
              52,
              248
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S09_SL1",
        "name": "WM2_MB4_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              44,
              256
            ],
            [
              110,
              294
            ],
            [
              111,
              289
            ],
            [
              48,
              253
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S09_SL3",
        "name": "WM2_MB4_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              133,
              212
            ],
            [
              166,
              212
            ],
            [
              165,
              208
            ],
            [
              134,
              208
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S10_SL1",
        "name": "WM2_MB1_S10_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              131,
              219
            ],
            [
              168,
              219
            ],
            [
              167,
              214
            ],
            [
              132,
              214
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S10_SL2",
        "name": "WM2_MB1_S10_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              129,
              226
            ],
            [
              170,
              226
            ],
            [
              168,
              221
            ],
            [
              131,
              221
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S10_SL3",
        "name": "WM2_MB1_S10_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              126,
              238
            ],
            [
              173,
              238
            ],
            [
              171,
              233
            ],
            [
              128,
              233
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S10_SL1",
        "name": "WM2_MB2_S10_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              125,
              244
            ],
            [
              174,
              244
            ],
            [
              173,
              239
            ],
            [
              126,
              239
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S10_SL2",
        "name": "WM2_MB2_S10_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              123,
              251
            ],
            [
              176,
              251
            ],
            [
              175,
              246
            ],
            [
              124,
              246
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S10_SL3",
        "name": "WM2_MB2_S10_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              120,
              263
            ],
            [
              179,
              263
            ],
            [
              178,
              258
            ],
            [
              121,
              258
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S10_SL1",
        "name": "WM2_MB3_S10_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              118,
              269
            ],
            [
              181,
              269
            ],
            [
              180,
              265
            ],
            [
              119,
              265
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S10_SL2",
        "name": "WM2_MB3_S10_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              116,
              276
            ],
            [
              183,
              276
            ],
            [
              181,
              271
            ],
            [
              118,
              271
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S10_SL3",
        "name": "WM2_MB3_S10_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              113,
              288
            ],
            [
              186,
              288
            ],
            [
              185,
              283
            ],
            [
              114,
              283
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S10L_SL1",
        "name": "WM2_MB4_S10L_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              111,
              295
            ],
            [
              188,
              295
            ],
            [
              186,
              290
            ],
            [
              113,
              290
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S10L_SL3",
        "name": "WM2_MB4_S10L_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              167,
              212
            ],
            [
              195,
              196
            ],
            [
              192,
              192
            ],
            [
              165,
              207
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S11_SL1",
        "name": "WM2_MB1_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              168,
              219
            ],
            [
              200,
              201
            ],
            [
              197,
              197
            ],
            [
              167,
              214
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S11_SL2",
        "name": "WM2_MB1_S11_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              170,
              226
            ],
            [
              205,
              206
            ],
            [
              202,
              202
            ],
            [
              169,
              221
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S11_SL3",
        "name": "WM2_MB1_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              174,
              237
            ],
            [
              214,
              214
            ],
            [
              210,
              211
            ],
            [
              172,
              232
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S11_SL1",
        "name": "WM2_MB2_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              175,
              244
            ],
            [
              218,
              219
            ],
            [
              215,
              216
            ],
            [
              174,
              239
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S11_SL2",
        "name": "WM2_MB2_S11_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              177,
              251
            ],
            [
              223,
              224
            ],
            [
              220,
              221
            ],
            [
              176,
              246
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S11_SL3",
        "name": "WM2_MB2_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              180,
              262
            ],
            [
              232,
              233
            ],
            [
              228,
              229
            ],
            [
              179,
              258
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S11_SL1",
        "name": "WM2_MB3_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              182,
              269
            ],
            [
              237,
              238
            ],
            [
              233,
              234
            ],
            [
              181,
              264
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S11_SL2",
        "name": "WM2_MB3_S11_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              184,
              276
            ],
            [
              242,
              243
            ],
            [
              238,
              239
            ],
            [
              183,
              271
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S11_SL3",
        "name": "WM2_MB3_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              187,
              287
            ],
            [
              250,
              251
            ],
            [
              247,
              248
            ],
            [
              186,
              283
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S11_SL1",
        "name": "WM2_MB4_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              189,
              294
            ],
            [
              255,
              256
            ],
            [
              251,
              253
            ],
            [
              188,
              289
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S11_SL3",
        "name": "WM2_MB4_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              196,
              195
            ],
            [
              212,
              167
            ],
            [
              207,
              165
            ],
            [
              192,
              192
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S12_SL1",
        "name": "WM2_MB1_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              201,
              200
            ],
            [
              219,
              168
            ],
            [
              214,
              167
            ],
            [
              197,
              197
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S12_SL2",
        "name": "WM2_MB1_S12_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              206,
              205
            ],
            [
              226,
              170
            ],
            [
              221,
              169
            ],
            [
              202,
              202
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB1_S12_SL3",
        "name": "WM2_MB1_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              214,
              214
            ],
            [
              237,
              174
            ],
            [
              232,
              172
            ],
            [
              211,
              210
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S12_SL1",
        "name": "WM2_MB2_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              219,
              218
            ],
            [
              244,
              175
            ],
            [
              239,
              174
            ],
            [
              216,
              215
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S12_SL2",
        "name": "WM2_MB2_S12_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              224,
              223
            ],
            [
              251,
              177
            ],
            [
              246,
              176
            ],
            [
              221,
              220
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB2_S12_SL3",
        "name": "WM2_MB2_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              233,
              232
            ],
            [
              262,
              180
            ],
            [
              258,
              179
            ],
            [
              229,
              228
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S12_SL1",
        "name": "WM2_MB3_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              238,
              237
            ],
            [
              269,
              182
            ],
            [
              264,
              181
            ],
            [
              234,
              233
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S12_SL2",
        "name": "WM2_MB3_S12_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              243,
              242
            ],
            [
              276,
              184
            ],
            [
              271,
              183
            ],
            [
              239,
              238
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB3_S12_SL3",
        "name": "WM2_MB3_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              251,
              250
            ],
            [
              287,
              187
            ],
            [
              283,
              186
            ],
            [
              248,
              247
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S12_SL1",
        "name": "WM2_MB4_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              256,
              255
            ],
            [
              294,
              189
            ],
            [
              289,
              188
            ],
            [
              253,
              251
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM2_MB4_S12_SL3",
        "name": "WM2_MB4_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              512,
              166
            ],
            [
              512,
              133
            ],
            [
              508,
              134
            ],
            [
              508,
              165
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S01_SL1",
        "name": "WM1_MB1_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              519,
              168
            ],
            [
              519,
              131
            ],
            [
              514,
              132
            ],
            [
              514,
              167
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S01_SL2",
        "name": "WM1_MB1_S01_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              526,
              170
            ],
            [
              526,
              129
            ],
            [
              521,
              131
            ],
            [
              521,
              168
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S01_SL3",
        "name": "WM1_MB1_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              538,
              173
            ],
            [
              538,
              126
            ],
            [
              533,
              128
            ],
            [
              533,
              171
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S01_SL1",
        "name": "WM1_MB2_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              544,
              174
            ],
            [
              544,
              125
            ],
            [
              539,
              126
            ],
            [
              539,
              173
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S01_SL2",
        "name": "WM1_MB2_S01_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              551,
              176
            ],
            [
              551,
              123
            ],
            [
              546,
              124
            ],
            [
              546,
              175
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S01_SL3",
        "name": "WM1_MB2_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              563,
              179
            ],
            [
              563,
              120
            ],
            [
              558,
              121
            ],
            [
              558,
              178
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S01_SL1",
        "name": "WM1_MB3_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              569,
              181
            ],
            [
              569,
              118
            ],
            [
              565,
              119
            ],
            [
              565,
              180
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S01_SL2",
        "name": "WM1_MB3_S01_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              576,
              183
            ],
            [
              576,
              116
            ],
            [
              571,
              118
            ],
            [
              571,
              181
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S01_SL3",
        "name": "WM1_MB3_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              588,
              186
            ],
            [
              588,
              113
            ],
            [
              583,
              114
            ],
            [
              583,
              185
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S01_SL1",
        "name": "WM1_MB4_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              595,
              188
            ],
            [
              595,
              111
            ],
            [
              590,
              113
            ],
            [
              590,
              186
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S01_SL3",
        "name": "WM1_MB4_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              512,
              132
            ],
            [
              496,
              104
            ],
            [
              492,
              107
            ],
            [
              507,
              134
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S02_SL1",
        "name": "WM1_MB1_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              519,
              131
            ],
            [
              501,
              99
            ],
            [
              497,
              102
            ],
            [
              514,
              132
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S02_SL2",
        "name": "WM1_MB1_S02_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              526,
              129
            ],
            [
              506,
              94
            ],
            [
              502,
              97
            ],
            [
              521,
              130
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S02_SL3",
        "name": "WM1_MB1_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              537,
              125
            ],
            [
              514,
              85
            ],
            [
              511,
              89
            ],
            [
              532,
              127
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S02_SL1",
        "name": "WM1_MB2_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              544,
              124
            ],
            [
              519,
              81
            ],
            [
              516,
              84
            ],
            [
              539,
              125
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S02_SL2",
        "name": "WM1_MB2_S02_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              551,
              122
            ],
            [
              524,
              76
            ],
            [
              521,
              79
            ],
            [
              546,
              123
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S02_SL3",
        "name": "WM1_MB2_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              562,
              119
            ],
            [
              533,
              67
            ],
            [
              529,
              71
            ],
            [
              558,
              120
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S02_SL1",
        "name": "WM1_MB3_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              569,
              117
            ],
            [
              538,
              62
            ],
            [
              534,
              66
            ],
            [
              564,
              118
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S02_SL2",
        "name": "WM1_MB3_S02_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              576,
              115
            ],
            [
              543,
              57
            ],
            [
              539,
              61
            ],
            [
              571,
              116
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S02_SL3",
        "name": "WM1_MB3_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              587,
              112
            ],
            [
              551,
              49
            ],
            [
              548,
              52
            ],
            [
              583,
              113
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S02_SL1",
        "name": "WM1_MB4_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              594,
              110
            ],
            [
              556,
              44
            ],
            [
              553,
              48
            ],
            [
              589,
              111
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S02_SL3",
        "name": "WM1_MB4_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              495,
              103
            ],
            [
              467,
              87
            ],
            [
              465,
              92
            ],
            [
              492,
              107
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S03_SL1",
        "name": "WM1_MB1_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              500,
              98
            ],
            [
              468,
              80
            ],
            [
              467,
              85
            ],
            [
              497,
              102
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S03_SL2",
        "name": "WM1_MB1_S03_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              505,
              93
            ],
            [
              470,
              73
            ],
            [
              469,
              78
            ],
            [
              502,
              97
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S03_SL3",
        "name": "WM1_MB1_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              514,
              85
            ],
            [
              474,
              62
            ],
            [
              472,
              67
            ],
            [
              510,
              88
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S03_SL1",
        "name": "WM1_MB2_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              518,
              80
            ],
            [
              475,
              55
            ],
            [
              474,
              60
            ],
            [
              515,
              83
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S03_SL2",
        "name": "WM1_MB2_S03_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              523,
              75
            ],
            [
              477,
              48
            ],
            [
              476,
              53
            ],
            [
              520,
              78
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S03_SL3",
        "name": "WM1_MB2_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              532,
              66
            ],
            [
              480,
              37
            ],
            [
              479,
              41
            ],
            [
              528,
              70
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S03_SL1",
        "name": "WM1_MB3_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              537,
              61
            ],
            [
              482,
              30
            ],
            [
              481,
              35
            ],
            [
              533,
              65
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S03_SL2",
        "name": "WM1_MB3_S03_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              542,
              56
            ],
            [
              484,
              23
            ],
            [
              483,
              28
            ],
            [
              538,
              60
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S03_SL3",
        "name": "WM1_MB3_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              550,
              48
            ],
            [
              487,
              12
            ],
            [
              486,
              16
            ],
            [
              547,
              51
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S03_SL1",
        "name": "WM1_MB4_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              555,
              43
            ],
            [
              489,
              5
            ],
            [
              488,
              10
            ],
            [
              551,
              46
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S03_SL3",
        "name": "WM1_MB4_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              466,
              87
            ],
            [
              433,
              87
            ],
            [
              434,
              91
            ],
            [
              465,
              91
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S04_SL1",
        "name": "WM1_MB1_S04_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              468,
              80
            ],
            [
              431,
              80
            ],
            [
              432,
              85
            ],
            [
              467,
              85
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S04_SL2",
        "name": "WM1_MB1_S04_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              470,
              73
            ],
            [
              429,
              73
            ],
            [
              431,
              78
            ],
            [
              468,
              78
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S04_SL3",
        "name": "WM1_MB1_S04_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              473,
              61
            ],
            [
              426,
              61
            ],
            [
              428,
              66
            ],
            [
              471,
              66
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S04_SL1",
        "name": "WM1_MB2_S04_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              474,
              55
            ],
            [
              425,
              55
            ],
            [
              426,
              60
            ],
            [
              473,
              60
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S04_SL2",
        "name": "WM1_MB2_S04_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              476,
              48
            ],
            [
              423,
              48
            ],
            [
              424,
              53
            ],
            [
              475,
              53
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S04_SL3",
        "name": "WM1_MB2_S04_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              479,
              36
            ],
            [
              420,
              36
            ],
            [
              421,
              41
            ],
            [
              478,
              41
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S04_SL1",
        "name": "WM1_MB3_S04_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              481,
              30
            ],
            [
              418,
              30
            ],
            [
              419,
              34
            ],
            [
              480,
              34
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S04_SL2",
        "name": "WM1_MB3_S04_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              483,
              23
            ],
            [
              416,
              23
            ],
            [
              418,
              28
            ],
            [
              481,
              28
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S04_SL3",
        "name": "WM1_MB3_S04_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              486,
              11
            ],
            [
              413,
              11
            ],
            [
              414,
              16
            ],
            [
              485,
              16
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S04L_SL1",
        "name": "WM1_MB4_S04L_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              488,
              4
            ],
            [
              411,
              4
            ],
            [
              413,
              9
            ],
            [
              486,
              9
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S04L_SL3",
        "name": "WM1_MB4_S04L_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              432,
              87
            ],
            [
              404,
              103
            ],
            [
              407,
              107
            ],
            [
              434,
              92
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S05_SL1",
        "name": "WM1_MB1_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              431,
              80
            ],
            [
              399,
              98
            ],
            [
              402,
              102
            ],
            [
              432,
              85
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S05_SL2",
        "name": "WM1_MB1_S05_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              429,
              73
            ],
            [
              394,
              93
            ],
            [
              397,
              97
            ],
            [
              430,
              78
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S05_SL3",
        "name": "WM1_MB1_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              425,
              62
            ],
            [
              385,
              85
            ],
            [
              389,
              88
            ],
            [
              427,
              67
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S05_SL1",
        "name": "WM1_MB2_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              424,
              55
            ],
            [
              381,
              80
            ],
            [
              384,
              83
            ],
            [
              425,
              60
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S05_SL2",
        "name": "WM1_MB2_S05_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              422,
              48
            ],
            [
              376,
              75
            ],
            [
              379,
              78
            ],
            [
              423,
              53
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S05_SL3",
        "name": "WM1_MB2_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              419,
              37
            ],
            [
              367,
              66
            ],
            [
              371,
              70
            ],
            [
              420,
              41
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S05_SL1",
        "name": "WM1_MB3_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              417,
              30
            ],
            [
              362,
              61
            ],
            [
              366,
              65
            ],
            [
              418,
              35
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S05_SL2",
        "name": "WM1_MB3_S05_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              415,
              23
            ],
            [
              357,
              56
            ],
            [
              361,
              60
            ],
            [
              416,
              28
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S05_SL3",
        "name": "WM1_MB3_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              412,
              12
            ],
            [
              349,
              48
            ],
            [
              352,
              51
            ],
            [
              413,
              16
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S05_SL1",
        "name": "WM1_MB4_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              410,
              5
            ],
            [
              344,
              43
            ],
            [
              348,
              46
            ],
            [
              411,
              10
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S05_SL3",
        "name": "WM1_MB4_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              403,
              104
            ],
            [
              387,
              132
            ],
            [
              392,
              134
            ],
            [
              407,
              107
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S06_SL1",
        "name": "WM1_MB1_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              398,
              99
            ],
            [
              380,
              131
            ],
            [
              385,
              132
            ],
            [
              402,
              102
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S06_SL2",
        "name": "WM1_MB1_S06_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              393,
              94
            ],
            [
              373,
              129
            ],
            [
              378,
              130
            ],
            [
              397,
              97
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S06_SL3",
        "name": "WM1_MB1_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              385,
              85
            ],
            [
              362,
              125
            ],
            [
              367,
              127
            ],
            [
              388,
              89
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S06_SL1",
        "name": "WM1_MB2_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              380,
              81
            ],
            [
              355,
              124
            ],
            [
              360,
              125
            ],
            [
              383,
              84
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S06_SL2",
        "name": "WM1_MB2_S06_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              375,
              76
            ],
            [
              348,
              122
            ],
            [
              353,
              123
            ],
            [
              378,
              79
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S06_SL3",
        "name": "WM1_MB2_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              366,
              67
            ],
            [
              337,
              119
            ],
            [
              341,
              120
            ],
            [
              370,
              71
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S06_SL1",
        "name": "WM1_MB3_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              361,
              62
            ],
            [
              330,
              117
            ],
            [
              335,
              118
            ],
            [
              365,
              66
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S06_SL2",
        "name": "WM1_MB3_S06_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              356,
              57
            ],
            [
              323,
              115
            ],
            [
              328,
              116
            ],
            [
              360,
              61
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S06_SL3",
        "name": "WM1_MB3_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              348,
              49
            ],
            [
              312,
              112
            ],
            [
              316,
              113
            ],
            [
              351,
              52
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S06_SL1",
        "name": "WM1_MB4_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              343,
              44
            ],
            [
              305,
              110
            ],
            [
              310,
              111
            ],
            [
              346,
              48
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S06_SL3",
        "name": "WM1_MB4_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              387,
              133
            ],
            [
              387,
              166
            ],
            [
              391,
              165
            ],
            [
              391,
              134
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S07_SL1",
        "name": "WM1_MB1_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              380,
              131
            ],
            [
              380,
              168
            ],
            [
              385,
              167
            ],
            [
              385,
              132
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S07_SL2",
        "name": "WM1_MB1_S07_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              373,
              129
            ],
            [
              373,
              170
            ],
            [
              378,
              168
            ],
            [
              378,
              131
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S07_SL3",
        "name": "WM1_MB1_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              361,
              126
            ],
            [
              361,
              173
            ],
            [
              366,
              171
            ],
            [
              366,
              128
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S07_SL1",
        "name": "WM1_MB2_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              355,
              125
            ],
            [
              355,
              174
            ],
            [
              360,
              173
            ],
            [
              360,
              126
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S07_SL2",
        "name": "WM1_MB2_S07_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              348,
              123
            ],
            [
              348,
              176
            ],
            [
              353,
              175
            ],
            [
              353,
              124
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S07_SL3",
        "name": "WM1_MB2_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              336,
              120
            ],
            [
              336,
              179
            ],
            [
              341,
              178
            ],
            [
              341,
              121
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S07_SL1",
        "name": "WM1_MB3_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              330,
              118
            ],
            [
              330,
              181
            ],
            [
              334,
              180
            ],
            [
              334,
              119
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S07_SL2",
        "name": "WM1_MB3_S07_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              323,
              116
            ],
            [
              323,
              183
            ],
            [
              328,
              181
            ],
            [
              328,
              118
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S07_SL3",
        "name": "WM1_MB3_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              311,
              113
            ],
            [
              311,
              186
            ],
            [
              316,
              185
            ],
            [
              316,
              114
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S07_SL1",
        "name": "WM1_MB4_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              304,
              111
            ],
            [
              304,
              188
            ],
            [
              309,
              186
            ],
            [
              309,
              113
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S07_SL3",
        "name": "WM1_MB4_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              387,
              167
            ],
            [
              403,
              195
            ],
            [
              407,
              192
            ],
            [
              392,
              165
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S08_SL1",
        "name": "WM1_MB1_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              380,
              168
            ],
            [
              398,
              200
            ],
            [
              402,
              197
            ],
            [
              385,
              167
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S08_SL2",
        "name": "WM1_MB1_S08_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              373,
              170
            ],
            [
              393,
              205
            ],
            [
              397,
              202
            ],
            [
              378,
              169
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S08_SL3",
        "name": "WM1_MB1_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              362,
              174
            ],
            [
              385,
              214
            ],
            [
              388,
              210
            ],
            [
              367,
              172
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S08_SL1",
        "name": "WM1_MB2_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              355,
              175
            ],
            [
              380,
              218
            ],
            [
              383,
              215
            ],
            [
              360,
              174
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S08_SL2",
        "name": "WM1_MB2_S08_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              348,
              177
            ],
            [
              375,
              223
            ],
            [
              378,
              220
            ],
            [
              353,
              176
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S08_SL3",
        "name": "WM1_MB2_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              337,
              180
            ],
            [
              366,
              232
            ],
            [
              370,
              228
            ],
            [
              341,
              179
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S08_SL1",
        "name": "WM1_MB3_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              330,
              182
            ],
            [
              361,
              237
            ],
            [
              365,
              233
            ],
            [
              335,
              181
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S08_SL2",
        "name": "WM1_MB3_S08_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              323,
              184
            ],
            [
              356,
              242
            ],
            [
              360,
              238
            ],
            [
              328,
              183
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S08_SL3",
        "name": "WM1_MB3_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              312,
              187
            ],
            [
              348,
              250
            ],
            [
              351,
              247
            ],
            [
              316,
              186
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S08_SL1",
        "name": "WM1_MB4_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              305,
              189
            ],
            [
              343,
              255
            ],
            [
              346,
              251
            ],
            [
              310,
              188
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S08_SL3",
        "name": "WM1_MB4_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              404,
              196
            ],
            [
              432,
              212
            ],
            [
              434,
              207
            ],
            [
              407,
              192
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S09_SL1",
        "name": "WM1_MB1_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              399,
              201
            ],
            [
              431,
              219
            ],
            [
              432,
              214
            ],
            [
              402,
              197
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S09_SL2",
        "name": "WM1_MB1_S09_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              394,
              206
            ],
            [
              429,
              226
            ],
            [
              430,
              221
            ],
            [
              397,
              202
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S09_SL3",
        "name": "WM1_MB1_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              385,
              214
            ],
            [
              425,
              237
            ],
            [
              427,
              232
            ],
            [
              389,
              211
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S09_SL1",
        "name": "WM1_MB2_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              381,
              219
            ],
            [
              424,
              244
            ],
            [
              425,
              239
            ],
            [
              384,
              216
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S09_SL2",
        "name": "WM1_MB2_S09_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              376,
              224
            ],
            [
              422,
              251
            ],
            [
              423,
              246
            ],
            [
              379,
              221
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S09_SL3",
        "name": "WM1_MB2_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              367,
              233
            ],
            [
              419,
              262
            ],
            [
              420,
              258
            ],
            [
              371,
              229
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S09_SL1",
        "name": "WM1_MB3_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              362,
              238
            ],
            [
              417,
              269
            ],
            [
              418,
              264
            ],
            [
              366,
              234
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S09_SL2",
        "name": "WM1_MB3_S09_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              357,
              243
            ],
            [
              415,
              276
            ],
            [
              416,
              271
            ],
            [
              361,
              239
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S09_SL3",
        "name": "WM1_MB3_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              349,
              251
            ],
            [
              412,
              287
            ],
            [
              413,
              283
            ],
            [
              352,
              248
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S09_SL1",
        "name": "WM1_MB4_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              344,
              256
            ],
            [
              410,
              294
            ],
            [
              411,
              289
            ],
            [
              348,
              253
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S09_SL3",
        "name": "WM1_MB4_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              433,
              212
            ],
            [
              466,
              212
            ],
            [
              465,
              208
            ],
            [
              434,
              208
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S10_SL1",
        "name": "WM1_MB1_S10_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              431,
              219
            ],
            [
              468,
              219
            ],
            [
              467,
              214
            ],
            [
              432,
              214
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S10_SL2",
        "name": "WM1_MB1_S10_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              429,
              226
            ],
            [
              470,
              226
            ],
            [
              468,
              221
            ],
            [
              431,
              221
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S10_SL3",
        "name": "WM1_MB1_S10_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              426,
              238
            ],
            [
              473,
              238
            ],
            [
              471,
              233
            ],
            [
              428,
              233
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S10_SL1",
        "name": "WM1_MB2_S10_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              425,
              244
            ],
            [
              474,
              244
            ],
            [
              473,
              239
            ],
            [
              426,
              239
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S10_SL2",
        "name": "WM1_MB2_S10_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              423,
              251
            ],
            [
              476,
              251
            ],
            [
              475,
              246
            ],
            [
              424,
              246
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S10_SL3",
        "name": "WM1_MB2_S10_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              420,
              263
            ],
            [
              479,
              263
            ],
            [
              478,
              258
            ],
            [
              421,
              258
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S10_SL1",
        "name": "WM1_MB3_S10_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              418,
              269
            ],
            [
              481,
              269
            ],
            [
              480,
              265
            ],
            [
              419,
              265
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S10_SL2",
        "name": "WM1_MB3_S10_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              416,
              276
            ],
            [
              483,
              276
            ],
            [
              481,
              271
            ],
            [
              418,
              271
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S10_SL3",
        "name": "WM1_MB3_S10_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              413,
              288
            ],
            [
              486,
              288
            ],
            [
              485,
              283
            ],
            [
              414,
              283
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S10L_SL1",
        "name": "WM1_MB4_S10L_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              411,
              295
            ],
            [
              488,
              295
            ],
            [
              486,
              290
            ],
            [
              413,
              290
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S10L_SL3",
        "name": "WM1_MB4_S10L_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              467,
              212
            ],
            [
              495,
              196
            ],
            [
              492,
              192
            ],
            [
              465,
              207
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S11_SL1",
        "name": "WM1_MB1_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              468,
              219
            ],
            [
              500,
              201
            ],
            [
              497,
              197
            ],
            [
              467,
              214
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S11_SL2",
        "name": "WM1_MB1_S11_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              470,
              226
            ],
            [
              505,
              206
            ],
            [
              502,
              202
            ],
            [
              469,
              221
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S11_SL3",
        "name": "WM1_MB1_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              474,
              237
            ],
            [
              514,
              214
            ],
            [
              510,
              211
            ],
            [
              472,
              232
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S11_SL1",
        "name": "WM1_MB2_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              475,
              244
            ],
            [
              518,
              219
            ],
            [
              515,
              216
            ],
            [
              474,
              239
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S11_SL2",
        "name": "WM1_MB2_S11_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              477,
              251
            ],
            [
              523,
              224
            ],
            [
              520,
              221
            ],
            [
              476,
              246
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S11_SL3",
        "name": "WM1_MB2_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              480,
              262
            ],
            [
              532,
              233
            ],
            [
              528,
              229
            ],
            [
              479,
              258
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S11_SL1",
        "name": "WM1_MB3_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              482,
              269
            ],
            [
              537,
              238
            ],
            [
              533,
              234
            ],
            [
              481,
              264
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S11_SL2",
        "name": "WM1_MB3_S11_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              484,
              276
            ],
            [
              542,
              243
            ],
            [
              538,
              239
            ],
            [
              483,
              271
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S11_SL3",
        "name": "WM1_MB3_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              487,
              287
            ],
            [
              550,
              251
            ],
            [
              547,
              248
            ],
            [
              486,
              283
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S11_SL1",
        "name": "WM1_MB4_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              489,
              294
            ],
            [
              555,
              256
            ],
            [
              551,
              253
            ],
            [
              488,
              289
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S11_SL3",
        "name": "WM1_MB4_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              496,
              195
            ],
            [
              512,
              167
            ],
            [
              507,
              165
            ],
            [
              492,
              192
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S12_SL1",
        "name": "WM1_MB1_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              501,
              200
            ],
            [
              519,
              168
            ],
            [
              514,
              167
            ],
            [
              497,
              197
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S12_SL2",
        "name": "WM1_MB1_S12_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              506,
              205
            ],
            [
              526,
              170
            ],
            [
              521,
              169
            ],
            [
              502,
              202
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB1_S12_SL3",
        "name": "WM1_MB1_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              514,
              214
            ],
            [
              537,
              174
            ],
            [
              532,
              172
            ],
            [
              511,
              210
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S12_SL1",
        "name": "WM1_MB2_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              519,
              218
            ],
            [
              544,
              175
            ],
            [
              539,
              174
            ],
            [
              516,
              215
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S12_SL2",
        "name": "WM1_MB2_S12_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              524,
              223
            ],
            [
              551,
              177
            ],
            [
              546,
              176
            ],
            [
              521,
              220
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB2_S12_SL3",
        "name": "WM1_MB2_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              533,
              232
            ],
            [
              562,
              180
            ],
            [
              558,
              179
            ],
            [
              529,
              228
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S12_SL1",
        "name": "WM1_MB3_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              538,
              237
            ],
            [
              569,
              182
            ],
            [
              564,
              181
            ],
            [
              534,
              233
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S12_SL2",
        "name": "WM1_MB3_S12_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              543,
              242
            ],
            [
              576,
              184
            ],
            [
              571,
              183
            ],
            [
              539,
              238
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB3_S12_SL3",
        "name": "WM1_MB3_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              551,
              250
            ],
            [
              587,
              187
            ],
            [
              583,
              186
            ],
            [
              548,
              247
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S12_SL1",
        "name": "WM1_MB4_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              556,
              255
            ],
            [
              594,
              189
            ],
            [
              589,
              188
            ],
            [
              553,
              251
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WM1_MB4_S12_SL3",
        "name": "WM1_MB4_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              812,
              166
            ],
            [
              812,
              133
            ],
            [
              808,
              134
            ],
            [
              808,
              165
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S01_SL1",
        "name": "W00_MB1_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              819,
              168
            ],
            [
              819,
              131
            ],
            [
              814,
              132
            ],
            [
              814,
              167
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S01_SL2",
        "name": "W00_MB1_S01_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              826,
              170
            ],
            [
              826,
              129
            ],
            [
              821,
              131
            ],
            [
              821,
              168
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S01_SL3",
        "name": "W00_MB1_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              838,
              173
            ],
            [
              838,
              126
            ],
            [
              833,
              128
            ],
            [
              833,
              171
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S01_SL1",
        "name": "W00_MB2_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              844,
              174
            ],
            [
              844,
              125
            ],
            [
              839,
              126
            ],
            [
              839,
              173
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S01_SL2",
        "name": "W00_MB2_S01_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              851,
              176
            ],
            [
              851,
              123
            ],
            [
              846,
              124
            ],
            [
              846,
              175
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S01_SL3",
        "name": "W00_MB2_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              863,
              179
            ],
            [
              863,
              120
            ],
            [
              858,
              121
            ],
            [
              858,
              178
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S01_SL1",
        "name": "W00_MB3_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              869,
              181
            ],
            [
              869,
              118
            ],
            [
              865,
              119
            ],
            [
              865,
              180
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S01_SL2",
        "name": "W00_MB3_S01_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              876,
              183
            ],
            [
              876,
              116
            ],
            [
              871,
              118
            ],
            [
              871,
              181
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S01_SL3",
        "name": "W00_MB3_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              888,
              186
            ],
            [
              888,
              113
            ],
            [
              883,
              114
            ],
            [
              883,
              185
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S01_SL1",
        "name": "W00_MB4_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              895,
              188
            ],
            [
              895,
              111
            ],
            [
              890,
              113
            ],
            [
              890,
              186
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S01_SL3",
        "name": "W00_MB4_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              812,
              132
            ],
            [
              796,
              104
            ],
            [
              792,
              107
            ],
            [
              807,
              134
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S02_SL1",
        "name": "W00_MB1_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              819,
              131
            ],
            [
              801,
              99
            ],
            [
              797,
              102
            ],
            [
              814,
              132
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S02_SL2",
        "name": "W00_MB1_S02_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              826,
              129
            ],
            [
              806,
              94
            ],
            [
              802,
              97
            ],
            [
              821,
              130
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S02_SL3",
        "name": "W00_MB1_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              837,
              125
            ],
            [
              814,
              85
            ],
            [
              811,
              89
            ],
            [
              832,
              127
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S02_SL1",
        "name": "W00_MB2_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              844,
              124
            ],
            [
              819,
              81
            ],
            [
              816,
              84
            ],
            [
              839,
              125
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S02_SL2",
        "name": "W00_MB2_S02_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              851,
              122
            ],
            [
              824,
              76
            ],
            [
              821,
              79
            ],
            [
              846,
              123
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S02_SL3",
        "name": "W00_MB2_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              862,
              119
            ],
            [
              833,
              67
            ],
            [
              829,
              71
            ],
            [
              858,
              120
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S02_SL1",
        "name": "W00_MB3_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              869,
              117
            ],
            [
              838,
              62
            ],
            [
              834,
              66
            ],
            [
              864,
              118
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S02_SL2",
        "name": "W00_MB3_S02_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              876,
              115
            ],
            [
              843,
              57
            ],
            [
              839,
              61
            ],
            [
              871,
              116
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S02_SL3",
        "name": "W00_MB3_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              887,
              112
            ],
            [
              851,
              49
            ],
            [
              848,
              52
            ],
            [
              883,
              113
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S02_SL1",
        "name": "W00_MB4_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              894,
              110
            ],
            [
              856,
              44
            ],
            [
              853,
              48
            ],
            [
              889,
              111
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S02_SL3",
        "name": "W00_MB4_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              795,
              103
            ],
            [
              767,
              87
            ],
            [
              765,
              92
            ],
            [
              792,
              107
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S03_SL1",
        "name": "W00_MB1_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              800,
              98
            ],
            [
              768,
              80
            ],
            [
              767,
              85
            ],
            [
              797,
              102
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S03_SL2",
        "name": "W00_MB1_S03_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              805,
              93
            ],
            [
              770,
              73
            ],
            [
              769,
              78
            ],
            [
              802,
              97
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S03_SL3",
        "name": "W00_MB1_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              814,
              85
            ],
            [
              774,
              62
            ],
            [
              772,
              67
            ],
            [
              810,
              88
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S03_SL1",
        "name": "W00_MB2_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              818,
              80
            ],
            [
              775,
              55
            ],
            [
              774,
              60
            ],
            [
              815,
              83
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S03_SL2",
        "name": "W00_MB2_S03_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              823,
              75
            ],
            [
              777,
              48
            ],
            [
              776,
              53
            ],
            [
              820,
              78
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S03_SL3",
        "name": "W00_MB2_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              832,
              66
            ],
            [
              780,
              37
            ],
            [
              779,
              41
            ],
            [
              828,
              70
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S03_SL1",
        "name": "W00_MB3_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              837,
              61
            ],
            [
              782,
              30
            ],
            [
              781,
              35
            ],
            [
              833,
              65
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S03_SL2",
        "name": "W00_MB3_S03_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              842,
              56
            ],
            [
              784,
              23
            ],
            [
              783,
              28
            ],
            [
              838,
              60
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S03_SL3",
        "name": "W00_MB3_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              850,
              48
            ],
            [
              787,
              12
            ],
            [
              786,
              16
            ],
            [
              847,
              51
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S03_SL1",
        "name": "W00_MB4_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              855,
              43
            ],
            [
              789,
              5
            ],
            [
              788,
              10
            ],
            [
              851,
              46
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S03_SL3",
        "name": "W00_MB4_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              766,
              87
            ],
            [
              733,
              87
            ],
            [
              734,
              91
            ],
            [
              765,
              91
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S04_SL1",
        "name": "W00_MB1_S04_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              768,
              80
            ],
            [
              731,
              80
            ],
            [
              732,
              85
            ],
            [
              767,
              85
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S04_SL2",
        "name": "W00_MB1_S04_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              770,
              73
            ],
            [
              729,
              73
            ],
            [
              731,
              78
            ],
            [
              768,
              78
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S04_SL3",
        "name": "W00_MB1_S04_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              773,
              61
            ],
            [
              726,
              61
            ],
            [
              728,
              66
            ],
            [
              771,
              66
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S04_SL1",
        "name": "W00_MB2_S04_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              774,
              55
            ],
            [
              725,
              55
            ],
            [
              726,
              60
            ],
            [
              773,
              60
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S04_SL2",
        "name": "W00_MB2_S04_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              776,
              48
            ],
            [
              723,
              48
            ],
            [
              724,
              53
            ],
            [
              775,
              53
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S04_SL3",
        "name": "W00_MB2_S04_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              779,
              36
            ],
            [
              720,
              36
            ],
            [
              721,
              41
            ],
            [
              778,
              41
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S04_SL1",
        "name": "W00_MB3_S04_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              781,
              30
            ],
            [
              718,
              30
            ],
            [
              719,
              34
            ],
            [
              780,
              34
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S04_SL2",
        "name": "W00_MB3_S04_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              783,
              23
            ],
            [
              716,
              23
            ],
            [
              718,
              28
            ],
            [
              781,
              28
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S04_SL3",
        "name": "W00_MB3_S04_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              786,
              11
            ],
            [
              713,
              11
            ],
            [
              714,
              16
            ],
            [
              785,
              16
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S04L_SL1",
        "name": "W00_MB4_S04L_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              788,
              4
            ],
            [
              711,
              4
            ],
            [
              713,
              9
            ],
            [
              786,
              9
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S04L_SL3",
        "name": "W00_MB4_S04L_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              732,
              87
            ],
            [
              704,
              103
            ],
            [
              707,
              107
            ],
            [
              734,
              92
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S05_SL1",
        "name": "W00_MB1_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              731,
              80
            ],
            [
              699,
              98
            ],
            [
              702,
              102
            ],
            [
              732,
              85
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S05_SL2",
        "name": "W00_MB1_S05_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              729,
              73
            ],
            [
              694,
              93
            ],
            [
              697,
              97
            ],
            [
              730,
              78
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S05_SL3",
        "name": "W00_MB1_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              725,
              62
            ],
            [
              685,
              85
            ],
            [
              689,
              88
            ],
            [
              727,
              67
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S05_SL1",
        "name": "W00_MB2_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              724,
              55
            ],
            [
              681,
              80
            ],
            [
              684,
              83
            ],
            [
              725,
              60
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S05_SL2",
        "name": "W00_MB2_S05_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              722,
              48
            ],
            [
              676,
              75
            ],
            [
              679,
              78
            ],
            [
              723,
              53
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S05_SL3",
        "name": "W00_MB2_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              719,
              37
            ],
            [
              667,
              66
            ],
            [
              671,
              70
            ],
            [
              720,
              41
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S05_SL1",
        "name": "W00_MB3_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              717,
              30
            ],
            [
              662,
              61
            ],
            [
              666,
              65
            ],
            [
              718,
              35
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S05_SL2",
        "name": "W00_MB3_S05_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              715,
              23
            ],
            [
              657,
              56
            ],
            [
              661,
              60
            ],
            [
              716,
              28
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S05_SL3",
        "name": "W00_MB3_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              712,
              12
            ],
            [
              649,
              48
            ],
            [
              652,
              51
            ],
            [
              713,
              16
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S05_SL1",
        "name": "W00_MB4_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              710,
              5
            ],
            [
              644,
              43
            ],
            [
              648,
              46
            ],
            [
              711,
              10
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S05_SL3",
        "name": "W00_MB4_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              703,
              104
            ],
            [
              687,
              132
            ],
            [
              692,
              134
            ],
            [
              707,
              107
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S06_SL1",
        "name": "W00_MB1_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              698,
              99
            ],
            [
              680,
              131
            ],
            [
              685,
              132
            ],
            [
              702,
              102
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S06_SL2",
        "name": "W00_MB1_S06_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              693,
              94
            ],
            [
              673,
              129
            ],
            [
              678,
              130
            ],
            [
              697,
              97
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S06_SL3",
        "name": "W00_MB1_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              685,
              85
            ],
            [
              662,
              125
            ],
            [
              667,
              127
            ],
            [
              688,
              89
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S06_SL1",
        "name": "W00_MB2_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              680,
              81
            ],
            [
              655,
              124
            ],
            [
              660,
              125
            ],
            [
              683,
              84
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S06_SL2",
        "name": "W00_MB2_S06_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              675,
              76
            ],
            [
              648,
              122
            ],
            [
              653,
              123
            ],
            [
              678,
              79
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S06_SL3",
        "name": "W00_MB2_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              666,
              67
            ],
            [
              637,
              119
            ],
            [
              641,
              120
            ],
            [
              670,
              71
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S06_SL1",
        "name": "W00_MB3_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              661,
              62
            ],
            [
              630,
              117
            ],
            [
              635,
              118
            ],
            [
              665,
              66
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S06_SL2",
        "name": "W00_MB3_S06_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              656,
              57
            ],
            [
              623,
              115
            ],
            [
              628,
              116
            ],
            [
              660,
              61
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S06_SL3",
        "name": "W00_MB3_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              648,
              49
            ],
            [
              612,
              112
            ],
            [
              616,
              113
            ],
            [
              651,
              52
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S06_SL1",
        "name": "W00_MB4_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              643,
              44
            ],
            [
              605,
              110
            ],
            [
              610,
              111
            ],
            [
              646,
              48
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S06_SL3",
        "name": "W00_MB4_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              687,
              133
            ],
            [
              687,
              166
            ],
            [
              691,
              165
            ],
            [
              691,
              134
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S07_SL1",
        "name": "W00_MB1_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              680,
              131
            ],
            [
              680,
              168
            ],
            [
              685,
              167
            ],
            [
              685,
              132
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S07_SL2",
        "name": "W00_MB1_S07_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              673,
              129
            ],
            [
              673,
              170
            ],
            [
              678,
              168
            ],
            [
              678,
              131
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S07_SL3",
        "name": "W00_MB1_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              661,
              126
            ],
            [
              661,
              173
            ],
            [
              666,
              171
            ],
            [
              666,
              128
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S07_SL1",
        "name": "W00_MB2_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              655,
              125
            ],
            [
              655,
              174
            ],
            [
              660,
              173
            ],
            [
              660,
              126
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S07_SL2",
        "name": "W00_MB2_S07_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              648,
              123
            ],
            [
              648,
              176
            ],
            [
              653,
              175
            ],
            [
              653,
              124
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S07_SL3",
        "name": "W00_MB2_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              636,
              120
            ],
            [
              636,
              179
            ],
            [
              641,
              178
            ],
            [
              641,
              121
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S07_SL1",
        "name": "W00_MB3_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              630,
              118
            ],
            [
              630,
              181
            ],
            [
              634,
              180
            ],
            [
              634,
              119
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S07_SL2",
        "name": "W00_MB3_S07_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              623,
              116
            ],
            [
              623,
              183
            ],
            [
              628,
              181
            ],
            [
              628,
              118
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S07_SL3",
        "name": "W00_MB3_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              611,
              113
            ],
            [
              611,
              186
            ],
            [
              616,
              185
            ],
            [
              616,
              114
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S07_SL1",
        "name": "W00_MB4_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              604,
              111
            ],
            [
              604,
              188
            ],
            [
              609,
              186
            ],
            [
              609,
              113
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S07_SL3",
        "name": "W00_MB4_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              687,
              167
            ],
            [
              703,
              195
            ],
            [
              707,
              192
            ],
            [
              692,
              165
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S08_SL1",
        "name": "W00_MB1_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              680,
              168
            ],
            [
              698,
              200
            ],
            [
              702,
              197
            ],
            [
              685,
              167
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S08_SL2",
        "name": "W00_MB1_S08_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              673,
              170
            ],
            [
              693,
              205
            ],
            [
              697,
              202
            ],
            [
              678,
              169
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S08_SL3",
        "name": "W00_MB1_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              662,
              174
            ],
            [
              685,
              214
            ],
            [
              688,
              210
            ],
            [
              667,
              172
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S08_SL1",
        "name": "W00_MB2_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              655,
              175
            ],
            [
              680,
              218
            ],
            [
              683,
              215
            ],
            [
              660,
              174
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S08_SL2",
        "name": "W00_MB2_S08_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              648,
              177
            ],
            [
              675,
              223
            ],
            [
              678,
              220
            ],
            [
              653,
              176
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S08_SL3",
        "name": "W00_MB2_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              637,
              180
            ],
            [
              666,
              232
            ],
            [
              670,
              228
            ],
            [
              641,
              179
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S08_SL1",
        "name": "W00_MB3_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              630,
              182
            ],
            [
              661,
              237
            ],
            [
              665,
              233
            ],
            [
              635,
              181
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S08_SL2",
        "name": "W00_MB3_S08_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              623,
              184
            ],
            [
              656,
              242
            ],
            [
              660,
              238
            ],
            [
              628,
              183
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S08_SL3",
        "name": "W00_MB3_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              612,
              187
            ],
            [
              648,
              250
            ],
            [
              651,
              247
            ],
            [
              616,
              186
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S08_SL1",
        "name": "W00_MB4_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              605,
              189
            ],
            [
              643,
              255
            ],
            [
              646,
              251
            ],
            [
              610,
              188
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S08_SL3",
        "name": "W00_MB4_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              704,
              196
            ],
            [
              732,
              212
            ],
            [
              734,
              207
            ],
            [
              707,
              192
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S09_SL1",
        "name": "W00_MB1_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              699,
              201
            ],
            [
              731,
              219
            ],
            [
              732,
              214
            ],
            [
              702,
              197
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S09_SL2",
        "name": "W00_MB1_S09_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              694,
              206
            ],
            [
              729,
              226
            ],
            [
              730,
              221
            ],
            [
              697,
              202
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S09_SL3",
        "name": "W00_MB1_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              685,
              214
            ],
            [
              725,
              237
            ],
            [
              727,
              232
            ],
            [
              689,
              211
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S09_SL1",
        "name": "W00_MB2_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              681,
              219
            ],
            [
              724,
              244
            ],
            [
              725,
              239
            ],
            [
              684,
              216
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S09_SL2",
        "name": "W00_MB2_S09_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              676,
              224
            ],
            [
              722,
              251
            ],
            [
              723,
              246
            ],
            [
              679,
              221
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S09_SL3",
        "name": "W00_MB2_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              667,
              233
            ],
            [
              719,
              262
            ],
            [
              720,
              258
            ],
            [
              671,
              229
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S09_SL1",
        "name": "W00_MB3_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              662,
              238
            ],
            [
              717,
              269
            ],
            [
              718,
              264
            ],
            [
              666,
              234
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S09_SL2",
        "name": "W00_MB3_S09_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              657,
              243
            ],
            [
              715,
              276
            ],
            [
              716,
              271
            ],
            [
              661,
              239
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S09_SL3",
        "name": "W00_MB3_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              649,
              251
            ],
            [
              712,
              287
            ],
            [
              713,
              283
            ],
            [
              652,
              248
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S09_SL1",
        "name": "W00_MB4_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              644,
              256
            ],
            [
              710,
              294
            ],
            [
              711,
              289
            ],
            [
              648,
              253
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S09_SL3",
        "name": "W00_MB4_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              733,
              212
            ],
            [
              766,
              212
            ],
            [
              765,
              208
            ],
            [
              734,
              208
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S10_SL1",
        "name": "W00_MB1_S10_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              731,
              219
            ],
            [
              768,
              219
            ],
            [
              767,
              214
            ],
            [
              732,
              214
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S10_SL2",
        "name": "W00_MB1_S10_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              729,
              226
            ],
            [
              770,
              226
            ],
            [
              768,
              221
            ],
            [
              731,
              221
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S10_SL3",
        "name": "W00_MB1_S10_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              726,
              238
            ],
            [
              773,
              238
            ],
            [
              771,
              233
            ],
            [
              728,
              233
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S10_SL1",
        "name": "W00_MB2_S10_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              725,
              244
            ],
            [
              774,
              244
            ],
            [
              773,
              239
            ],
            [
              726,
              239
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S10_SL2",
        "name": "W00_MB2_S10_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              723,
              251
            ],
            [
              776,
              251
            ],
            [
              775,
              246
            ],
            [
              724,
              246
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S10_SL3",
        "name": "W00_MB2_S10_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              720,
              263
            ],
            [
              779,
              263
            ],
            [
              778,
              258
            ],
            [
              721,
              258
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S10_SL1",
        "name": "W00_MB3_S10_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              718,
              269
            ],
            [
              781,
              269
            ],
            [
              780,
              265
            ],
            [
              719,
              265
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S10_SL2",
        "name": "W00_MB3_S10_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              716,
              276
            ],
            [
              783,
              276
            ],
            [
              781,
              271
            ],
            [
              718,
              271
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S10_SL3",
        "name": "W00_MB3_S10_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              713,
              288
            ],
            [
              786,
              288
            ],
            [
              785,
              283
            ],
            [
              714,
              283
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S10L_SL1",
        "name": "W00_MB4_S10L_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              711,
              295
            ],
            [
              788,
              295
            ],
            [
              786,
              290
            ],
            [
              713,
              290
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S10L_SL3",
        "name": "W00_MB4_S10L_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              767,
              212
            ],
            [
              795,
              196
            ],
            [
              792,
              192
            ],
            [
              765,
              207
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S11_SL1",
        "name": "W00_MB1_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              768,
              219
            ],
            [
              800,
              201
            ],
            [
              797,
              197
            ],
            [
              767,
              214
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S11_SL2",
        "name": "W00_MB1_S11_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              770,
              226
            ],
            [
              805,
              206
            ],
            [
              802,
              202
            ],
            [
              769,
              221
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S11_SL3",
        "name": "W00_MB1_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              774,
              237
            ],
            [
              814,
              214
            ],
            [
              810,
              211
            ],
            [
              772,
              232
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S11_SL1",
        "name": "W00_MB2_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              775,
              244
            ],
            [
              818,
              219
            ],
            [
              815,
              216
            ],
            [
              774,
              239
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S11_SL2",
        "name": "W00_MB2_S11_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              777,
              251
            ],
            [
              823,
              224
            ],
            [
              820,
              221
            ],
            [
              776,
              246
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S11_SL3",
        "name": "W00_MB2_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              780,
              262
            ],
            [
              832,
              233
            ],
            [
              828,
              229
            ],
            [
              779,
              258
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S11_SL1",
        "name": "W00_MB3_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              782,
              269
            ],
            [
              837,
              238
            ],
            [
              833,
              234
            ],
            [
              781,
              264
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S11_SL2",
        "name": "W00_MB3_S11_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              784,
              276
            ],
            [
              842,
              243
            ],
            [
              838,
              239
            ],
            [
              783,
              271
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S11_SL3",
        "name": "W00_MB3_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              787,
              287
            ],
            [
              850,
              251
            ],
            [
              847,
              248
            ],
            [
              786,
              283
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S11_SL1",
        "name": "W00_MB4_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              789,
              294
            ],
            [
              855,
              256
            ],
            [
              851,
              253
            ],
            [
              788,
              289
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S11_SL3",
        "name": "W00_MB4_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              796,
              195
            ],
            [
              812,
              167
            ],
            [
              807,
              165
            ],
            [
              792,
              192
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S12_SL1",
        "name": "W00_MB1_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              801,
              200
            ],
            [
              819,
              168
            ],
            [
              814,
              167
            ],
            [
              797,
              197
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S12_SL2",
        "name": "W00_MB1_S12_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              806,
              205
            ],
            [
              826,
              170
            ],
            [
              821,
              169
            ],
            [
              802,
              202
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB1_S12_SL3",
        "name": "W00_MB1_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              814,
              214
            ],
            [
              837,
              174
            ],
            [
              832,
              172
            ],
            [
              811,
              210
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S12_SL1",
        "name": "W00_MB2_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              819,
              218
            ],
            [
              844,
              175
            ],
            [
              839,
              174
            ],
            [
              816,
              215
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S12_SL2",
        "name": "W00_MB2_S12_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              824,
              223
            ],
            [
              851,
              177
            ],
            [
              846,
              176
            ],
            [
              821,
              220
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB2_S12_SL3",
        "name": "W00_MB2_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              833,
              232
            ],
            [
              862,
              180
            ],
            [
              858,
              179
            ],
            [
              829,
              228
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S12_SL1",
        "name": "W00_MB3_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              838,
              237
            ],
            [
              869,
              182
            ],
            [
              864,
              181
            ],
            [
              834,
              233
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S12_SL2",
        "name": "W00_MB3_S12_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              843,
              242
            ],
            [
              876,
              184
            ],
            [
              871,
              183
            ],
            [
              839,
              238
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB3_S12_SL3",
        "name": "W00_MB3_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              851,
              250
            ],
            [
              887,
              187
            ],
            [
              883,
              186
            ],
            [
              848,
              247
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S12_SL1",
        "name": "W00_MB4_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              856,
              255
            ],
            [
              894,
              189
            ],
            [
              889,
              188
            ],
            [
              853,
              251
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "W00_MB4_S12_SL3",
        "name": "W00_MB4_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              362,
              466
            ],
            [
              362,
              433
            ],
            [
              358,
              434
            ],
            [
              358,
              465
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S01_SL1",
        "name": "WP1_MB1_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              369,
              468
            ],
            [
              369,
              431
            ],
            [
              364,
              432
            ],
            [
              364,
              467
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S01_SL2",
        "name": "WP1_MB1_S01_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              376,
              470
            ],
            [
              376,
              429
            ],
            [
              371,
              431
            ],
            [
              371,
              468
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S01_SL3",
        "name": "WP1_MB1_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              388,
              473
            ],
            [
              388,
              426
            ],
            [
              383,
              428
            ],
            [
              383,
              471
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S01_SL1",
        "name": "WP1_MB2_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              394,
              474
            ],
            [
              394,
              425
            ],
            [
              389,
              426
            ],
            [
              389,
              473
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S01_SL2",
        "name": "WP1_MB2_S01_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              401,
              476
            ],
            [
              401,
              423
            ],
            [
              396,
              424
            ],
            [
              396,
              475
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S01_SL3",
        "name": "WP1_MB2_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              413,
              479
            ],
            [
              413,
              420
            ],
            [
              408,
              421
            ],
            [
              408,
              478
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S01_SL1",
        "name": "WP1_MB3_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              419,
              481
            ],
            [
              419,
              418
            ],
            [
              415,
              419
            ],
            [
              415,
              480
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S01_SL2",
        "name": "WP1_MB3_S01_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              426,
              483
            ],
            [
              426,
              416
            ],
            [
              421,
              418
            ],
            [
              421,
              481
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S01_SL3",
        "name": "WP1_MB3_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              438,
              486
            ],
            [
              438,
              413
            ],
            [
              433,
              414
            ],
            [
              433,
              485
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S01_SL1",
        "name": "WP1_MB4_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              445,
              488
            ],
            [
              445,
              411
            ],
            [
              440,
              413
            ],
            [
              440,
              486
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S01_SL3",
        "name": "WP1_MB4_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              362,
              432
            ],
            [
              346,
              404
            ],
            [
              342,
              407
            ],
            [
              357,
              434
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S02_SL1",
        "name": "WP1_MB1_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              369,
              431
            ],
            [
              351,
              399
            ],
            [
              347,
              402
            ],
            [
              364,
              432
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S02_SL2",
        "name": "WP1_MB1_S02_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              376,
              429
            ],
            [
              356,
              394
            ],
            [
              352,
              397
            ],
            [
              371,
              430
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S02_SL3",
        "name": "WP1_MB1_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              387,
              425
            ],
            [
              364,
              385
            ],
            [
              361,
              389
            ],
            [
              382,
              427
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S02_SL1",
        "name": "WP1_MB2_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              394,
              424
            ],
            [
              369,
              381
            ],
            [
              366,
              384
            ],
            [
              389,
              425
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S02_SL2",
        "name": "WP1_MB2_S02_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              401,
              422
            ],
            [
              374,
              376
            ],
            [
              371,
              379
            ],
            [
              396,
              423
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S02_SL3",
        "name": "WP1_MB2_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              412,
              419
            ],
            [
              383,
              367
            ],
            [
              379,
              371
            ],
            [
              408,
              420
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S02_SL1",
        "name": "WP1_MB3_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              419,
              417
            ],
            [
              388,
              362
            ],
            [
              384,
              366
            ],
            [
              414,
              418
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S02_SL2",
        "name": "WP1_MB3_S02_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              426,
              415
            ],
            [
              393,
              357
            ],
            [
              389,
              361
            ],
            [
              421,
              416
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S02_SL3",
        "name": "WP1_MB3_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              437,
              412
            ],
            [
              401,
              349
            ],
            [
              398,
              352
            ],
            [
              433,
              413
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S02_SL1",
        "name": "WP1_MB4_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              444,
              410
            ],
            [
              406,
              344
            ],
            [
              403,
              348
            ],
            [
              439,
              411
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S02_SL3",
        "name": "WP1_MB4_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              345,
              403
            ],
            [
              317,
              387
            ],
            [
              315,
              392
            ],
            [
              342,
              407
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S03_SL1",
        "name": "WP1_MB1_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              350,
              398
            ],
            [
              318,
              380
            ],
            [
              317,
              385
            ],
            [
              347,
              402
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S03_SL2",
        "name": "WP1_MB1_S03_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              355,
              393
            ],
            [
              320,
              373
            ],
            [
              319,
              378
            ],
            [
              352,
              397
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S03_SL3",
        "name": "WP1_MB1_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              364,
              385
            ],
            [
              324,
              362
            ],
            [
              322,
              367
            ],
            [
              360,
              388
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S03_SL1",
        "name": "WP1_MB2_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              368,
              380
            ],
            [
              325,
              355
            ],
            [
              324,
              360
            ],
            [
              365,
              383
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S03_SL2",
        "name": "WP1_MB2_S03_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              373,
              375
            ],
            [
              327,
              348
            ],
            [
              326,
              353
            ],
            [
              370,
              378
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S03_SL3",
        "name": "WP1_MB2_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              382,
              366
            ],
            [
              330,
              337
            ],
            [
              329,
              341
            ],
            [
              378,
              370
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S03_SL1",
        "name": "WP1_MB3_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              387,
              361
            ],
            [
              332,
              330
            ],
            [
              331,
              335
            ],
            [
              383,
              365
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S03_SL2",
        "name": "WP1_MB3_S03_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              392,
              356
            ],
            [
              334,
              323
            ],
            [
              333,
              328
            ],
            [
              388,
              360
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S03_SL3",
        "name": "WP1_MB3_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              400,
              348
            ],
            [
              337,
              312
            ],
            [
              336,
              316
            ],
            [
              397,
              351
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S03_SL1",
        "name": "WP1_MB4_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              405,
              343
            ],
            [
              339,
              305
            ],
            [
              338,
              310
            ],
            [
              401,
              346
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S03_SL3",
        "name": "WP1_MB4_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              316,
              387
            ],
            [
              283,
              387
            ],
            [
              284,
              391
            ],
            [
              315,
              391
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S04_SL1",
        "name": "WP1_MB1_S04_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              318,
              380
            ],
            [
              281,
              380
            ],
            [
              282,
              385
            ],
            [
              317,
              385
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S04_SL2",
        "name": "WP1_MB1_S04_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              320,
              373
            ],
            [
              279,
              373
            ],
            [
              281,
              378
            ],
            [
              318,
              378
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S04_SL3",
        "name": "WP1_MB1_S04_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              323,
              361
            ],
            [
              276,
              361
            ],
            [
              278,
              366
            ],
            [
              321,
              366
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S04_SL1",
        "name": "WP1_MB2_S04_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              324,
              355
            ],
            [
              275,
              355
            ],
            [
              276,
              360
            ],
            [
              323,
              360
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S04_SL2",
        "name": "WP1_MB2_S04_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              326,
              348
            ],
            [
              273,
              348
            ],
            [
              274,
              353
            ],
            [
              325,
              353
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S04_SL3",
        "name": "WP1_MB2_S04_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              329,
              336
            ],
            [
              270,
              336
            ],
            [
              271,
              341
            ],
            [
              328,
              341
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S04_SL1",
        "name": "WP1_MB3_S04_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              331,
              330
            ],
            [
              268,
              330
            ],
            [
              269,
              334
            ],
            [
              330,
              334
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S04_SL2",
        "name": "WP1_MB3_S04_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              333,
              323
            ],
            [
              266,
              323
            ],
            [
              268,
              328
            ],
            [
              331,
              328
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S04_SL3",
        "name": "WP1_MB3_S04_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              336,
              311
            ],
            [
              263,
              311
            ],
            [
              264,
              316
            ],
            [
              335,
              316
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S04L_SL1",
        "name": "WP1_MB4_S04L_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              338,
              304
            ],
            [
              261,
              304
            ],
            [
              263,
              309
            ],
            [
              336,
              309
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S04L_SL3",
        "name": "WP1_MB4_S04L_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              282,
              387
            ],
            [
              254,
              403
            ],
            [
              257,
              407
            ],
            [
              284,
              392
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S05_SL1",
        "name": "WP1_MB1_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              281,
              380
            ],
            [
              249,
              398
            ],
            [
              252,
              402
            ],
            [
              282,
              385
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S05_SL2",
        "name": "WP1_MB1_S05_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              279,
              373
            ],
            [
              244,
              393
            ],
            [
              247,
              397
            ],
            [
              280,
              378
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S05_SL3",
        "name": "WP1_MB1_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              275,
              362
            ],
            [
              235,
              385
            ],
            [
              239,
              388
            ],
            [
              277,
              367
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S05_SL1",
        "name": "WP1_MB2_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              274,
              355
            ],
            [
              231,
              380
            ],
            [
              234,
              383
            ],
            [
              275,
              360
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S05_SL2",
        "name": "WP1_MB2_S05_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              272,
              348
            ],
            [
              226,
              375
            ],
            [
              229,
              378
            ],
            [
              273,
              353
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S05_SL3",
        "name": "WP1_MB2_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              269,
              337
            ],
            [
              217,
              366
            ],
            [
              221,
              370
            ],
            [
              270,
              341
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S05_SL1",
        "name": "WP1_MB3_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              267,
              330
            ],
            [
              212,
              361
            ],
            [
              216,
              365
            ],
            [
              268,
              335
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S05_SL2",
        "name": "WP1_MB3_S05_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              265,
              323
            ],
            [
              207,
              356
            ],
            [
              211,
              360
            ],
            [
              266,
              328
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S05_SL3",
        "name": "WP1_MB3_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              262,
              312
            ],
            [
              199,
              348
            ],
            [
              202,
              351
            ],
            [
              263,
              316
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S05_SL1",
        "name": "WP1_MB4_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              260,
              305
            ],
            [
              194,
              343
            ],
            [
              198,
              346
            ],
            [
              261,
              310
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S05_SL3",
        "name": "WP1_MB4_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              253,
              404
            ],
            [
              237,
              432
            ],
            [
              242,
              434
            ],
            [
              257,
              407
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S06_SL1",
        "name": "WP1_MB1_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              248,
              399
            ],
            [
              230,
              431
            ],
            [
              235,
              432
            ],
            [
              252,
              402
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S06_SL2",
        "name": "WP1_MB1_S06_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              243,
              394
            ],
            [
              223,
              429
            ],
            [
              228,
              430
            ],
            [
              247,
              397
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S06_SL3",
        "name": "WP1_MB1_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              235,
              385
            ],
            [
              212,
              425
            ],
            [
              217,
              427
            ],
            [
              238,
              389
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S06_SL1",
        "name": "WP1_MB2_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              230,
              381
            ],
            [
              205,
              424
            ],
            [
              210,
              425
            ],
            [
              233,
              384
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S06_SL2",
        "name": "WP1_MB2_S06_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              225,
              376
            ],
            [
              198,
              422
            ],
            [
              203,
              423
            ],
            [
              228,
              379
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S06_SL3",
        "name": "WP1_MB2_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              216,
              367
            ],
            [
              187,
              419
            ],
            [
              191,
              420
            ],
            [
              220,
              371
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S06_SL1",
        "name": "WP1_MB3_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              211,
              362
            ],
            [
              180,
              417
            ],
            [
              185,
              418
            ],
            [
              215,
              366
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S06_SL2",
        "name": "WP1_MB3_S06_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              206,
              357
            ],
            [
              173,
              415
            ],
            [
              178,
              416
            ],
            [
              210,
              361
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S06_SL3",
        "name": "WP1_MB3_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              198,
              349
            ],
            [
              162,
              412
            ],
            [
              166,
              413
            ],
            [
              201,
              352
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S06_SL1",
        "name": "WP1_MB4_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              193,
              344
            ],
            [
              155,
              410
            ],
            [
              160,
              411
            ],
            [
              196,
              348
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S06_SL3",
        "name": "WP1_MB4_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              237,
              433
            ],
            [
              237,
              466
            ],
            [
              241,
              465
            ],
            [
              241,
              434
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S07_SL1",
        "name": "WP1_MB1_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              230,
              431
            ],
            [
              230,
              468
            ],
            [
              235,
              467
            ],
            [
              235,
              432
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S07_SL2",
        "name": "WP1_MB1_S07_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              223,
              429
            ],
            [
              223,
              470
            ],
            [
              228,
              468
            ],
            [
              228,
              431
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S07_SL3",
        "name": "WP1_MB1_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              211,
              426
            ],
            [
              211,
              473
            ],
            [
              216,
              471
            ],
            [
              216,
              428
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S07_SL1",
        "name": "WP1_MB2_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              205,
              425
            ],
            [
              205,
              474
            ],
            [
              210,
              473
            ],
            [
              210,
              426
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S07_SL2",
        "name": "WP1_MB2_S07_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              198,
              423
            ],
            [
              198,
              476
            ],
            [
              203,
              475
            ],
            [
              203,
              424
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S07_SL3",
        "name": "WP1_MB2_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              186,
              420
            ],
            [
              186,
              479
            ],
            [
              191,
              478
            ],
            [
              191,
              421
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S07_SL1",
        "name": "WP1_MB3_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              180,
              418
            ],
            [
              180,
              481
            ],
            [
              184,
              480
            ],
            [
              184,
              419
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S07_SL2",
        "name": "WP1_MB3_S07_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              173,
              416
            ],
            [
              173,
              483
            ],
            [
              178,
              481
            ],
            [
              178,
              418
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S07_SL3",
        "name": "WP1_MB3_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              161,
              413
            ],
            [
              161,
              486
            ],
            [
              166,
              485
            ],
            [
              166,
              414
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S07_SL1",
        "name": "WP1_MB4_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              154,
              411
            ],
            [
              154,
              488
            ],
            [
              159,
              486
            ],
            [
              159,
              413
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S07_SL3",
        "name": "WP1_MB4_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              237,
              467
            ],
            [
              253,
              495
            ],
            [
              257,
              492
            ],
            [
              242,
              465
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S08_SL1",
        "name": "WP1_MB1_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              230,
              468
            ],
            [
              248,
              500
            ],
            [
              252,
              497
            ],
            [
              235,
              467
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S08_SL2",
        "name": "WP1_MB1_S08_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              223,
              470
            ],
            [
              243,
              505
            ],
            [
              247,
              502
            ],
            [
              228,
              469
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S08_SL3",
        "name": "WP1_MB1_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              212,
              474
            ],
            [
              235,
              514
            ],
            [
              238,
              510
            ],
            [
              217,
              472
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S08_SL1",
        "name": "WP1_MB2_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              205,
              475
            ],
            [
              230,
              518
            ],
            [
              233,
              515
            ],
            [
              210,
              474
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S08_SL2",
        "name": "WP1_MB2_S08_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              198,
              477
            ],
            [
              225,
              523
            ],
            [
              228,
              520
            ],
            [
              203,
              476
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S08_SL3",
        "name": "WP1_MB2_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              187,
              480
            ],
            [
              216,
              532
            ],
            [
              220,
              528
            ],
            [
              191,
              479
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S08_SL1",
        "name": "WP1_MB3_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              180,
              482
            ],
            [
              211,
              537
            ],
            [
              215,
              533
            ],
            [
              185,
              481
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S08_SL2",
        "name": "WP1_MB3_S08_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              173,
              484
            ],
            [
              206,
              542
            ],
            [
              210,
              538
            ],
            [
              178,
              483
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S08_SL3",
        "name": "WP1_MB3_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              162,
              487
            ],
            [
              198,
              550
            ],
            [
              201,
              547
            ],
            [
              166,
              486
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S08_SL1",
        "name": "WP1_MB4_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              155,
              489
            ],
            [
              193,
              555
            ],
            [
              196,
              551
            ],
            [
              160,
              488
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S08_SL3",
        "name": "WP1_MB4_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              254,
              496
            ],
            [
              282,
              512
            ],
            [
              284,
              507
            ],
            [
              257,
              492
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S09_SL1",
        "name": "WP1_MB1_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              249,
              501
            ],
            [
              281,
              519
            ],
            [
              282,
              514
            ],
            [
              252,
              497
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S09_SL2",
        "name": "WP1_MB1_S09_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              244,
              506
            ],
            [
              279,
              526
            ],
            [
              280,
              521
            ],
            [
              247,
              502
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S09_SL3",
        "name": "WP1_MB1_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              235,
              514
            ],
            [
              275,
              537
            ],
            [
              277,
              532
            ],
            [
              239,
              511
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S09_SL1",
        "name": "WP1_MB2_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              231,
              519
            ],
            [
              274,
              544
            ],
            [
              275,
              539
            ],
            [
              234,
              516
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S09_SL2",
        "name": "WP1_MB2_S09_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              226,
              524
            ],
            [
              272,
              551
            ],
            [
              273,
              546
            ],
            [
              229,
              521
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S09_SL3",
        "name": "WP1_MB2_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              217,
              533
            ],
            [
              269,
              562
            ],
            [
              270,
              558
            ],
            [
              221,
              529
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S09_SL1",
        "name": "WP1_MB3_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              212,
              538
            ],
            [
              267,
              569
            ],
            [
              268,
              564
            ],
            [
              216,
              534
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S09_SL2",
        "name": "WP1_MB3_S09_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              207,
              543
            ],
            [
              265,
              576
            ],
            [
              266,
              571
            ],
            [
              211,
              539
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S09_SL3",
        "name": "WP1_MB3_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              199,
              551
            ],
            [
              262,
              587
            ],
            [
              263,
              583
            ],
            [
              202,
              548
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S09_SL1",
        "name": "WP1_MB4_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              194,
              556
            ],
            [
              260,
              594
            ],
            [
              261,
              589
            ],
            [
              198,
              553
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S09_SL3",
        "name": "WP1_MB4_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              283,
              512
            ],
            [
              316,
              512
            ],
            [
              315,
              508
            ],
            [
              284,
              508
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S10_SL1",
        "name": "WP1_MB1_S10_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              281,
              519
            ],
            [
              318,
              519
            ],
            [
              317,
              514
            ],
            [
              282,
              514
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S10_SL2",
        "name": "WP1_MB1_S10_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              279,
              526
            ],
            [
              320,
              526
            ],
            [
              318,
              521
            ],
            [
              281,
              521
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S10_SL3",
        "name": "WP1_MB1_S10_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              276,
              538
            ],
            [
              323,
              538
            ],
            [
              321,
              533
            ],
            [
              278,
              533
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S10_SL1",
        "name": "WP1_MB2_S10_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              275,
              544
            ],
            [
              324,
              544
            ],
            [
              323,
              539
            ],
            [
              276,
              539
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S10_SL2",
        "name": "WP1_MB2_S10_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              273,
              551
            ],
            [
              326,
              551
            ],
            [
              325,
              546
            ],
            [
              274,
              546
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S10_SL3",
        "name": "WP1_MB2_S10_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              270,
              563
            ],
            [
              329,
              563
            ],
            [
              328,
              558
            ],
            [
              271,
              558
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S10_SL1",
        "name": "WP1_MB3_S10_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              268,
              569
            ],
            [
              331,
              569
            ],
            [
              330,
              565
            ],
            [
              269,
              565
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S10_SL2",
        "name": "WP1_MB3_S10_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              266,
              576
            ],
            [
              333,
              576
            ],
            [
              331,
              571
            ],
            [
              268,
              571
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S10_SL3",
        "name": "WP1_MB3_S10_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              263,
              588
            ],
            [
              336,
              588
            ],
            [
              335,
              583
            ],
            [
              264,
              583
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S10L_SL1",
        "name": "WP1_MB4_S10L_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              261,
              595
            ],
            [
              338,
              595
            ],
            [
              336,
              590
            ],
            [
              263,
              590
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S10L_SL3",
        "name": "WP1_MB4_S10L_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              317,
              512
            ],
            [
              345,
              496
            ],
            [
              342,
              492
            ],
            [
              315,
              507
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S11_SL1",
        "name": "WP1_MB1_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              318,
              519
            ],
            [
              350,
              501
            ],
            [
              347,
              497
            ],
            [
              317,
              514
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S11_SL2",
        "name": "WP1_MB1_S11_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              320,
              526
            ],
            [
              355,
              506
            ],
            [
              352,
              502
            ],
            [
              319,
              521
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S11_SL3",
        "name": "WP1_MB1_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              324,
              537
            ],
            [
              364,
              514
            ],
            [
              360,
              511
            ],
            [
              322,
              532
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S11_SL1",
        "name": "WP1_MB2_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              325,
              544
            ],
            [
              368,
              519
            ],
            [
              365,
              516
            ],
            [
              324,
              539
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S11_SL2",
        "name": "WP1_MB2_S11_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              327,
              551
            ],
            [
              373,
              524
            ],
            [
              370,
              521
            ],
            [
              326,
              546
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S11_SL3",
        "name": "WP1_MB2_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              330,
              562
            ],
            [
              382,
              533
            ],
            [
              378,
              529
            ],
            [
              329,
              558
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S11_SL1",
        "name": "WP1_MB3_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              332,
              569
            ],
            [
              387,
              538
            ],
            [
              383,
              534
            ],
            [
              331,
              564
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S11_SL2",
        "name": "WP1_MB3_S11_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              334,
              576
            ],
            [
              392,
              543
            ],
            [
              388,
              539
            ],
            [
              333,
              571
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S11_SL3",
        "name": "WP1_MB3_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              337,
              587
            ],
            [
              400,
              551
            ],
            [
              397,
              548
            ],
            [
              336,
              583
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S11_SL1",
        "name": "WP1_MB4_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              339,
              594
            ],
            [
              405,
              556
            ],
            [
              401,
              553
            ],
            [
              338,
              589
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S11_SL3",
        "name": "WP1_MB4_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              346,
              495
            ],
            [
              362,
              467
            ],
            [
              357,
              465
            ],
            [
              342,
              492
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S12_SL1",
        "name": "WP1_MB1_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              351,
              500
            ],
            [
              369,
              468
            ],
            [
              364,
              467
            ],
            [
              347,
              497
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S12_SL2",
        "name": "WP1_MB1_S12_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              356,
              505
            ],
            [
              376,
              470
            ],
            [
              371,
              469
            ],
            [
              352,
              502
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB1_S12_SL3",
        "name": "WP1_MB1_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              364,
              514
            ],
            [
              387,
              474
            ],
            [
              382,
              472
            ],
            [
              361,
              510
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S12_SL1",
        "name": "WP1_MB2_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              369,
              518
            ],
            [
              394,
              475
            ],
            [
              389,
              474
            ],
            [
              366,
              515
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S12_SL2",
        "name": "WP1_MB2_S12_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              374,
              523
            ],
            [
              401,
              477
            ],
            [
              396,
              476
            ],
            [
              371,
              520
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB2_S12_SL3",
        "name": "WP1_MB2_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              383,
              532
            ],
            [
              412,
              480
            ],
            [
              408,
              479
            ],
            [
              379,
              528
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S12_SL1",
        "name": "WP1_MB3_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              388,
              537
            ],
            [
              419,
              482
            ],
            [
              414,
              481
            ],
            [
              384,
              533
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S12_SL2",
        "name": "WP1_MB3_S12_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              393,
              542
            ],
            [
              426,
              484
            ],
            [
              421,
              483
            ],
            [
              389,
              538
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB3_S12_SL3",
        "name": "WP1_MB3_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              401,
              550
            ],
            [
              437,
              487
            ],
            [
              433,
              486
            ],
            [
              398,
              547
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S12_SL1",
        "name": "WP1_MB4_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              406,
              555
            ],
            [
              444,
              489
            ],
            [
              439,
              488
            ],
            [
              403,
              551
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP1_MB4_S12_SL3",
        "name": "WP1_MB4_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              662,
              466
            ],
            [
              662,
              433
            ],
            [
              658,
              434
            ],
            [
              658,
              465
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S01_SL1",
        "name": "WP2_MB1_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              669,
              468
            ],
            [
              669,
              431
            ],
            [
              664,
              432
            ],
            [
              664,
              467
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S01_SL2",
        "name": "WP2_MB1_S01_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              676,
              470
            ],
            [
              676,
              429
            ],
            [
              671,
              431
            ],
            [
              671,
              468
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S01_SL3",
        "name": "WP2_MB1_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              688,
              473
            ],
            [
              688,
              426
            ],
            [
              683,
              428
            ],
            [
              683,
              471
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S01_SL1",
        "name": "WP2_MB2_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              694,
              474
            ],
            [
              694,
              425
            ],
            [
              689,
              426
            ],
            [
              689,
              473
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S01_SL2",
        "name": "WP2_MB2_S01_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              701,
              476
            ],
            [
              701,
              423
            ],
            [
              696,
              424
            ],
            [
              696,
              475
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S01_SL3",
        "name": "WP2_MB2_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              713,
              479
            ],
            [
              713,
              420
            ],
            [
              708,
              421
            ],
            [
              708,
              478
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S01_SL1",
        "name": "WP2_MB3_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              719,
              481
            ],
            [
              719,
              418
            ],
            [
              715,
              419
            ],
            [
              715,
              480
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S01_SL2",
        "name": "WP2_MB3_S01_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              726,
              483
            ],
            [
              726,
              416
            ],
            [
              721,
              418
            ],
            [
              721,
              481
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S01_SL3",
        "name": "WP2_MB3_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              738,
              486
            ],
            [
              738,
              413
            ],
            [
              733,
              414
            ],
            [
              733,
              485
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S01_SL1",
        "name": "WP2_MB4_S01_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              745,
              488
            ],
            [
              745,
              411
            ],
            [
              740,
              413
            ],
            [
              740,
              486
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S01_SL3",
        "name": "WP2_MB4_S01_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              662,
              432
            ],
            [
              646,
              404
            ],
            [
              642,
              407
            ],
            [
              657,
              434
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S02_SL1",
        "name": "WP2_MB1_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              669,
              431
            ],
            [
              651,
              399
            ],
            [
              647,
              402
            ],
            [
              664,
              432
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S02_SL2",
        "name": "WP2_MB1_S02_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              676,
              429
            ],
            [
              656,
              394
            ],
            [
              652,
              397
            ],
            [
              671,
              430
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S02_SL3",
        "name": "WP2_MB1_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              687,
              425
            ],
            [
              664,
              385
            ],
            [
              661,
              389
            ],
            [
              682,
              427
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S02_SL1",
        "name": "WP2_MB2_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              694,
              424
            ],
            [
              669,
              381
            ],
            [
              666,
              384
            ],
            [
              689,
              425
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S02_SL2",
        "name": "WP2_MB2_S02_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              701,
              422
            ],
            [
              674,
              376
            ],
            [
              671,
              379
            ],
            [
              696,
              423
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S02_SL3",
        "name": "WP2_MB2_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              712,
              419
            ],
            [
              683,
              367
            ],
            [
              679,
              371
            ],
            [
              708,
              420
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S02_SL1",
        "name": "WP2_MB3_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              719,
              417
            ],
            [
              688,
              362
            ],
            [
              684,
              366
            ],
            [
              714,
              418
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S02_SL2",
        "name": "WP2_MB3_S02_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              726,
              415
            ],
            [
              693,
              357
            ],
            [
              689,
              361
            ],
            [
              721,
              416
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S02_SL3",
        "name": "WP2_MB3_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              737,
              412
            ],
            [
              701,
              349
            ],
            [
              698,
              352
            ],
            [
              733,
              413
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S02_SL1",
        "name": "WP2_MB4_S02_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              744,
              410
            ],
            [
              706,
              344
            ],
            [
              703,
              348
            ],
            [
              739,
              411
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S02_SL3",
        "name": "WP2_MB4_S02_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              645,
              403
            ],
            [
              617,
              387
            ],
            [
              615,
              392
            ],
            [
              642,
              407
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S03_SL1",
        "name": "WP2_MB1_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              650,
              398
            ],
            [
              618,
              380
            ],
            [
              617,
              385
            ],
            [
              647,
              402
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S03_SL2",
        "name": "WP2_MB1_S03_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              655,
              393
            ],
            [
              620,
              373
            ],
            [
              619,
              378
            ],
            [
              652,
              397
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S03_SL3",
        "name": "WP2_MB1_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              664,
              385
            ],
            [
              624,
              362
            ],
            [
              622,
              367
            ],
            [
              660,
              388
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S03_SL1",
        "name": "WP2_MB2_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              668,
              380
            ],
            [
              625,
              355
            ],
            [
              624,
              360
            ],
            [
              665,
              383
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S03_SL2",
        "name": "WP2_MB2_S03_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              673,
              375
            ],
            [
              627,
              348
            ],
            [
              626,
              353
            ],
            [
              670,
              378
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S03_SL3",
        "name": "WP2_MB2_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              682,
              366
            ],
            [
              630,
              337
            ],
            [
              629,
              341
            ],
            [
              678,
              370
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S03_SL1",
        "name": "WP2_MB3_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              687,
              361
            ],
            [
              632,
              330
            ],
            [
              631,
              335
            ],
            [
              683,
              365
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S03_SL2",
        "name": "WP2_MB3_S03_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              692,
              356
            ],
            [
              634,
              323
            ],
            [
              633,
              328
            ],
            [
              688,
              360
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S03_SL3",
        "name": "WP2_MB3_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              700,
              348
            ],
            [
              637,
              312
            ],
            [
              636,
              316
            ],
            [
              697,
              351
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S03_SL1",
        "name": "WP2_MB4_S03_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              705,
              343
            ],
            [
              639,
              305
            ],
            [
              638,
              310
            ],
            [
              701,
              346
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S03_SL3",
        "name": "WP2_MB4_S03_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              616,
              387
            ],
            [
              583,
              387
            ],
            [
              584,
              391
            ],
            [
              615,
              391
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S04_SL1",
        "name": "WP2_MB1_S04_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              618,
              380
            ],
            [
              581,
              380
            ],
            [
              582,
              385
            ],
            [
              617,
              385
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S04_SL2",
        "name": "WP2_MB1_S04_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              620,
              373
            ],
            [
              579,
              373
            ],
            [
              581,
              378
            ],
            [
              618,
              378
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S04_SL3",
        "name": "WP2_MB1_S04_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              623,
              361
            ],
            [
              576,
              361
            ],
            [
              578,
              366
            ],
            [
              621,
              366
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S04_SL1",
        "name": "WP2_MB2_S04_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              624,
              355
            ],
            [
              575,
              355
            ],
            [
              576,
              360
            ],
            [
              623,
              360
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S04_SL2",
        "name": "WP2_MB2_S04_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              626,
              348
            ],
            [
              573,
              348
            ],
            [
              574,
              353
            ],
            [
              625,
              353
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S04_SL3",
        "name": "WP2_MB2_S04_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              629,
              336
            ],
            [
              570,
              336
            ],
            [
              571,
              341
            ],
            [
              628,
              341
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S04_SL1",
        "name": "WP2_MB3_S04_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              631,
              330
            ],
            [
              568,
              330
            ],
            [
              569,
              334
            ],
            [
              630,
              334
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S04_SL2",
        "name": "WP2_MB3_S04_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              633,
              323
            ],
            [
              566,
              323
            ],
            [
              568,
              328
            ],
            [
              631,
              328
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S04_SL3",
        "name": "WP2_MB3_S04_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              636,
              311
            ],
            [
              563,
              311
            ],
            [
              564,
              316
            ],
            [
              635,
              316
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S04L_SL1",
        "name": "WP2_MB4_S04L_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              638,
              304
            ],
            [
              561,
              304
            ],
            [
              563,
              309
            ],
            [
              636,
              309
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S04L_SL3",
        "name": "WP2_MB4_S04L_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              582,
              387
            ],
            [
              554,
              403
            ],
            [
              557,
              407
            ],
            [
              584,
              392
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S05_SL1",
        "name": "WP2_MB1_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              581,
              380
            ],
            [
              549,
              398
            ],
            [
              552,
              402
            ],
            [
              582,
              385
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S05_SL2",
        "name": "WP2_MB1_S05_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              579,
              373
            ],
            [
              544,
              393
            ],
            [
              547,
              397
            ],
            [
              580,
              378
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S05_SL3",
        "name": "WP2_MB1_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              575,
              362
            ],
            [
              535,
              385
            ],
            [
              539,
              388
            ],
            [
              577,
              367
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S05_SL1",
        "name": "WP2_MB2_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              574,
              355
            ],
            [
              531,
              380
            ],
            [
              534,
              383
            ],
            [
              575,
              360
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S05_SL2",
        "name": "WP2_MB2_S05_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              572,
              348
            ],
            [
              526,
              375
            ],
            [
              529,
              378
            ],
            [
              573,
              353
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S05_SL3",
        "name": "WP2_MB2_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              569,
              337
            ],
            [
              517,
              366
            ],
            [
              521,
              370
            ],
            [
              570,
              341
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S05_SL1",
        "name": "WP2_MB3_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              567,
              330
            ],
            [
              512,
              361
            ],
            [
              516,
              365
            ],
            [
              568,
              335
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S05_SL2",
        "name": "WP2_MB3_S05_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              565,
              323
            ],
            [
              507,
              356
            ],
            [
              511,
              360
            ],
            [
              566,
              328
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S05_SL3",
        "name": "WP2_MB3_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              562,
              312
            ],
            [
              499,
              348
            ],
            [
              502,
              351
            ],
            [
              563,
              316
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S05_SL1",
        "name": "WP2_MB4_S05_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              560,
              305
            ],
            [
              494,
              343
            ],
            [
              498,
              346
            ],
            [
              561,
              310
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S05_SL3",
        "name": "WP2_MB4_S05_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              553,
              404
            ],
            [
              537,
              432
            ],
            [
              542,
              434
            ],
            [
              557,
              407
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S06_SL1",
        "name": "WP2_MB1_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              548,
              399
            ],
            [
              530,
              431
            ],
            [
              535,
              432
            ],
            [
              552,
              402
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S06_SL2",
        "name": "WP2_MB1_S06_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              543,
              394
            ],
            [
              523,
              429
            ],
            [
              528,
              430
            ],
            [
              547,
              397
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S06_SL3",
        "name": "WP2_MB1_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              535,
              385
            ],
            [
              512,
              425
            ],
            [
              517,
              427
            ],
            [
              538,
              389
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S06_SL1",
        "name": "WP2_MB2_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              530,
              381
            ],
            [
              505,
              424
            ],
            [
              510,
              425
            ],
            [
              533,
              384
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S06_SL2",
        "name": "WP2_MB2_S06_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              525,
              376
            ],
            [
              498,
              422
            ],
            [
              503,
              423
            ],
            [
              528,
              379
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S06_SL3",
        "name": "WP2_MB2_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              516,
              367
            ],
            [
              487,
              419
            ],
            [
              491,
              420
            ],
            [
              520,
              371
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S06_SL1",
        "name": "WP2_MB3_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              511,
              362
            ],
            [
              480,
              417
            ],
            [
              485,
              418
            ],
            [
              515,
              366
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S06_SL2",
        "name": "WP2_MB3_S06_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              506,
              357
            ],
            [
              473,
              415
            ],
            [
              478,
              416
            ],
            [
              510,
              361
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S06_SL3",
        "name": "WP2_MB3_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              498,
              349
            ],
            [
              462,
              412
            ],
            [
              466,
              413
            ],
            [
              501,
              352
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S06_SL1",
        "name": "WP2_MB4_S06_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              493,
              344
            ],
            [
              455,
              410
            ],
            [
              460,
              411
            ],
            [
              496,
              348
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S06_SL3",
        "name": "WP2_MB4_S06_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              537,
              433
            ],
            [
              537,
              466
            ],
            [
              541,
              465
            ],
            [
              541,
              434
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S07_SL1",
        "name": "WP2_MB1_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              530,
              431
            ],
            [
              530,
              468
            ],
            [
              535,
              467
            ],
            [
              535,
              432
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S07_SL2",
        "name": "WP2_MB1_S07_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              523,
              429
            ],
            [
              523,
              470
            ],
            [
              528,
              468
            ],
            [
              528,
              431
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S07_SL3",
        "name": "WP2_MB1_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              511,
              426
            ],
            [
              511,
              473
            ],
            [
              516,
              471
            ],
            [
              516,
              428
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S07_SL1",
        "name": "WP2_MB2_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              505,
              425
            ],
            [
              505,
              474
            ],
            [
              510,
              473
            ],
            [
              510,
              426
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S07_SL2",
        "name": "WP2_MB2_S07_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              498,
              423
            ],
            [
              498,
              476
            ],
            [
              503,
              475
            ],
            [
              503,
              424
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S07_SL3",
        "name": "WP2_MB2_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              486,
              420
            ],
            [
              486,
              479
            ],
            [
              491,
              478
            ],
            [
              491,
              421
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S07_SL1",
        "name": "WP2_MB3_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              480,
              418
            ],
            [
              480,
              481
            ],
            [
              484,
              480
            ],
            [
              484,
              419
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S07_SL2",
        "name": "WP2_MB3_S07_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              473,
              416
            ],
            [
              473,
              483
            ],
            [
              478,
              481
            ],
            [
              478,
              418
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S07_SL3",
        "name": "WP2_MB3_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              461,
              413
            ],
            [
              461,
              486
            ],
            [
              466,
              485
            ],
            [
              466,
              414
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S07_SL1",
        "name": "WP2_MB4_S07_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              454,
              411
            ],
            [
              454,
              488
            ],
            [
              459,
              486
            ],
            [
              459,
              413
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S07_SL3",
        "name": "WP2_MB4_S07_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              537,
              467
            ],
            [
              553,
              495
            ],
            [
              557,
              492
            ],
            [
              542,
              465
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S08_SL1",
        "name": "WP2_MB1_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              530,
              468
            ],
            [
              548,
              500
            ],
            [
              552,
              497
            ],
            [
              535,
              467
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S08_SL2",
        "name": "WP2_MB1_S08_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              523,
              470
            ],
            [
              543,
              505
            ],
            [
              547,
              502
            ],
            [
              528,
              469
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S08_SL3",
        "name": "WP2_MB1_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              512,
              474
            ],
            [
              535,
              514
            ],
            [
              538,
              510
            ],
            [
              517,
              472
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S08_SL1",
        "name": "WP2_MB2_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              505,
              475
            ],
            [
              530,
              518
            ],
            [
              533,
              515
            ],
            [
              510,
              474
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S08_SL2",
        "name": "WP2_MB2_S08_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              498,
              477
            ],
            [
              525,
              523
            ],
            [
              528,
              520
            ],
            [
              503,
              476
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S08_SL3",
        "name": "WP2_MB2_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              487,
              480
            ],
            [
              516,
              532
            ],
            [
              520,
              528
            ],
            [
              491,
              479
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S08_SL1",
        "name": "WP2_MB3_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              480,
              482
            ],
            [
              511,
              537
            ],
            [
              515,
              533
            ],
            [
              485,
              481
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S08_SL2",
        "name": "WP2_MB3_S08_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              473,
              484
            ],
            [
              506,
              542
            ],
            [
              510,
              538
            ],
            [
              478,
              483
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S08_SL3",
        "name": "WP2_MB3_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              462,
              487
            ],
            [
              498,
              550
            ],
            [
              501,
              547
            ],
            [
              466,
              486
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S08_SL1",
        "name": "WP2_MB4_S08_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              455,
              489
            ],
            [
              493,
              555
            ],
            [
              496,
              551
            ],
            [
              460,
              488
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S08_SL3",
        "name": "WP2_MB4_S08_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              554,
              496
            ],
            [
              582,
              512
            ],
            [
              584,
              507
            ],
            [
              557,
              492
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S09_SL1",
        "name": "WP2_MB1_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              549,
              501
            ],
            [
              581,
              519
            ],
            [
              582,
              514
            ],
            [
              552,
              497
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S09_SL2",
        "name": "WP2_MB1_S09_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              544,
              506
            ],
            [
              579,
              526
            ],
            [
              580,
              521
            ],
            [
              547,
              502
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S09_SL3",
        "name": "WP2_MB1_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              535,
              514
            ],
            [
              575,
              537
            ],
            [
              577,
              532
            ],
            [
              539,
              511
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S09_SL1",
        "name": "WP2_MB2_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              531,
              519
            ],
            [
              574,
              544
            ],
            [
              575,
              539
            ],
            [
              534,
              516
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S09_SL2",
        "name": "WP2_MB2_S09_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              526,
              524
            ],
            [
              572,
              551
            ],
            [
              573,
              546
            ],
            [
              529,
              521
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S09_SL3",
        "name": "WP2_MB2_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              517,
              533
            ],
            [
              569,
              562
            ],
            [
              570,
              558
            ],
            [
              521,
              529
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S09_SL1",
        "name": "WP2_MB3_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              512,
              538
            ],
            [
              567,
              569
            ],
            [
              568,
              564
            ],
            [
              516,
              534
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S09_SL2",
        "name": "WP2_MB3_S09_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              507,
              543
            ],
            [
              565,
              576
            ],
            [
              566,
              571
            ],
            [
              511,
              539
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S09_SL3",
        "name": "WP2_MB3_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              499,
              551
            ],
            [
              562,
              587
            ],
            [
              563,
              583
            ],
            [
              502,
              548
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S09_SL1",
        "name": "WP2_MB4_S09_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              494,
              556
            ],
            [
              560,
              594
            ],
            [
              561,
              589
            ],
            [
              498,
              553
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S09_SL3",
        "name": "WP2_MB4_S09_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              583,
              512
            ],
            [
              616,
              512
            ],
            [
              615,
              508
            ],
            [
              584,
              508
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S10_SL1",
        "name": "WP2_MB1_S10_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              581,
              519
            ],
            [
              618,
              519
            ],
            [
              617,
              514
            ],
            [
              582,
              514
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S10_SL2",
        "name": "WP2_MB1_S10_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              579,
              526
            ],
            [
              620,
              526
            ],
            [
              618,
              521
            ],
            [
              581,
              521
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S10_SL3",
        "name": "WP2_MB1_S10_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              576,
              538
            ],
            [
              623,
              538
            ],
            [
              621,
              533
            ],
            [
              578,
              533
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S10_SL1",
        "name": "WP2_MB2_S10_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              575,
              544
            ],
            [
              624,
              544
            ],
            [
              623,
              539
            ],
            [
              576,
              539
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S10_SL2",
        "name": "WP2_MB2_S10_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              573,
              551
            ],
            [
              626,
              551
            ],
            [
              625,
              546
            ],
            [
              574,
              546
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S10_SL3",
        "name": "WP2_MB2_S10_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              570,
              563
            ],
            [
              629,
              563
            ],
            [
              628,
              558
            ],
            [
              571,
              558
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S10_SL1",
        "name": "WP2_MB3_S10_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              568,
              569
            ],
            [
              631,
              569
            ],
            [
              630,
              565
            ],
            [
              569,
              565
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S10_SL2",
        "name": "WP2_MB3_S10_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              566,
              576
            ],
            [
              633,
              576
            ],
            [
              631,
              571
            ],
            [
              568,
              571
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S10_SL3",
        "name": "WP2_MB3_S10_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              563,
              588
            ],
            [
              636,
              588
            ],
            [
              635,
              583
            ],
            [
              564,
              583
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S10L_SL1",
        "name": "WP2_MB4_S10L_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              561,
              595
            ],
            [
              638,
              595
            ],
            [
              636,
              590
            ],
            [
              563,
              590
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S10L_SL3",
        "name": "WP2_MB4_S10L_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              617,
              512
            ],
            [
              645,
              496
            ],
            [
              642,
              492
            ],
            [
              615,
              507
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S11_SL1",
        "name": "WP2_MB1_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              618,
              519
            ],
            [
              650,
              501
            ],
            [
              647,
              497
            ],
            [
              617,
              514
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S11_SL2",
        "name": "WP2_MB1_S11_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              620,
              526
            ],
            [
              655,
              506
            ],
            [
              652,
              502
            ],
            [
              619,
              521
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S11_SL3",
        "name": "WP2_MB1_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              624,
              537
            ],
            [
              664,
              514
            ],
            [
              660,
              511
            ],
            [
              622,
              532
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S11_SL1",
        "name": "WP2_MB2_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              625,
              544
            ],
            [
              668,
              519
            ],
            [
              665,
              516
            ],
            [
              624,
              539
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S11_SL2",
        "name": "WP2_MB2_S11_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              627,
              551
            ],
            [
              673,
              524
            ],
            [
              670,
              521
            ],
            [
              626,
              546
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S11_SL3",
        "name": "WP2_MB2_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              630,
              562
            ],
            [
              682,
              533
            ],
            [
              678,
              529
            ],
            [
              629,
              558
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S11_SL1",
        "name": "WP2_MB3_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              632,
              569
            ],
            [
              687,
              538
            ],
            [
              683,
              534
            ],
            [
              631,
              564
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S11_SL2",
        "name": "WP2_MB3_S11_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              634,
              576
            ],
            [
              692,
              543
            ],
            [
              688,
              539
            ],
            [
              633,
              571
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S11_SL3",
        "name": "WP2_MB3_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              637,
              587
            ],
            [
              700,
              551
            ],
            [
              697,
              548
            ],
            [
              636,
              583
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S11_SL1",
        "name": "WP2_MB4_S11_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              639,
              594
            ],
            [
              705,
              556
            ],
            [
              701,
              553
            ],
            [
              638,
              589
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S11_SL3",
        "name": "WP2_MB4_S11_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              646,
              495
            ],
            [
              662,
              467
            ],
            [
              657,
              465
            ],
            [
              642,
              492
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S12_SL1",
        "name": "WP2_MB1_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              651,
              500
            ],
            [
              669,
              468
            ],
            [
              664,
              467
            ],
            [
              647,
              497
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S12_SL2",
        "name": "WP2_MB1_S12_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              656,
              505
            ],
            [
              676,
              470
            ],
            [
              671,
              469
            ],
            [
              652,
              502
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB1_S12_SL3",
        "name": "WP2_MB1_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              664,
              514
            ],
            [
              687,
              474
            ],
            [
              682,
              472
            ],
            [
              661,
              510
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S12_SL1",
        "name": "WP2_MB2_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              669,
              518
            ],
            [
              694,
              475
            ],
            [
              689,
              474
            ],
            [
              666,
              515
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S12_SL2",
        "name": "WP2_MB2_S12_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              674,
              523
            ],
            [
              701,
              477
            ],
            [
              696,
              476
            ],
            [
              671,
              520
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB2_S12_SL3",
        "name": "WP2_MB2_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              683,
              532
            ],
            [
              712,
              480
            ],
            [
              708,
              479
            ],
            [
              679,
              528
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S12_SL1",
        "name": "WP2_MB3_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              688,
              537
            ],
            [
              719,
              482
            ],
            [
              714,
              481
            ],
            [
              684,
              533
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S12_SL2",
        "name": "WP2_MB3_S12_SL2"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              693,
              542
            ],
            [
              726,
              484
            ],
            [
              721,
              483
            ],
            [
              689,
              538
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB3_S12_SL3",
        "name": "WP2_MB3_S12_SL3"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              701,
              550
            ],
            [
              737,
              487
            ],
            [
              733,
              486
            ],
            [
              698,
              547
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S12_SL1",
        "name": "WP2_MB4_S12_SL1"
      },
      "type": "Feature"
    },
    {
      "geometry": {
        "coordinates": [
          [
            [
              706,
              555
            ],
            [
              744,
              489
            ],
            [
              739,
              488
            ],
            [
              703,
              551
            ]
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "id": "WP2_MB4_S12_SL3",
        "name": "WP2_MB4_S12_SL3"
      },
      "type": "Feature"
    }
  ],
  "type": "FeatureCollection"
};
  
}

function setup() {
  const scale = 2;
  createCanvas(scale*800, scale*600);
  // createCanvas(16384 , 16384);
  noLoop(); // No need to loop since we are only drawing static data
}

function draw() {
  background(255);
  

  if (geoData) {
    // Loop through each feature in the GeoJSON data
    for (let feature of geoData.features) {
      let geometry = feature.geometry;
      let coordinates = geometry.coordinates;
      

      if (geometry.type === "Polygon") {
        drawPolygon(coordinates);
      } else if (geometry.type === "MultiPolygon") {
        for (let polygon of coordinates) {
          drawPolygon(polygon);
        }
      }
    }
  }
}

function drawPolygon(coordinates) {
  beginShape();
  for (let coord of coordinates[0]) {
	  console.log(width)
    vertex(coord[0], coord[1]);
  }
  endShape(CLOSE);
}

