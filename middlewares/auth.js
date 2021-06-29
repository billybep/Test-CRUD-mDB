const authenticate = (req, res, next) => {
  
  const { access_token } = req.headers
  
  if (!access_token) res.status(400).json({ message: 'missing or invalid token' })
  else {
    next()
  }

}

module.exports = authenticate