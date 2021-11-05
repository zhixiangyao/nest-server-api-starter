class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

class UpdateCatDto {}

class ListAllEntities {
  readonly limit: string;
}

export { CreateCatDto, UpdateCatDto, ListAllEntities };
