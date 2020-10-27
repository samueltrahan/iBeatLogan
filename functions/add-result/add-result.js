const faunadb = require('faunadb');
require('dotenv').config();

const getServerSecret = () => {
  if (process.env.NETLIFY_DEV === 'true') {
    return process.env.FAUNADB_SERVER_SECRET_QA;
  }

  return process.env.FAUNADB_SERVER_SECRET_QA;
};

const faunaClient = new faunadb.Client({
  secret: getServerSecret(),
});

const q = faunadb.query;

exports.handler = async event => {
  // checks to ensure this request is a POST
  if (event.httpMethod !== 'POST') {
    return {
      body: 'Method Not Allowed. POST route only.',
      statusCode: 405,
    };
  }

  try {
    // parses the request body
    const { amount, gameType, name } = JSON.parse(event.body);

    // gets the current wins of the player
    const { data: winsData } = await faunaClient.query(
      q.Get(q.Match(q.Index(`${gameType}_wins_by_name`), name)),
    );

    const { wins } = winsData;

    // calculates the new number of wins
    const updatedWins = wins + (Number(amount) || 1);

    // updates the user's document in the proper gameType collection
    const { data: updatedData } = await faunaClient.query(
      q.Update(
        q.Select(['ref'], q.Get(q.Match(q.Index(`${gameType}_by_name`), name))),
        {
          data: {
            wins: updatedWins,
          },
        },
      ),
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ ...updatedData, gameType }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
