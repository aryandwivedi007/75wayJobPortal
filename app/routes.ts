import { Router } from 'express';
import userRoutes from './users/user.routes';
import jobRoutes from './job/job.routes';
import candidateRoutes from './candidates/candidate.route';
import authRouter from './common/auth/auth.routes';

const routers = Router();

routers.use('/users', userRoutes);
routers.use('/jobs', jobRoutes);
routers.use('/candidates', candidateRoutes);
routers.use('/auth', authRouter);
export default routers;
