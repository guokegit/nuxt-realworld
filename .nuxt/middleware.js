const middleware = {}

middleware['authenticate'] = require('../middleware/authenticate.js')
middleware['authenticate'] = middleware['authenticate'].default || middleware['authenticate']

middleware['hadAuthenticate'] = require('../middleware/hadAuthenticate.js')
middleware['hadAuthenticate'] = middleware['hadAuthenticate'].default || middleware['hadAuthenticate']

export default middleware
