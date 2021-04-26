require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID } = process.env;

const plugins = [
  {
    options: {
      accessToken: ACCESS_TOKEN,
      spaceId: SPACE_ID,
    },
  },
];

module.exports = {
  plugins,
};
