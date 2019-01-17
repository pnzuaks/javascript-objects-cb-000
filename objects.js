var playlist = {['name'] : 'song titles'}

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, obj, {[artistName]: songTitle})
}

function removeFromPlaylist(obj, artistName, songTitle) {
  return Object.assign()

}
