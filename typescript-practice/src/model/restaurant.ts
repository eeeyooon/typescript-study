// 레스토랑 관련 타입 정의

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

//* 타입 안에 타입 지정 가능

export type Address = {
  city: string;
  detail: string;
  zipCode: Number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

export type AddressWithoutZip = Omit<Address, "zipCode">;
export type RestaurantOnlyCategory = Pick<Restaurant, "category">;

export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};

export type RestaurantResponse = ApiResponse<Restaurant>;
export type MenuResponse = ApiResponse<Menu>;
