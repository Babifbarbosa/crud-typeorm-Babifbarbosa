import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column({ default: "now()" })
  created_at: Date;

  @Column({ default: "now()" })
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
