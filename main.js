let str = `
010-1234-5678
thecarl@kakao.com
https://www.omdbapi.com/?apikey=7035c60c&s=avatar
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)