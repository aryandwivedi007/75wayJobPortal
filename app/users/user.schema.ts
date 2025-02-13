import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IUser } from './user.dto';
import { Role } from '../common/dto/role.dto';
import bcrypt from 'bcrypt';
import { Candidate } from '../candidates/candidate.schema';

@Entity()
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: Role;
  @Column()
  active: boolean;

  @OneToMany(() => Candidate, (candidate) => candidate.user)
  candidates: Candidate[];

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 12);
    }
  }
}
