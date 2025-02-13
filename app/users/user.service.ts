import { IUpdateUser, IUser } from './user.dto';
import { UserRepository } from './user.repostiory';

export const getUserById = async (userId: string) => {
  const user = UserRepository.findOneBy({ _id: userId });
  return user;
};

export const createUser = async (data: IUser) => {
  const user = await UserRepository.create(data);
  user.active = true;
  return await UserRepository.save(user);
};

export const updateUser = async (userId: string, data: IUpdateUser) => {
  const user = await UserRepository.findOneBy({ _id: userId });
  // if (!user) {
  //   throw createHttpError(404, 'User not found with this user Id');
  // }
  await UserRepository.update(userId, data); // Updates user fields
  return await UserRepository.findOneBy({ _id: userId });
};

export const editUser = async (userId: string, data: Partial<IUpdateUser>) => {
  const user = await UserRepository.findOneBy({ _id: userId });
  // if (!user) {
  //   throw createHttpError(404, 'User not found with this user Id');
  // }
  await UserRepository.update(userId, data);
  return await UserRepository.findOneBy({ _id: userId });
};

export const deleteUser = async (userId: string) => {
  const result = await UserRepository.delete({ _id: userId });
  return result.affected ? true : false;
};

export const findUserByEmail = async (email: string) => {
  const user = await UserRepository.findOne({ where: { email } });
  return user;
};

//   export const getLoggedInUser = async (user: Express.User) => {
//     console.log(user);
//     return user;
//   };
