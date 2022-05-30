# Shakespeare JSON Formatting Documentation

Types of `Formats`

1. `Narrative`
2. `Play`
3. `Poem`
4. `Sonnet`

### Example

```json
{
  "title": "...",
  "id": 0,
  "format": "Narrative" | "Play" | "Poem" | "Sonnet"
  // ...
}
```

___

## Format 1 |  Narrative

### Items

| ID | Item |  
| - | - |
| 1000 | A Lover's Complaint |
| 1022 | The Phoenix And The Turtle |
| 1023 | The Rape Of Lucrece |
| 1043 | Venus And Adonis |

### Format

| Key | Type |
| - | - | 
| `title` | `String` |
| `id` | `Number` |
| `format` | `Format` |
| `content` | `Content` |

#### `Content`

```json
{
  "verseNumber": Number,
  "verse": String[]
}
```

### Example

```json
{
  "title": "A Lover's Complaint",
  "id": 1000,
  "format": "Narrative",
  "content": [
    {
      "verseNumber": 1,
      "verse": [
        "FROM off a hill whose concave womb reworded",
        "A plaintful story from a sistering vale,",
        "My spirits to attend this double voice accorded,",
        "And down I laid to list the sad-tuned tale;",
        "Ere long espied a fickle maid full pale,",
        "Tearing of papers, breaking rings a-twain,",
        "Storming her world with sorrow's wind and rain."
      ]
    },
    // ...
  ]
}
```

___

## Format 2 |  Play

### Items

| ID | Item |  
| - | - |
| 1001 | A Midsummer Night’s Dream | 
| 1002 | All’s Well That Ends Well | 
| 1003 | As You Like It | 
| 1004 | Cymbeline | 
| 1005 | The Life of King Henry The Eighth | 
| 1006 | The Life and Death of King John | 
| 1007 | The Life and Death of King Richard The Second | 
| 1008 | The Life and Death of King Richard The Third | 
| 1009 | Love’s Labour’s Lost | 
| 1010 | Measure For Measure | 
| 1011 | Much Ado About Nothing | 
| 1012 | Pericles, Prince Of Tyre | 
| 1013 | The Comedy Of Errors | 
| 1014 | The First Part Of Henry The Sixth | 
| 1015 | The First Part Of King Henry The Fourth | 
| 1016 | The History Of Troilus And Cressida | 
| 1017 | The Life Of King Henry The Fifth | 
| 1018 | The Life Of Timon Of Athens | 
| 1019 | The Merchant Of Venice | 
| 1020 | The Merry Wives Of Windsor | 
| 1024 | The Second Part Of King Henry The Fourth | 
| 1025 | The Second Part Of King Henry The Sixth | 
| 1027 | The Taming Of The Shrew | 
| 1028 | The Tempest | 
| 1029 | The Third Part Of King Henry The Sixth | 
| 1030 | The Tragedy Of Antony And Cleopatra | 
| 1031 | The Tragedy Of Coriolanus | 
| 1032 | The Tragedy Of Hamlet, Prince Of Denmark | 
| 1033 | The Tragedy Of Julius Caesar | 
| 1034 | The Tragedy Of King Lear | 
| 1035 | The Tragedy Of Macbeth | 
| 1036 | The Tragedy Of Othello, Moor Of Venice | 
| 1037 | The Tragedy Of Romeo And Juliet | 
| 1038 | The Tragedy Of Titus Andronicus | 
| 1039 | The Two Gentlemen Of Verona | 
| 1041 | The Winter’s Tale | 
| 1042 | Twelfth Night; Or, What You Will | 

### Format

| Key | Type |
| - | - | 
| `title` | `String` |
| `id` | `Number` |
| `format` | `Format` |
| `tableOfContents` | `TableOfContents` |
| `content` | `Content` |

### `tableOfContents`

```json
{
  "actNumber": 1,
  "actName": "ACT I",
  "scenes": [
    {
      "sceneName": "SCENE I. Rousillon. The COUNT's palace.",
      "sceneNumber": 1
    },
    {
      "sceneName": "SCENE II. Paris. The KING's palace.",
      "sceneNumber": 2
    },
    {
      "sceneName": "SCENE III. Rousillon. The COUNT's palace.",
      "sceneNumber": 3
    }
  ],
  // ...
}
```

### `content`

```json
content: Act[]
```

#### `Act`

```json
{
  "actName": String,
  "scenes": Scene[]
}
```

