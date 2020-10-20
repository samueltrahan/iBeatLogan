const faunadb = require('faunadb');
require('dotenv').config();

const faunaClient = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});

const q = faunadb.query;

exports.handler = async () => {
  try {
    const req = await faunaClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('horse'))),
        q.Lambda(x => q.Get(x)),
      ),
    );

    const horse = req.data.map(player => player.data);

    return {
      statusCode: 200,
      body: JSON.stringify({ horse, oneOnOne: [], twentyOne: [] }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
