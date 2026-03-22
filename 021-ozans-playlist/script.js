
function removeDuplicates(playlist) {
  const seen = {};
  const result = [];
  for (const track of playlist) {
    if (!seen[track]) {
      seen[track] = true;
      result.push(track);
    }
  }
  
  return result;
}

function hasTrack(playlist, track) {
  const lookup = {};

  for (const item of playlist) {
    lookup[item] = true;
  }

  return !!lookup[track];
}

function addTrack(playlist, track) {
  const lookup = {};
  const result = [];

  for (const item of playlist) {
    lookup[item] = true;
    result.push(item);
  }

  if (!lookup[track]) {
    result.push(track);
  }

  return result;
}

function deleteTrack(playlist, track) {
  const result = [];

  for (const item of playlist) {
    if (item !== track) {
      result.push(item);
    }
  }

  return result;
}

function listArtists(playlist) {
  const seen = {};
  const artists = [];

  for (const track of playlist) {
    const artist = track.split(' - ')[1];

    if (!seen[artist]) {
      seen[artist] = true;
      artists.push(artist);
    }
  }

  return artists;
}

export {
  removeDuplicates,
  hasTrack,
  addTrack,
  deleteTrack,
  listArtists
};