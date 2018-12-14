export const errorParser = ({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    return graphQLErrors.map(err => {
      switch (err.extensions.code) {
        case 'UNAUTHENTICATED':
          err.statusCode = 401;
          break;
        case 'FORBIDDEN':
          err.statusCode = 403;
          break;
        default:
          break;
      }
      return err;
    });
  }
  return [networkError];
}