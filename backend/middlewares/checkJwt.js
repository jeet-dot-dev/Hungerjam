import { auth } from 'express-oauth2-jwt-bearer';

const checkJwtMiddleware = (req, res, next) => {
  const checkJwt = auth({
    audience: 'https://api.hungerjam.com',
    issuerBaseURL: 'https://dev-vmhvceggr7jk1uzx.us.auth0.com/',
    tokenSigningAlg: 'RS256',
  });

  // Call the `auth` function and handle errors
  checkJwt(req, res, (err) => {
    if (err) {
      console.error('JWT validation failed:', err.message);
      return res.status(401).json({ error: 'Unauthorized access' });
    }
    next(); // Proceed to the next middleware or route
  });
};

export default checkJwtMiddleware;
