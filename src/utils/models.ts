export interface Cat{
    id ?: number,
    name ?: string,
    breed  ?: string,
    age ?: string,
    gender ?: string,
    img ?:string,
}

export interface Breed {
    
    id ?: string
    name ?: string
    origin ?: string
    description ?: string
    life_span ?: string
    child_friendly ?: number,
    dog_friendly ?: number,
    adaptability ?: number,
    energy_level ?: number,
    health_issues ?: number,
    intelligence ?:number,
}