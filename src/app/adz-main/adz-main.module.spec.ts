import { AdzMainModule } from './adz-main.module';

describe('AdzMainModule', () => {
  let adzMainModule: AdzMainModule;

  beforeEach(() => {
    adzMainModule = new AdzMainModule();
  });

  it('should create an instance', () => {
    expect(adzMainModule).toBeTruthy();
  });
});
