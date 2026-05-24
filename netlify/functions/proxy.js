/**
 * Netlify Function - Proxy Handler
 * This function acts as a serverless proxy
 */

exports.handler = async (event, context) => {
  console.log('Proxy function called:', {
    httpMethod: event.httpMethod,
    path: event.path,
    queryStringParameters: event.queryStringParameters,
  });

  try {
    // Your proxy logic here
    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Proxy is working!',
        timestamp: new Date().toISOString(),
        method: event.httpMethod,
        path: event.path,
      }),
    };

    return response;
  } catch (error) {
    console.error('Proxy error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Proxy function error',
        message: error.message,
      }),
    };
  }
};
