import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class SolicitudBaja {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  _id: string;

  @Column('varchar', { unique: true })
  @Field(() => String)
  name: string;

  @Column('text', { nullable: true })
  @Field(() => String)
  documento_id: string;

  @Column('text', { nullable: true })
  @Field(() => String)
  proceso_id: string;

  @Column({ default: true }) // Por defecto, el estado es verdadero
  @Field(() => Boolean)
  estado: boolean;
}