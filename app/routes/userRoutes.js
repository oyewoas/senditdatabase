import { createUser, loginUser, deleteUser, 
  getAllUsers, getSingleUser,
} from '../controller/usersController';
import verifyAuth from '../middlewares/verifyAuth';

export default function route(app) {
  app.post('/api/v1/user/signup', createUser);

  app.post('/api/v1/user/login', loginUser);

  app.delete('/api/v1/user/me', verifyAuth, deleteUser);

  // app.get('/api/v1/user/:user_id', verifyAuth, getSingleUser);

  app.get('/api/v1/users', getAllUsers);


  
  // app.get('/api/v1/user/profile', verifyAuth, getProfile);
  
  // app.put('/api/v1/user/profile', verifyAuth, updateProfile);
  
  // app.put('/api/v1/user/updatename', checkAuth, updateName);
}
