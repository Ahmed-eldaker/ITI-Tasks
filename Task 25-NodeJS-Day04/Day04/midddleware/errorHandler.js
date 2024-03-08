function errorHandler(err, req, res, next) {
    res.status(500).json({
      status:"fail",
      error:err.message
    });
  }
  
  module.exports = errorHandler;