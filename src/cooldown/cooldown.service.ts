import { Injectable } from '@nestjs/common';

@Injectable()
export class CooldownService {
    private lastSnsTimeMap: Map<String,number> = new Map();

    setLastSnsTimeMap(endpoint: string): void {
        this.lastSnsTimeMap.set(endpoint,Date.now());
    }

    canSnsTrigger(endpoint: string,cooldown: number): boolean {
        const lastTime = this.lastSnsTimeMap.get(endpoint) || 0;
        return  Date.now() - lastTime > cooldown;
    }
}
