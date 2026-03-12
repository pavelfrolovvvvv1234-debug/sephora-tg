import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity()
export default class ReferralReward {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, type: "integer" })
  referrerId!: number;

  @Column({ nullable: false, type: "integer" })
  refereeId!: number;

  /** Source: topup | domain | dedicated | vds | cdn. Default topup for existing rows. */
  @Column({ nullable: false, type: "varchar", length: 20, default: "topup" })
  sourceType!: string;

  /** For topup: TopUp.id. For domain/dedicated/vds/cdn: ServiceInvoice.id or domain id for idempotency. */
  @Column({ nullable: true, type: "integer" })
  topUpId!: number | null;

  @Column({ nullable: true, type: "integer" })
  sourceId!: number | null;

  @Column({ nullable: false, type: "real" })
  amount!: number;

  @Column({ nullable: false, type: "real" })
  rewardAmount!: number;

  @CreateDateColumn()
  createdAt!: Date;
}
