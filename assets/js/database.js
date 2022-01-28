const allSongs = [
  { 
    id: 1, 
    name: "Daylight", 
    artist: ["Maroon 5"],
    img: "./data/albums/overexposed__maroon-5.jpg",
    path: "./data/songs/daylight__maroon-5.mp3",
    album: "Overexposed",
    backgroundColor: '#111735',
    tag: ['favorite', 'pop']
  },
  { 
    id: 2, 
    name: "Không thể không yêu", 
    artist: ["Huyền Tử ft Vỹ Bá"],
    img: "./data/albums/boston__boston.jpg",
    path: "./data/songs/khongthekhongyeu-huyentuftvyba.mp3",
    album: "QuynhAnh",
    backgroundColor: '#812824',
    tag: ['favorite', 'rock']
  },
  { 
    id: 3, 
    name: "Thiếu niên", 
    artist: ["Mộng Nhiên"],
    img: "./data/albums/boston__boston.jpg",
    path: "./data/songs/thieunien-mongnhien.mp3",
    album: "QuynhAnh",
    backgroundColor: '#812824',
    tag: ['favorite', 'rock']
  },
  { 
    id: 4, 
    name: "Tát Nhật Lãng Rực Rỡ", 
    artist: ["Yếu Bất Yếu Mãi Thái"],
    img: "./data/albums/knee-deep-in-the-hoopla__starship.jpg",
    path: "./data/songs/tatnhatlangrucro-yeubatyeumaithai.mp3",
    album: "QuynhAnh",
    backgroundColor: '#525147',
    tag: ['favorite', 'rock']
  },
  { 
    id: 5, 
    name: 'Người theo đuổi ánh sáng', 
    artist: ["Từ Vi"],
    img: "./data/albums/rocky-iv__survivor.jpg",
    path: "./data/songs/nguoitheoduoianhsang-tuvi.mp3",
    album: "QuynhAnh",
    backgroundColor: '#72322e',
    tag: ['favorite', 'rock']
  },
  { 
    id: 6, 
    name: "Đáp án của bạn", 
    artist: ["A Nhũng"],
    img: "./data/albums/appetite-for-destruction__gun-n-roses.jpg",
    path: "./data/songs/Dapancuaban-Anhung.mp3",
    album: "QuynhAnh",
    backgroundColor: '#63212c',
    tag: ['favorite', 'rock']
  },
  { 
    id: 7, 
    name: "Thanh Trừ", 
    artist: ["Vương Hân Thần & Tô Tinh Tiệp"],
    img: "./data/albums/leftoverture__kansas.jpg",
    path: "./data/songs/thanhtru-vuonghan-totiep.mp3",
    album: "QuynhAnh",
    backgroundColor: '#645951',
    tag: ['favorite', 'rock']
  },
  { 
    id: 8, 
    name: "Con đường bình phàm", 
    artist: ["Hoa Thần Vũ"],
    img: "./data/albums/elephant__the-white-stripes.jpg",
    path: "./data/songs/conduongbinhpham-hoathanvu.mp3",
    album: "QuynhAnh",
    backgroundColor: '#bc3204',
    tag: ['favorite', 'rock']
  },
  { 
    id: 9, 
    name: "Khách Mời", 
    artist: ["Lộ Phi Văn"],
    img: "./data/albums/love__the-cult.jpg",
    path: "./data/songs/khachmoi-lophivan.mp3",
    album: "QuynhAnh",
    backgroundColor: '#071923',
    tag: ['favorite', 'rock']
  },
  { 
    id: 10, 
    name: "9420", 
    artist: ["Hắc Kỳ Tử"],
    img: "./data/albums/the-animals__the-animals.jpg",
    path: "./data/songs/9420-hackytu.mp3",
    album: "QuynhAnh",
    backgroundColor: '#516062',
    tag: ['favorite', 'rock']
  },
  { 
    id: 11, 
    name: "Girls Like You (feat. Cardi B)", 
    artist: ["Maroon 5", "Cardi B"],
    img: "./data/albums/red-pill-blues__maroon-5.jpg",
    path: "./data/songs/girls-like-you__maroon-5__cardi-b.mp3",
    album: "QuynhAnh",
    backgroundColor: '#4c4d50',
    tag: ['favorite', 'pop']
  },
  { 
    id: 12, 
    name: "What Lovers Do (feat. SZA)", 
    artist: ["Maroon 5", "SZA"],
    img: "./data/albums/red-pill-blues__maroon-5.jpg",
    path: "./data/songs/what-lovers-do__maroon-5__sza.mp3",
    album: "QuynhAnh",
    backgroundColor: '#4c4d50',
    tag: ['favorite', 'pop']
  },
  { 
    id: 13, 
    name: "Payphone", 
    artist: ["Maroon 5"],
    img: "./data/albums/overexposed__maroon-5.jpg",
    path: "./data/songs/payphone__maroon-5__wiz-khalifa.mp3",
    album: "Overexposed",
    backgroundColor: '#743b53',
    tag: ['favorite', 'pop']
  },
  { 
    id: 14, 
    name: "Moves Like Jagger - Studio Recording From The Voice Performance", 
    artist: ["Maroon 5"],
    img: "./data/albums/overexposed__maroon-5.jpg",
    path: "./data/songs/moves-like-jagger__maroon-5__christina-aguilera.mp3",
    album: "Overexposed",
    backgroundColor: '#743b53',
    tag: ['favorite', 'pop']
  },
  { 
    id: 15, 
    name: "Maps", 
    artist: ["Maroon 5"],
    img: "./data/albums/v__maroon-5.jpg",
    path: "./data/songs/maps__maroon-5.mp3",
    album: "V",
    backgroundColor: '#743b53',
    tag: ['favorite', 'pop']
  },
  { 
    id: 16, 
    name: "Animals", 
    artist: ["Maroon 5"],
    img: "./data/albums/v__maroon-5.jpg",
    path: "./data/songs/animals__maroon-5.mp3",
    album: "V",
    backgroundColor: '#743b53',
    tag: ['favorite', 'pop']
  },
  { 
    id: 17, 
    name: "Sugar", 
    artist: ["Maroon 5"],
    img: "./data/albums/v__maroon-5.jpg",
    path: "./data/songs/sugar__maroon-5.mp3",
    album: "V",
    backgroundColor: '#743b53',
    tag: ['favorite', 'pop']
  },
  { 
    id: 18, 
    name: "Beautiful Mistakes (feat. Megan Thee Stallion)", 
    artist: ["Maroon 5", "Megan Thee Stallion"],
    img: "./data/albums/jordi__maroon-5.jpg",
    path: "./data/songs/beautiful-mistakes__maroon-5__megan-thee-stallion.mp3",
    album: "JORDI",
    backgroundColor: '#743b53',
    tag: ['favorite', 'pop' ]
  },
  { 
    id: 19, 
    name: "Memories", 
    artist: ["Maroon 5"],
    img: "./data/albums/jordi__maroon-5.jpg",
    path: "./data/songs/memories__maroon-5.mp3",
    album: "JORDI",
    backgroundColor: '#743b53',
    tag: ['favorite', 'pop']
  },
  {
    id: 20, 
    name: "Mang Chủng", 
    artist: ["Âm Khuyết Thi Thính"],
    img: "./data/albums/made-for-you__john-de-sohn.jpg",
    path: "./data/songs/mangchung-thithinh.mp3",
    album: "QuynhAnh",
    backgroundColor: '#303030',
    tag: ['favorite', 'rock']
  },
  {
    id: 21, 
    name: "Lữ Khách Qua Thời Gian", 
    artist: ["Danh Quyết"],
    img: "./data/albums/made-for-you__john-de-sohn.jpg",
    path: "./data/songs/lukhachquathoigian-danhquyet.mp3",
    album: "QuynhAnh",
    backgroundColor: '#303030',
    tag: ['favorite', 'rock']
  },
  {
    id: 22, 
    name: "Sau này", 
    artist: ["Luân Tang"],
    img: "./data/singles/got-damn-woman__john-de-sohn.jpg",
    path: "./data/songs/saunay-luantang.mp3",
    album: "QuynhAnh",
    backgroundColor: '#0c4e99',
    tag: ['favorite', 'rock']
  },
  {
    id: 23, 
    name: "Một triệu khả năng", 
    artist: ["Trương Hàm Vận"],
    img: "./data/singles/wasted-love__john-de-sohn.jpg",
    path: "./data/songs/mottrieukhanang-truonghamvan.mp3",
    album: "QuynhAnh",
    backgroundColor: '#303031',
    tag: ['favorite', 'rock']
  },
  {
    id: 24, 
    name: "Thời Không Sai Lệch", 
    artist: ["Ngải Thần"],
    img: "./data/albums/the-works__queen.jpg",
    path: "./data/songs/thoikhongsailech-ngaithan.mp3",
    album: "QuynhAnh",
    backgroundColor: '#66645e',
    tag: ['favorite', 'rock','All Time Low']
  },

]
shuffleArray(allSongs)

