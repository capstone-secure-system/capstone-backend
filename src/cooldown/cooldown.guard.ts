import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core'
import { CooldownService } from './cooldown.service';
import { ForbiddenException } from 'src/exception/ForbiddenException';
import { COOLDOWN_KEY } from './cooldown.decorator';

@Injectable()
export class CooldownGuard implements CanActivate {
  constructor(private cooldownService: CooldownService,private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const handler = context.getHandler();
    const cooldownMetadata = this.reflector.get<{ endpoint: string, cooltime: number }>(COOLDOWN_KEY, handler);

    if (!cooldownMetadata) {
      return true;
    }

    const { endpoint, cooltime } = cooldownMetadata;
    if (!this.cooldownService.canSnsTrigger(endpoint, cooltime * 1000)) {
      throw new ForbiddenException('Cooldown period has not elapsed.');
    }

    this.cooldownService.setLastSnsTimeMap(endpoint);
    return true;
  }
}
