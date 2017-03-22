{
  name: "Jagd",
  modifikatorTierkunde:
  [
    {
      name: "Gebiet",
      modifiers: [
        {
          name: "perfekts Jagdgebiet",
          bonus: 3
        },
        {
          name: "sehr gut geeignetes Jagdgebiet",
          bonus: 2
        },
        {
          name: "gut geeignetes Jagdgebiet",
          bonus: 1
        },
        {
          name:"durchschnittlich geeignetes Jagdgebiet"
          bonus: 0
        },
        {
          name: "schlecht geeignetes Jagdgebiet",
          bonus: -1
        },
        {
          name: "sehr schlecht geeignetes Jagdgebiet",
          bonus: -1
        },
        {
          name: "miserables Jagdgebiet",
          bonus: -3
        }
      ],
    },
    {
      name: "Wetter",
      modifiers: [
        { name: "Regen", bonus: -1},
        { name: "Schnee", bonus: -1},
        { name: "Sturm", bonus: -2},
        { name: "Orkan", bonus: -3},
      ]
    }
  ],
  qsTierkunde:
  [
    "Zeitraum wird um 2 Stunden verkürzt",
    "Erleichterung auf Jagdtalent +1",
    "Zeitraum wird um 4 Stunden verkürzt",
    "Erleichterung auf Jagdtalent +2",
    "Zeitraum wird um 6 Stunden verkürzt",
    "Erleichterung auf Jagdtalent +3"
  ],
  schuss: [
    {
      name: "Waffe",
      options: [
        {
          art: "Für jeden TP der Fernkampfwaffe weniger als 1W6+4",
          fk: -1,
          tp: 0
        },
        {
          art: "Maximale Reichweite der Fernkampfwaffe weniger als 80 Schritt",
          fk: -1,
          tp: 0
        }
      ]
    },
    {
      name: "Bewegung",
      options: [
        {
          art: "Bewegung, Ziel steht still",
          fk: 2,
          tp: 0
        }
      ]
    },
    {
      name: "Distanz",
      options: [
        {
          art: "Distanz, mittel",
          fk:  0,
          tp: 0
        },
        {
          art: "Distanz, nah",
          fk:  2,
          tp: 1
        },
        {
          art: "Distanz, weit",
          fk:  -2,
          tp: -1
        }
      ]
    },
    {
      name: "Größe",
      options: [
        {
          art: "Winzig",
          fk: -8,
          tp: 0,
          anmerkung: "Ratte, Kröte, Spatz"
        },
        {
          art: "Klein",
          fk: -4,
          tp: 0,
          anmerkung: "Rehkitz, Schaf, Ziege"
        },
        {
          art: "Mittel",
          fk: 0,
          tp: 0,
          anmerkung: "Mensch, Zwerg, Esel"
        },
        {
          art: "Groß",
          fk: 4,
          tp: 0,
          anmerkung: "Oger, Troll, Rind"
        },
        {
          art: "Riesig",
          fk: 8,
          tp: 0,
          anmerkung: "Drache, Riese, Elefant"
        }
      ]
    },
    {
      name: "Sicht",
      options: [
        {
          art: "Sicht klar und ungestört",
          fk: 0,
          tp: 0,
          anmerkung: ""
        },
        {
          art: "Stufe 1",
          fk: -2 ,
          tp: 0,
          anmerkung: "Leichte Störung der Sicht: leichtes Blattwerk, Morgendunst"
        },
        {
          art: "Stufe 2",
          fk: -4 ,
          tp: 0,
          anmerkung: "Ziel als Silhouette erkennbar: Nebel, Mondlicht"
        },
        {
          art: "Stufe 3",
          fk: -6 ,
          tp: 0,
          anmerkung: "Ziel schemenhaft erkennbar: starker Nebel, Sternenlicht"
        },
        {
          art: "Stufe 4",
          fk: "Glückstreffer bei einer gewürfelten 1 auf 1W20",
          tp: 0,
          anmerkung: "Ziel unsichtbar dichter Rauch, völlige Dunkelheit"
        }
      ]
    },
  ]
  art: [
    {
      name: "Angeln",
      jagdtalent: {
        talent: "Verbergen",
        anwendungsgebiet: "(Sich Verstecken)",
        eigenschaften: ["MU","IN","GE"]
      },
      tierkunde: {
        talent: "Fischen & Angeln",
        anwendungsgebiet: "Salzwassertiere oder Süßwassertiere",
        eigenschaften: ["FF","GE","KO"]
      },
      grundzeitraum: {
        start: 10,
        unit: "Stunden",
        modifier: 1
      },
      schuss: false
    },
    {
      name: "Ansitz",
      jagdtalent: {
        talent: "Verbergen",
        anwendungsgebiet: "Sich Verstecken",
        eigenschaften: ["MU","IN","GE"]
      },
      tierkunde: {
        talent: "Tierkunde",
        anwendungsgebiet: "Wildtiere",
        eigenschaften: ["MU","MU","CH"]
      },
      grundzeitraum: {
        start: 10,
        unit: "Stunden",
        modifier: 1.25
      },
      schuss: true
    },
    {
      name: "Fallenjagd",
      jagdtalent: {
        talent: "Fährtensuchen",
        anwendungsgebiet: "Tierische Spuren",
        eigenschaften: ["MU","IN","GE"]
      },
      tierkunde: {
        talent: "Tierkunde",
        anwendungsgebiet: "Wildtiere",
        eigenschaften: ["MU","MU","CH"]
      },
      grundzeitraum: {
        start: 24,
        unit: "Stunden",
        modifier: 1
      },
      schuss: false
    },
    {
      name: "Pirsch",
      jagdtalent: {
        talent: "Fährtensuchen",
        anwendungsgebiet: "Tierische Spuren",
        eigenschaften: ["MU","IN","GE"]
      },
      tierkunde: {
        talent: "Tierkunde",
        anwendungsgebiet: "Wildtiere",
        eigenschaften: ["MU","MU","CH"]
      },
      grundzeitraum: {
        start: 10,
        unit: "Stunden",
        modifier: 1
      },
      schuss: true
    }
  ]
}

