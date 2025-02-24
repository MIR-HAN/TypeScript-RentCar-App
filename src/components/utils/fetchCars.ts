import { CarType } from "../../types";

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '787c0c2ac3mshc9deed78d6dc8c6p11906ajsnf29522c2c1a8',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};

type FilterType ={
    make?:string,
    model?:string,
    limit?:string,
    fuel_type?:string,
    year?:string
}

export async function fetchCars(paramsObj: FilterType): Promise<CarType[]> {

const {limit = "5", make="BMW", model="m5", fuel_type="", year="paramName"} = paramsObj;

    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla&limit=${limit}&make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}`;

    const response = await fetch(url, options);
    return await response.json();


}

