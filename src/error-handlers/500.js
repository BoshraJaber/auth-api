'use strict';

module.exports = (err, req, res, next) => {
  let error = { error: err.message || err };
  res.statusCode = err.status || 500;
  res.statusMessage = err.statusMessage || 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};



/*
  In this example, we directly export an anonymous function

  NOTE: this one has 4 parameters, which means Express knows intrinsically that it is for handling server errors

  Because we'll be building out an API that works with JSON, let's format
  our response as a JSON object
*/

// module.exports = function (err, req, res, next) {

//   // Sometimes, errors come in as an object, others as a string
//   const error = err.message ? err.message : err;

//   const errorObject = {
//     status: 500,
//     message: error
//   }
//   res.status(500).json(errorObject);
// }