const allPlaylists = [
  {
    id: 1, 
    name: "Liked Songs", 
    description: '',
    owner: "Pan",
    img: "./data/playlists/own-playlists/liked-songs.jpg",
    songs: allSongs.filter(song => song.tag.includes('favorite')),
    backgroundColor: '74, 53, 144',
    headerColor: '32, 22, 64',
    tag: ['own playlist', 'liked songs']
  },
  {
    id: 2, 
    name: "All Time Low", 
    description: '',
    owner: "Pan",
    img: "./data/playlists/own-playlists/ai.jpg",
    songs: allSongs.filter(song => song.tag.includes('All Time Low')),
    backgroundColor: '142, 128, 86',
    headerColor: '64, 58, 38',
    tag: ['own playlist', ]
  },
  {
    id: 3, 
    name: "Nhac Trung", 
    description: 'Most of these songs ',
    owner: "Pan",
    img: "./data/playlists/own-playlists/al.jpg",
    songs: allSongs.filter(song => song.tag.includes('rock')),
    backgroundColor: '42, 102, 80',
    headerColor: '16, 42, 32',
    tag: ['own playlist', ]
  },
  {
    id: 4, 
    name: "Maroon 5", 
    description: '',
    owner: "Pan",
    img: "./data/playlists/own-playlists/e1.jpg",
    songs: allSongs.filter(song => song.artist.includes('Maroon 5')),
    backgroundColor: '122, 130, 137',
    headerColor: '51, 54, 58',
    tag: ['own playlist', ]
  },
    // {
  //   id: 4, 
  //   name: "Jonas Brothers", 
  //   description: '',
  //   owner: "Pan",
  //   img: "./data/playlists/own-playlists/jonas-brothers.jpg",
  //   songs: allSongs.filter(song => song.artist.includes('Jonas Brothers') || song.artist.includes('DNCE')),
  //   backgroundColor: '180, 200, 200',
  //   headerColor: '80, 90, 90',
  //   tag: ['own playlist', ]
  // },
  // {
  //   id: 9, 
  //   name: "Tobu", 
  //   description: '',
  //   owner: "Pan",
  //   img: "./data/playlists/own-playlists/maroon-5.jpg",
  //   songs: allSongs.filter(song => song.artist.includes('Maroon 5')),
  //   backgroundColor: '122, 130, 137',
  //   headerColor: '51, 54, 58',
  //   tag: ['own playlist', ]
  // },
  // {
  //   id: 10, 
  //   name: "Justin Bieber", 
  //   description: '',
  //   owner: "Pan",
  //   img: "./data/playlists/own-playlists/maroon-5.jpg",
  //   songs: allSongs.filter(song => song.artist.includes('Justin Bieber')),
  //   backgroundColor: '122, 130, 137',
  //   headerColor: '51, 54, 58',
  //   tag: ['own playlist', ]
  // },
]

