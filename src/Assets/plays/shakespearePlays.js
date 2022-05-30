export function getPlaysData(selectedPlays) {
  return selectedPlays.map(playItem => {
    const { id } = playItem
    return require(`../../Assets/plays/${id}.json`)
  })
}

export const shakespearePlays = [
  {
    "id": 1000,
    "title": "A Lover’s Complaint",
    "format": "Narrative",
    "iconFile": "1000.jpg"
  },
  {
    "id": 1001,
    "title": "A Midsummer Night’s Dream",
    "format": "Play",
    "iconFile": "1001.jpg"
  },
  {
    "id": 1002,
    "title": "All’s Well That Ends Well",
    "format": "Play",
    "iconFile": "1002.jpg"
  },
  {
    "id": 1003,
    "title": "As You Like It",
    "format": "Play",
    "iconFile": "1003.jpg"
  },
  {
    "id": 1004,
    "title": "Cymbeline",
    "format": "Play",
    "iconFile": "1004.jpg"
  },
  {
    "id": 1005,
    "title": "The Life of King Henry The Eighth",
    "format": "Play",
    "iconFile": "1005.jpg"
  },
  {
    "id": 1006,
    "title": "The Life and Death of King John",
    "format": "Play",
    "iconFile": "1006.jpg"
  },
  {
    "id": 1007,
    "title": "The Life and Death of King Richard The Second",
    "format": "Play",
    "iconFile": "1007.jpg"
  },
  {
    "id": 1008,
    "title": "The Life and Death of King Richard The Third",
    "format": "Play",
    "iconFile": "1008.jpg"
  },
  {
    "id": 1009,
    "title": "Love’s Labour’s Lost",
    "format": "Play",
    "iconFile": "1009.jpg"
  },
  {
    "id": 1010,
    "title": "Measure For Measure",
    "format": "Play",
    "iconFile": "1010.jpg"
  },
  {
    "id": 1011,
    "title": "Much Ado About Nothing",
    "format": "Play",
    "iconFile": "1011.jpg"
  },
  {
    "id": 1012,
    "title": "Pericles, Prince Of Tyre",
    "format": "Play",
    "iconFile": "1012.jpg"
  },
  {
    "id": 1013,
    "title": "The Comedy Of Errors",
    "format": "Play",
    "iconFile": "1013.jpg"
  },
  {
    "id": 1014,
    "title": "The First Part Of Henry The Sixth",
    "format": "Play",
    "iconFile": "1014.jpg"
  },
  {
    "id": 1015,
    "title": "The First Part Of King Henry The Fourth",
    "format": "Play",
    "iconFile": "1015.jpg"
  },
  {
    "id": 1016,
    "title": "The History Of Troilus And Cressida",
    "format": "Play",
    "iconFile": "1016.jpg"
  },
  {
    "id": 1017,
    "title": "The Life Of King Henry The Fifth",
    "format": "Play",
    "iconFile": "1017.jpg"
  },
  {
    "id": 1018,
    "title": "The Life Of Timon Of Athens",
    "format": "Play",
    "iconFile": "1018.jpg"
  },
  {
    "id": 1019,
    "title": "The Merchant Of Venice",
    "format": "Play",
    "iconFile": "1019.jpg"
  },
  {
    "id": 1020,
    "title": "The Merry Wives Of Windsor",
    "format": "Play",
    "iconFile": "1020.jpg"
  },
  {
    "id": 1021,
    "title": "The Passionate Pilgrim",
    "format": "Poem",
    "iconFile": "1021.jpg"
  },
  {
    "id": 1022,
    "title": "The Phoenix And The Turtle",
    "iconFile": "1022.jpg"
  },
  {
    "id": 1023,
    "title": "The Rape Of Lucrece",
    "format": "Narrative",
    "iconFile": "1023.jpg"
  },
  {
    "id": 1024,
    "title": "The Second Part Of King Henry The Fourth",
    "format": "Play",
    "iconFile": "1024.jpg"
  },
  {
    "id": 1025,
    "title": "The Second Part Of King Henry The Sixth",
    "format": "Play",
    "iconFile": "1025.jpg"
  },
  {
    "id": 1026,
    "title": "The Sonnets",
    "format": "Sonnet",
    "iconFile": "1026.png"
  },
  {
    "id": 1027,
    "title": "The Taming Of The Shrew",
    "format": "Play",
    "iconFile": "1027.jpg"
  },
  {
    "id": 1028,
    "title": "The Tempest",
    "format": "Play",
    "iconFile": "1028.jpg"
  },
  {
    "id": 1029,
    "title": "The Third Part Of King Henry The Sixth",
    "format": "Play",
    "iconFile": "1029.jpg"
  },
  {
    "id": 1030,
    "title": "The Tragedy Of Antony And Cleopatra",
    "format": "Play",
    "iconFile": "1030.jpg"
  },
  {
    "id": 1031,
    "title": "The Tragedy Of Coriolanus",
    "format": "Play",
    "iconFile": "1031.jpg"
  },
  {
    "id": 1032,
    "title": "The Tragedy Of Hamlet, Prince Of Denmark",
    "format": "Play",
    "iconFile": "1032.jpg"
  },
  {
    "id": 1033,
    "title": "The Tragedy Of Julius Caesar",
    "format": "Play",
    "iconFile": "1033.jpg"
  },
  {
    "id": 1034,
    "title": "The Tragedy Of King Lear",
    "format": "Play",
    "iconFile": "1034.jpg"
  },
  {
    "id": 1035,
    "title": "The Tragedy Of Macbeth",
    "format": "Play",
    "iconFile": "1035.jpg"
  },
  {
    "id": 1036,
    "title": "The Tragedy Of Othello, Moor Of Venice",
    "format": "Play",
    "iconFile": "1036.jpg"
  },
  {
    "id": 1037,
    "title": "The Tragedy Of Romeo And Juliet",
    "format": "Play",
    "iconFile": "1037.jpg"
  },
  {
    "id": 1038,
    "title": "The Tragedy Of Titus Andronicus",
    "format": "Play",
    "iconFile": "1038.jpg"
  },
  {
    "id": 1039,
    "title": "The Two Gentlemen Of Verona",
    "format": "Play",
    "iconFile": "1039.jpg"
  },
  {
    "id": 1041,
    "title": "The Winter’s Tale",
    "format": "Play",
    "iconFile": "1041.jpg"
  },
  {
    "id": 1042,
    "title": "Twelfth Night; Or, What You Will",
    "format": "Play",
    "iconFile": "1042.jpg"
  },
  {
    "id": 1043,
    "title": "Venus And Adonis",
    "format": "Narrative",
    "iconFile": "1043.jpg"
  }
]
