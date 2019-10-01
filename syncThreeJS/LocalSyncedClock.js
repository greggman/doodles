export class LocalSyncedClock {
  constructor() {

  }
  getTime() {
    return Date.now() * 0.001;
  }
}