shuffleArray(allPlaylists)



const dailyMixesFactory = {
  data: {
    artistsGroups: [
      ["Martin Garrix", "Jonas Blue", "Kygo"],
      ["Vicetone", "Martin Jensen", "John De Sohn"],
      ["Jonas Brothers", "Maroon 5", "Justin Bieber", "DNCE", "Panic! At The Disco"],
      ["Boston", "Starship",  "The Cult", "Kansas", "The White Stripes", "The Animals", "Gun N' Roses", "Queen"],
      ["All Time Low"],
    ],
    dailyMixesFeaturing: [
      ["Daily Mixes 1", "All Time Low", "Jonas Brothers", "Justin Bieber", "Kygo", "Martin Garrix", "Maroon 5", "Vicetone"],
      ["Daily Mixes 2", "All Time Low", "Jonas Brothers", "Justin Bieber", "Kygo", "Martin Garrix", "Maroon 5"],
      ["Daily Mixes 3", "All Time Low", "Jonas Blue", "Jonas Brothers", "Justin Bieber", "Kygo", "Maroon 5", "Boston", "Panic! At The Disco"],
      ["Daily Mixes 4", "All Time Low", "Jonas Blue", "Maroon 5", "Boston", "Kygo", "Panic! At The Disco", "Queen"],
      ["Daily Mixes 5", "Boston", "Martin Garrix", "Maroon 5", "Panic! At The Disco", "Queen"],
    ],
  },
  
  dailyMixesGenerator: {
    sortDailyMixes: function() {
      dailyMixesFactory.data.dailyMixesFeaturing.sort((a, b) => a.length - b.length)
    },
    chooseFeaturingArtist: {
      FeaturingArtists: [],
      handleFeaturing: function() {
        const _this = this
        dailyMixesFactory.data.dailyMixesFeaturing.forEach(dailyMix => {
          function randomPick() {
              const newDailyMixes = dailyMix[Math.floor(Math.random() * (dailyMix.length - 1)) + 1]
              const flattedArray = _this.FeaturingArtists.flat()
              flattedArray.includes(newDailyMixes) ? randomPick() : _this.FeaturingArtists.push([dailyMix[0],newDailyMixes])
          }
          randomPick()
        })
        this.FeaturingArtists.sort((a, b) => a[0] < b[0] ? -1 : 1)
      }
    },
    generateSongs: function(artistGroup) {
      const songs = []
      artistGroup.forEach(artist => {
        songs.push(allSongs.filter(song => song.artist.includes(artist)))
      })
      return songs.flat().sort((a, b) => a.order - b.order)
    },
    generateDescription: function(artistGroup) {
      filteredArtists = artistGroup.slice(0, 3)
      return filteredArtists.reduce((description, artist, index) => {
        if (index == 0) {return `${artist}`}  
        return `${description}, ${artist}`
      }) + ' and more'
    },
    createDailyMixes: function() {
      dailyMixesFactory.dailyMixesGenerator.chooseFeaturingArtist.FeaturingArtists.forEach((dailyMix) => {
        const artistGroup = dailyMixesFactory.data.artistsGroups.filter(array => array.includes(dailyMix[1]))[0]
        function sortedArtists() {
          for (let i = artistGroup.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
              [artistGroup[i], artistGroup[j]] = [artistGroup[j], artistGroup[i]];
          }
  
          [artistGroup[artistGroup.indexOf(dailyMix[1])], artistGroup[0]] = [artistGroup[0], artistGroup[artistGroup.indexOf(dailyMix[1])]];
          
        }
        sortedArtists()
        const nextId = [...allPlaylists].sort((a, b) => a.id - b.id)[allPlaylists.length - 1].id + 1
        const playlist = {
            name: dailyMix[0],
            id: nextId,
            description: this.generateDescription(artistGroup),
            owner: 'Made for Pan',
            img: `./data/playlists/daily-mixes/${dailyMix[0]}/${dailyMix[1]}.jfif`,
            songs: this.generateSongs(artistGroup),
            backgroundColor: '122, 130, 137',
            headerColor: '51, 54, 58',
            tag: ['daily mix']
          }
          allPlaylists.push(playlist)
      })
    },
    start: function() {
      this.sortDailyMixes()
      this.chooseFeaturingArtist.handleFeaturing()
      this.createDailyMixes()
    }
  }
}
const bestOfArtistFactory = {

  playlistPageData: [
    {
      name: "All Time Low",
      description: "The best of All Time Low, all in one playlist.",
      backgroundColor: '204, 78, 78',
      headerColor: '86, 32, 32',
    },
    {
      name: "Jonas Blue",
      description: "This is Jonas Blue. The essential tracks, all in one playlist.",
      backgroundColor: '110, 141, 194',
      headerColor: '45, 57, 80',
    },
    {
      name: "Jonas Brothers",
      description: "All the essentials in one playlist.",
      backgroundColor: '147, 139, 169',
      headerColor: '61, 57, 70',
    },
    {
      name: "Kygo",
      description: "The essential Norwegian DJ's tracks and remixes.",
      backgroundColor: '125, 201, 193',
      headerColor: '51, 83, 80',
    },
    {
      name: "Maroon 5",
      description: "From Songs About Jane to JORDI, find their latest releases here!",
      backgroundColor: '55, 55, 62',
      headerColor: '22, 22, 26',
    },
    {
      name: "Martin Garrix",
      description: "The essential tracks by the Dutch DJ and producer.",
      backgroundColor: '132, 199, 192',
      headerColor: '54, 83, 80',
    },
  ],
  
  createDailyMixes: function() {
    for (let i = bestOfArtistFactory.playlistPageData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [bestOfArtistFactory.playlistPageData[i], bestOfArtistFactory.playlistPageData[j]] = [bestOfArtistFactory.playlistPageData[j], bestOfArtistFactory.playlistPageData[i]];
    }
    bestOfArtistFactory.playlistPageData.forEach(data => {
      const nextId = [...allPlaylists].sort((a, b) => a.id - b.id)[allPlaylists.length - 1].id + 1
      const playlist = {
        name: 'This Is ' + data.name,
        id: nextId,
        description: data.description,
        owner: 'Spotify',
        img: `./data/playlists/best-of-artist/${data.name}.jfif`,
        songs: allSongs.filter(song => song.artist.includes(data.name)),
        backgroundColor: data.backgroundColor,
        headerColor: data.headerColor,
        tag: ['best of artist']
      }
      allPlaylists.push(playlist)
    })
  },
}
dailyMixesFactory.dailyMixesGenerator.start()
bestOfArtistFactory.createDailyMixes()

