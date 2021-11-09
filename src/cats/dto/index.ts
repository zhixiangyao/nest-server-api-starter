// Data transfer object

export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export class UpdateCatDto {}

export class ListAllEntities {
  readonly limit: string;
}
