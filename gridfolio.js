                                    /*
Sample Structure:

gf_content =  [
                [ row 1
                  { block 1 },
                  { block 2 },
                  { block 3 }
                ],
                etc.
              ]

Rows can have 1 - 9 blocks.
                                    */

var gf_content = [
  [ // row
    { // block
      title: "Gridfolio: a simple layout for developers >>",
      link: "https://github.com/christinecha/gridfolio",
      imageURL: "",
      customHeight: true,
      style: {
        backgroundColor: "#f1f1f2",
        height: "40px",
        color: "#555",
        fontSize: "10px",
        letterSpacing: "0.5px"
      }
    },
  ],
  [ // row
    { // block
      title: "Jane Javascript",
      style: {
        backgroundColor: "#00aeef",
        fontSize: "25px",
        letterSpacing: "1px"
      }
    },
    { // block
      title: "Project #1",
      link: "https://github.com/christinecha/gridfolio",
      imageURL: "http://facespayneuter.org/wp-content/uploads/2014/08/foundkittens.jpg",
      keywords: ["skill", "thing", "language", "library"]
    },
    { // block
      title: "Project #2",
      link: "https://github.com/christinecha/gridfolio",
      imageURL: "https://www.washingtonpost.com/blogs/local/files/2014/10/4-kittens1.jpg",
      keywords: ["skill", "thing", "language", "library"]
    },
    { // block
      title: "Project #3",
      link: "https://github.com/christinecha/gridfolio",
      imageURL: "https://s3.amazonaws.com/rapgenius/cats-animals-kittens-background.jpg",
      keywords: ["skill", "thing", "language", "library"]
    }
  ],
  [  // row
    { // block
      title: "Project #4",
      link: "https://github.com/christinecha/gridfolio",
      imageURL: "http://www.tshirtvortex.net/wp-content/uploads/Mister-Mittens-Big-Adventure.jpg",
      keywords: ["skill", "thing", "language", "library"]
    },
    { // block
      title: "Project #5",
      link: "https://github.com/christinecha/gridfolio",
      imageURL: "http://data.whicdn.com/images/79011117/large.jpg",
      keywords: ["skill", "thing", "language", "library"]
    },
    { // block
      title: "Project #6",
      link: "https://github.com/christinecha/gridfolio",
      imageURL: "https://s-media-cache-ak0.pinimg.com/736x/be/09/56/be09569e65ee1e58e1cdb954da4c6192.jpg",
      keywords: ["skill", "thing", "language", "library"]
    }
  ]
]


var gf_styles = {
  squareMode: true,
  innerBlock: {
    fontFamily: "Montserrat",
    color: "#fff",
    padding: "10px"
  },
  blockTitle: {
    margin: "0 auto",
    textTransform: "uppercase"
  },
  keyword: {
    fontSize: "11px",
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: "2px 5px",
    margin: "2px"
  },
  keywords: {
    fontSize: "10px",
    marginTop: "-50px"
  }
}
