import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetDto } from './create-pet.dto';

@Injectable()
export class PetsService {
  private pets = [];

  findAll() {
    return this.pets;
  }

  findOne(id: string) {
    const pet = this.pets.find((pet) => pet.id === id);
    if (!pet) {
      throw new NotFoundException(`Pet with ID "${id}" not found`);
    }
    return pet;
  }

  createPet(createPetDto: CreatePetDto) {
    const newPet = {
      ...createPetDto,
      id: Date.now().toString(),
      tricks: [],
    };
    this.pets.push(newPet);
    return newPet;
  }

  update(id: string, updatePetDto: Partial<CreatePetDto>) {
    const pet = this.findOne(id);
    return Object.assign(pet, updatePetDto);
  }

  remove(id: string) {
    const index = this.pets.findIndex((pet) => pet.id === id);
    if (index === -1) {
      throw new NotFoundException(`Pet with ID "${id}" not found`);
    }
    return this.pets.splice(index, 1)[0];
  }
}
