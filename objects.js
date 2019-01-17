var playlist = {'name' : ['song titles']}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(obj, artistName, songTitle) {
  return Object.assign()

}
