import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

export enum Role {
  User = "user",
  Moderator = "mod",
  Admin = "admin",
}

export enum UserStatus {
  Newbie = "newbie",
  User = "user",
  Admin = "admin",
}

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, type: "integer" })
  telegramId!: number;

  @Column({ default: 0.0, type: "real", nullable: false })
  balance!: number;

  /** Referral earnings (for withdrawal only). Separate from balance used for purchases. */
  @Column({ default: 0.0, type: "real", nullable: false })
  referralBalance!: number;

  @Column({ default: 0, nullable: false, type: "boolean" })
  isBanned!: boolean;

  @Column({ default: Role.User, type: "varchar", nullable: false })
  role!: Role;

  @Column({ default: UserStatus.Newbie, type: "varchar", nullable: false })
  status!: UserStatus;

  @Column({ nullable: true, type: "varchar" })
  lang!: "ru" | "en";

  @Column({ nullable: true, type: "integer" })
  referrerId!: number | null;

  /** Referral reward percentage for top-ups (0–100). Null = use default 5%. */
  @Column({ nullable: true, type: "real" })
  referralPercent!: number | null;

  /** Referral % for domain purchases. Null = use default 5%. */
  @Column({ nullable: true, type: "real" })
  referralPercentDomain!: number | null;

  /** Referral % for dedicated server purchases. Null = use default 5%. */
  @Column({ nullable: true, type: "real" })
  referralPercentDedicated!: number | null;

  /** Referral % for dedicated Standard. Null = use referralPercentDedicated or 5%. */
  @Column({ nullable: true, type: "real" })
  referralPercentDedicatedStandard!: number | null;

  /** Referral % for dedicated Offshore (abuse-resistant). Null = use referralPercentDedicated or 5%. */
  @Column({ nullable: true, type: "real" })
  referralPercentDedicatedOffshore!: number | null;

  /** Referral % for VPS/VDS purchases. Null = use default 5%. */
  @Column({ nullable: true, type: "real" })
  referralPercentVds!: number | null;

  /** Referral % for VDS Standard. Null = use referralPercentVds or 5%. */
  @Column({ nullable: true, type: "real" })
  referralPercentVdsStandard!: number | null;

  /** Referral % for VDS Offshore (abuse-resistant). Null = use referralPercentVds or 5%. */
  @Column({ nullable: true, type: "real" })
  referralPercentVdsOffshore!: number | null;

  /** Referral % for CDN purchases. Null = use default 5%. */
  @Column({ nullable: true, type: "real" })
  referralPercentCdn!: number | null;

  /** Prime subscription active until (null = not active). */
  @Column({ nullable: true, type: "datetime" })
  primeActiveUntil!: Date | null;

  /** Whether user has already used the free 7-day trial (via channel). */
  @Column({ default: false, type: "boolean", nullable: false })
  primeTrialUsed!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  lastUpdateAt!: Date;
}
