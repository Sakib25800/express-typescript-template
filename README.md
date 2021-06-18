# express-typescript-template

A template for typescript with node and express
# Features
* **Validation**: request validation using Joi
* **Logging**: using winston and morgan
* **Testing**: unit and integration testing using Jest 
* **Error** handling: central error handling system
* **Dependency** management: with NPM
* **Environment** variables: using dotenv
* **Security**: security HTTP headers using helmet 
* **CORS**: Cross-Origin-Resource-Sharing enabled using cors
* **Linting**: with ESLint and Prettier

# Project structure
<pre>

🌳 express-typescript-template
├── 📁 src
|  ├── 📄 startServer.ts
|  ├── 📄 index.ts
|  ├── 📁 config
|  |  ├── 📄 config.ts
|  |  ├── 📄 index.ts
|  |  ├── 📄 logger.ts
|  |  └── 📄 morgan.ts
|  ├── 📁 controllers
|  |  ├── 📄 auth.controller.ts
|  |  └── 📄 index.ts
|  ├── 📁 interfaces
|  |  ├── 📄 index.ts
|  |  └── 📄 User.ts
|  ├── 📁 middlewares
|  |  ├── 📄 errorHandler.ts
|  |  ├── 📄 index.ts
|  |  └── 📄 validate.ts
|  ├── 📁 routes
|  |  ├── 📄 auth.route.ts
|  |  └── 📄 index.ts
|  ├── 📁 services
|  ├── 📁 typings
|  ├── 📁 utils
|  |  ├── 📄 ApiError.ts
|  |  ├── 📄 catchAsync.ts
|  |  └── 📄 index.ts
|  └── 📁 validations
|     ├── 📄 index.ts
|     └── 📄 login.validation.ts
├── 📄 combined.log
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 README.md
└── 📄 tsconfig.json

</pre>
### Environment Variables
The environment variables can be found in the ```.env``` file. You can add more things e.g:
<pre>
# Port number
PORT=3000

# Postgres credentials
POSTGRES_USERNAME=user786
POSTGRES_PASSWORD=pass123

# JWT 
JWT_SECRET=thisisasecret
# Number of minutes until expire
JWT_ACCESS_EXPIRATION_MINUTES=30
# Number of days until expiration 
JWT_REFRESH_EXPIRATION_DAYS=30
</pre>

# Error handling 
All controllers should try to catch errors and forward them to the error handling function. Alternatively, use the ```catchAsync``` utility function which forwards the error for you.
The error handler middleware will send an error in the following format: 
```json
{
    "statusCode": 404,
    "messsage": "Resource not found"
}
```

# Validation 
All request data is validatd using Joi and should be passed to the ```validate(schema)``` function.
<br/>
All validation schemas are defined in the src/validations.
```javascript
import express from 'express';
import * as userValidation from '../validations';
import * as userController from '../controllers';

const router = Router();
router.get('/users), validate((userValidation.registerSchema), userController.register);
```

# Logging 
Import the logger from ```src/config/logger.ts```
<br/>
There are 6 different levels of logging
```javascript
import { logger } from '../config';

logger.error('message'); // level 0
logger.warn('message'); // level 1
logger.info('message'); // level 2
logger.http('message'); // level 3
logger.verbose('message'); // level 4
logger.debug('message'); // level 5
```