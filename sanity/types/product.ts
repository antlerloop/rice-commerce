export interface ProductImage {
  asset: {
    url: string;
  };
}

export interface Product {
  _id: string;
  name: string;
  brand: string;
  isFeatured: boolean;
  description: Array<{ children: Array<{ text: string }> }>; // Assuming description is rich text
  image: ProductImage | null;
  price: number;
  quantityType:
    | "Litres"
    | "Millilitres"
    | "Kilograms"
    | "Grams"
    | "Numbers"
    | "Dozens"; // Enums based on your schema
  quantityUnit: number;
  discount: number;
  discountType: "amount" | "percentage"; // Enums based on your schema
  category: "Laundry" | "Spices" | "Cleaning" | "Dairy"; // Enums based on your schema
}
