import { auth } from 'express-oauth2-jwt-bearer';

const checkJwtMiddleware = (req, res, next) => {
  const jwtCheck = auth({
    audience: 'https://api.hungerjam.com',
    issuerBaseURL: 'https://dev-dcmv0zppvfsfhgpb.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });

  // Call the `auth` function and handle errors
  jwtCheck(req, res, (err) => {
    if (err) {
      console.error('JWT validation failed:', err.message);
      return res.status(401).json({ error: 'Unauthorized access' });
    }
    next(); // Proceed to the next middleware or route
  });
};

export default checkJwtMiddleware;
