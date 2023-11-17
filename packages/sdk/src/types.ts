export declare type Maybe<T> = Partial<T> | null | undefined;

export type GetSnapsResponse = Record<string, Snap>;

export enum AeSnapStatus {
  NOT_SUPPORTED,
  NOT_INSTALLED,
  INSTALLED,
}

export type Snap = {
  permissionName: string;
  id: string;
  version: string;
  initialPermissions: Record<string, unknown>;
};
