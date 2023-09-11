export interface Cat {
    id: string,
    name: string,
    breed: string,
    breedId: string,
    age: string,
    gender: string,
    img: string,
    location: GeoLocation,
}

export interface GeoLocation {
    lng: number,
    lat: number,
}

export interface Breed {

    id: string,
    reference_image_id: string,
    name: string,
    origin: string,
    description: string,
    life_span: string,
    child_friendly: number,
    dog_friendly: number,
    adaptability: number,
    energy_level: number,
    health_issues: number,
    intelligence: number,
}

export interface BreedImageData {
    url: string,
}

export interface AdoptApplication {
    firstName: string,
    lastName: string,
    phoneNumber: number,
    email: string,
    address: string,
}

export interface SearchParams{
    child_friendly : number,
    intelligence : number,
    dog_friendly : number,
}