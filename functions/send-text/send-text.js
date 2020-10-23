const TwilioSdk = require('twilio');
const { GAME_TYPE_DISPLAY_NAME, NAMES_DISPLAY_NAME } = require('./constants');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const twilio = new TwilioSdk(accountSid, authToken);

exports.handler = async (event, context, callback) => {
  const { gameType, name } = JSON.parse(event.body);

  const sms = {
    // to: process.env.LOGANS_PHONE_NUMBER,
    to: +13372771134,
    body: `${NAMES_DISPLAY_NAME[name]} beat you in ${GAME_TYPE_DISPLAY_NAME[gameType]}!`,
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
