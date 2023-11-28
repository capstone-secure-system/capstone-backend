import { CooldownGuard } from './cooldown.guard';

describe('CooldownGuard', () => {
  it('should be defined', () => {
    expect(new CooldownGuard()).toBeDefined();
  });
});
