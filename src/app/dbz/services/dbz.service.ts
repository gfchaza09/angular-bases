import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    { name: 'Krillin', power: 1000, id: uuid() },
    { name: 'Goku', power: 9500, id: uuid() },
    { name: 'Vegetta', power: 7500, id: uuid() },
  ];
  constructor() {}

  onAddCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
