export function canExecuteFastAttack(knightIsAwake) {
  return knightIsAwake === false;
}
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake === true ||
         archerIsAwake === true ||
         prisonerIsAwake === true;
}
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return archerIsAwake === false && prisonerIsAwake === true;
}
export function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
  if (petDogIsPresent === true) {
    return archerIsAwake === false;
  }
  return prisonerIsAwake === true &&
         knightIsAwake === false &&
         archerIsAwake === false;
}