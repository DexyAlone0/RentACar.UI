export class CreateCarRequest {
  name: string;
  caseTypeId: number;
  brandId: string;
  gearTypeId: string;
  countOfSeats: number;
  fuelTypeId: string;

  constructor(data: any) {
    this.name = data.name;
    this.caseTypeId = data.caseTypeId;
    this.brandId = data.brandId;
    this.gearTypeId = data.gearTypeId;
    this.fuelTypeId = data.fuelTypeId;
  }
}
