require('dotenv').config();

const TOKEN = process.env.JWT_TOKEN;
const channelId = process.env.CHANNEL_ID;

const getPointsLeaderboard = async () => {
  const URL = `https://api.streamelements.com/kappa/v2/points/${channelId}/top`;

  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `StreamElements API returned ${response.status}: ${await response.text()}`
    );
  }

  return response.json();
};

const getUserPoints = async (twitchUsername) => {
  const data = await getPointsLeaderboard();

  const user = data.users.find(
    (user) => user.username.toLowerCase() === twitchUsername.toLowerCase()
  );

  if (!user) {
    return null;
  }

  return user.points;
};

module.exports = {
  getPointsLeaderboard,
  getUserPoints,
};
