import { SetMetadata } from '@nestjs/common';

export const COOLDOWN_KEY = 'cooldown';
export const Cooldown = (endpoint: string,cooltime: number) =>
    SetMetadata(COOLDOWN_KEY,{endpoint,cooltime});
