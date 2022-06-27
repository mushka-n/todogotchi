import { makeAutoObservable } from "mobx";

export default class PetStore {
  constructor() {
    this.petStatus = {
      health: 100,
      hunger: 69,
      happiness: 80,
    };
    makeAutoObservable(this);
  }

  setPetStatus = (petStatus) => {
    this.petStatus.health = petStatus.health || this.petStatus.health;
    this.petStatus.hunger = petStatus.hunger || this.petStatus.hunger;
    this.petStatus.happiness = petStatus.happiness || this.petStatus.happiness;
  };
}
