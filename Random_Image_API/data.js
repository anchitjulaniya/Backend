const randomImages = [
  {id: 0, url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHwxfHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 1, url: "https://images.unsplash.com/photo-1517957754646-2870518d7db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHwyfHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 2, url: "https://images.unsplash.com/photo-1486049252252-377da3e723ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHwzfHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 3, url: "https://images.unsplash.com/photo-1509099836639-18ba11f12b98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHw0fHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 4, url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHw1fHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 5, url: "https://images.unsplash.com/photo-1533612608997-212b06408d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHw2fHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 6, url: "https://images.unsplash.com/photo-1504146612211-5a5b62f18c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHw3fHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 7, url: "https://images.unsplash.com/photo-1505159944104-f9faddc3c116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHw4fHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 8, url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHw5fHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 9, url: "https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHwxMHx8fHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 10, url: "https://images.unsplash.com/photo-1506583105045-48deda89b59a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHwxMXx8fHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 11, url: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHwxMnx8fHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 12, url: "https://images.unsplash.com/photo-1496930173339-132fa98b7d2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHwxM3x8fHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 13, url: "https://images.unsplash.com/photo-1510939234892-e3fa4c4a0094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHwxNHx8fHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 14, url: "https://images.unsplash.com/photo-1502209524168-aca664cbc3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHwxNXx8fHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 15, url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHwxNnx8fHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 16, url: "https://images.unsplash.com/photo-1517142089942-ba376ce32a4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHwxN3x8fHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 17, url: "https://images.unsplash.com/photo-1492691520604-1f44604f0c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHwxOHx8fHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
  {id: 18, url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzkwNzZ8MHwxfGFsbHwxOXx8fHx8fHx8fHwxNjg4MzEyNzY0&ixlib=rb-1.2.1&q=80&w=400"},
]


module.exports = randomImages;

