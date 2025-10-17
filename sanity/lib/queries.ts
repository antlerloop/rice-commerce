// lib/queries.js

export const productQuery = `
  *[_type == "product"] {
    _id,
    name,
    brand,
    description,
    image {
      asset -> {
        url
      }
    },
    price,
    quantityType,
    quantityUnit,
    discount,
    discountType,
    category
  }
`;
