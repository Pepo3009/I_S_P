import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  _id: string;

  @Column('varchar', { unique: true })
  @Field(() => String)
  email: string;

  @Column('varchar', { unique: true })
  @Field(() => String)
  name: string;

  @Column('text', { nullable: true })
  @Field(() => String)
  password: string;

  @Column('text', { nullable: true })
  @Field(() => String)
  ciudadId: string;

  @Column('text', { nullable: true })
  @Field(() => String)
  roleId: string;

  @Column({ default: true }) // Por defecto, el estado es verdadero
  @Field(() => Boolean)
  estado: boolean;
}