function shuffleArray(Array) {
  Array.forEach(value => value.order = Math.floor(Math.random() * (Array.length - 1)) + 1)
  Array.sort((a, b) => a.order - b.order)
  Array.forEach((value, index) => value.order = index + 1)
}



const allSections = [
  {
    name: 'Hello',
    sectionType: "current-playlists",
    playlists: [...allPlaylists].filter(playlist => playlist.tag.includes('own playlist')),
    shuffle: true
  },
  // {
  //   name: 'Made for you',
  //   sectionType: "daily-mix",
  //   playlists: [...allPlaylists].filter(playlist => playlist.tag.includes('daily mix')),
  //   shuffle: false
  // },
  {
    name: 'Best of artist',
    sectionType: "best-of-artist",
    playlists: [...allPlaylists].filter(playlist => playlist.tag.includes('best of artist')),
    shuffle: true
  },
  // {
  //   name: 'Recently played',
  //   sectionType: "recently-played",
  //   playlists: [...allPlaylists],
  //   shuffle: true
  // },
  // {
  //   name: 'Your playlists',
  //   sectionType: "your-playlists",
  //   playlists: [...allPlaylists].filter(playlist => playlist.tag.includes('own playlist')),
  //   shuffle: true
  // },
]

const allUsers = [
  {
    id: 1,
    name: "Dev Pan",
    avatarPath: './assets/images/user/QA.jpg',
    latestSongID: '2',
    lastActive: 'online',
  }
]

const setGreeting = function() {
  const regex = /[0-9][0-9]:/
  let time =  Date().match(regex)
  time = time[0]
  time = time.slice(0, -1)
  time = Number(time)

  const currentPlaylists = allSections.filter(section => section.sectionType == 'current-playlists')[0]
  if (0 < time && time < 12) {
    currentPlaylists.name = 'Good morning'
  } else if (12 <= time && time < 18) {
    currentPlaylists.name = 'Good afternoon'
  } else {
    currentPlaylists.name = 'Good evening'
  }
}
setGreeting()