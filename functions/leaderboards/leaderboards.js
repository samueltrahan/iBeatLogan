const faunadb = require('faunadb');
require('dotenv').config();

const getServerSecret = () => {
  if (process.env.NETLIFY_DEV === 'true') {
    return process.env.FAUNADB_SERVER_SECRET_QA;
  }

  return process.env.FAUNADB_SERVER_SECRET;
};

const faunaClient = new faunadb.Client({
  secret: getServerSecret(),
});

const q = faunadb.query;

exports.handler = async event => {
  // checks to ensure this request is a POST
  if (event.httpMethod !== 'GET') {
    return {
      body: 'Method Not Allowed. GET route only.',
      statusCode: 405,
    };
  }

  try {
    // gets the player data from the horse collection
    const horseData = await faunaClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('horse'))),
        q.Lambda(x => q.Get(x)),
      ),
    );

    // gets the player data from the twentyOne collection
    const twentyOneData = await faunaClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('twentyOne'))),
        q.Lambda(x => q.Get(x)),
      ),
    );

    // gets the player data from the oneOnOne collection
    const oneOnOneData = await faunaClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('oneOnOne'))),
        q.Lambda(x => q.Get(x)),
      ),
    );

    // maps for the just the player data and excludes unnecessary database data
    const horse = horseData.data.map(player => player.data);
    const twentyOne = twentyOneData.data.map(player => player.data);
    const oneOnOne = oneOnOneData.data.map(player => player.data);

    return {
      statusCode: 200,
      body: JSON.stringify({
        horse,
        oneOnOne,
        twentyOne,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