#### `Scene`

```json
{
  "sceneName": String,
  "dialogue": DialogueItem[]
}
```

#### `DialogueItem`

```json
// DialogeItem - type=Voice
{
  "type": "Voice",
  "verses": Verse[]
}

// Verse 
type Verse = String[]

// DialogeItem - type=Speaker
{
  "type": "Speaker",
  "name": String
}
```

### Example

```json
{
  "title": "A Midsummer Night’s Dream",
  "id": 1001,
  "tableContents": [
    {
      "actNumber": 1,
      "actName": "ACT I",
      "scenes": [
        {
          "sceneName": "SCENE I. Rousillon. The COUNT's palace.",
          "sceneNumber": 1
        },
        {
          "sceneName": "SCENE II. Paris. The KING's palace.",
          "sceneNumber": 2
        },
        {
          "sceneName": "SCENE III. Rousillon. The COUNT's palace.",
          "sceneNumber": 3
        }
      ]
    },
    // ...
  ],
  "content": [
    {
      "actName": "ACT I",
      "scenes": [
        {
          "sceneName": "SCENE I. Rousillon. The COUNT's palace.",
          "dialogue": [
            {
              "type": "Voice",
              "verses": [
                [
                  "Enter BERTRAM, the COUNTESS of Rousillon, HELENA, and LAFEU, all in black"
                ]
              ]
            },
            {
              "type": "Speaker",
              "name": "COUNTESS"
            },
            {
              "type": "Voice",
              "verses": [
                [
                  "In delivering my son from me, I bury a second husband."
                ]
              ]
            },
            // ...
          ]
        },
        // ...
      ]
    }
  ]
}
```

___

## Format 3 |  Poem

### Items

| ID | Item |  
| - | - |
| 1021 | The Passionate Pilgrim |

### Format

| Key | Type |
| - | - | 
| `title` | `String` |
| `id` | `Number` |
| `format` | `Format` |
| `content` | `Content` |

#### `Content`

```json
content: Verse[]
```

#### `Verse`

```json
{
  "verseNumber": Number,
  "verse": String[]
}
```

### Example

```json
{
  "title": "The Passionate Pilgrim",
  "id": 1021,
  "content": [
    {
      "title": "I. When my love swears that she is made of truth",
      "content": [
        {
          "verseNumber": 1,
          "verse": [
            "When my love swears that she is made of truth,",
            "I do believe her (though I know she lies),",
            "That she might think me some untutored youth,",
            "Unskilful in the world’s false forgeries.",
            "Thus vainly thinking that she thinks me young,",
            "Although I know my years be past the best,",
            "I, smiling, credit her false-speaking tongue,",
            "Outfacing faults in love with love’s ill rest.",
            "But wherefore says my love that she is young?",
            "And wherefore say not I that I am old?",
            "O, love’s best habit’s in a soothing tongue,",
            "And age, in love, loves not to have years told.",
            "Therefore I’ll lie with love, and love with me,",
            "Since that our faults in love thus smothered be."
          ]
        }
      ]
    },
    // ...
}
```

___


## Format 4 | Sonnet

### Items

| ID | Item |  
| - | - |
| 1026 | The Sonnets |

### Format

| Key | Type |
| - | - | 
| `title` | `String` |
| `id` | `Number` |
| `format` | `Format` |
| `content` | `Content` |

#### `Content`

```json
content: Sonnet[]
```

#### `Sonnet`

```json
{
  "sonnetNumber": Number,
  "content": String[]
}
```

### Example

```json
{
  "title": "The Sonnets",
  "id": 1026,
  "format": "Sonnet", 
  "content": [
    {
      "sonnetNumber": 1,
      "content": [
        "From fairest creatures we desire increase,",
        "That thereby beauty’s rose might never die,",
        "But as the riper should by time decease,",
        "His tender heir might bear his memory:",
        "But thou contracted to thine own bright eyes,",
        "Feed’st thy light’s flame with self-substantial fuel,",
        "Making a famine where abundance lies,",
        "Thy self thy foe, to thy sweet self too cruel:",
        "Thou that art now the world’s fresh ornament,",
        "And only herald to the gaudy spring,",
        "Within thine own bud buriest thy content,",
        "And, tender churl, mak’st waste in niggarding:",
        "Pity the world, or else this glutton be,",
        "To eat the world’s due, by the grave and thee."
      ]
    },
    // ...
  ]
}
```

___

