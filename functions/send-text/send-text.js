const TwilioSdk = require('twilio');
const {
  GAME_TYPE_DISPLAY_NAME,
  MESSAGES,
  NAMES_DISPLAY_NAME,
} = require('./constants');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const logansNumber = process.env.LOGANS_PHONE_NUMBER;

const twilio = new TwilioSdk(accountSid, authToken);

const getRandomTrashtalk = () =>
  MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

const constructMessage = (name, gameType) => `${
  NAMES_DISPLAY_NAME[name]
} beat you in ${GAME_TYPE_DISPLAY_NAME[gameType]}. ${getRandomTrashtalk()}

Powered by iBeatLogan.com`;

exports.handler = async (event, context, callback) => {
  const { gameType, name } = JSON.parse(event.body);

  const sms = {
    to: logansNumber,
    body: constructMessage(name, gameType),
    from: twilioPhoneNumber,
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
