
const clientID = process.env.CLIENTID
const clientSecret = process.env.CLIENT_SECRET
const refreshToken = process.env.REFRESH_TOKEN

const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientID,
      client_secret: clientSecret
    })
  })

  return response.json()
}

const getNowPlaying = async () => {
  // eslint-disable-next-line camelcase
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      // eslint-disable-next-line camelcase
      Authorization: `Bearer ${access_token}`
    }
  })
}

export default async function handler (req, res) {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false })
  }

  const song = await response.json()

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false })
  }

  const isPlaying = song.is_playing
  const title = song.item.name
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
  const album = song.item.album.name
  const albumImageUrl = song.item.album.images[0].url
  const songUrl = song.item.external_urls.spotify

  if (isPlaying) {
    return res.status(200).json(
      {
        isPlaying,
        title,
        artist,
        album,
        albumImageUrl,
        songUrl
      }
    )
  }
  res.status(200).json({ isPlaying: false })
}
