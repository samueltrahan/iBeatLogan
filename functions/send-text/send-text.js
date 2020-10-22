const TwilioSdk = require('twilio');
const { GAME_TYPE_DISPLAY_NAME } = require('./constants');
// Your Account SID from www.twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID;
// Your Auth Token from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;
// instantiate twilio SDK
const twilio = new TwilioSdk(accountSid, authToken);

// use twilio SDK to send text message https://www.twilio.com/docs/libraries/node
exports.handler = async (event, context, callback) => {
  const { gameType, name } = JSON.parse(event.body);

  const sms = {
    // to: process.env.LOGANS_PHONE_NUMBER,
    to: +13379099418,
    body: `${name} beat you in ${GAME_TYPE_DISPLAY_NAME[gameType]}!`,
    from: process.env.TWILIO_PHONE_NUMBER,
  };

  try {
    const message = await twilio.messages.create(sms);

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Text message successfully sent!',
        data: message,
      }),
    });
  } catch (error) {
    return callback(null, {
      statusCode: error.status,
      body: JSON.stringify({
        message: error.message,
        error,
      }),
    });
  }
};
