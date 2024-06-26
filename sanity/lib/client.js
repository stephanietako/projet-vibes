import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";
export const revalidate = 10;

// PAGES & PAGE ///////////////////////////
export async function getPages() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
        _id,
        _createdAt,
     title,
        "slug": slug.current,
    }`,
    {
      cache: "no-store",
    }
  );
}

export async function getPage(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
       _id,
       _createdAt,
   title,
       "slug":slug.current,
             content,

    }`,
    { slug },
    {
      cache: "no-store",
    }
  );
}

//PROJECTS & PROJECT //////////////////////
export async function getProjects() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
      name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
              "body": pt::text(body),
    }`,
    {
      cache: "no-store",
    }
  );
}

export async function getProject(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
   name,
        "image": image.asset->url,
        url,
      "slug":slug.current,
      content,
        "body": pt::text(body),
 
    }`,

    { slug },
    {
      cache: "no-store",
    }
  );
}

//PLUSPRODUCTSPAGES ////////////////////////////
export async function getDataPlusProductsPages() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "plusProduct"] [0...10] | order(_createdAt desc){
  _id,
      _createdAt,
      _type,
  name,
    "slug": slug.current,
         "coverImages": images[0].asset->url,
   body,
           content, 
     "ref": plus[]{
_ref,
    
  "plus": *[_type == 'plus' && references(^._id)][0...5]  {
    _id,
     _createdAt,
      _type,
    price,
    currency,
    name,
    "slug": slug.current,
     "coverImages": images[0].asset->url,
    "images": images[0].asset->url,
    content,
      
  }
    }
}`,
    {
      cache: "no-store",
    }
  );
}
////////////// plusProducts Single Page
export async function getDataPlusProductSlug(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "plusProduct" && slug.current == $slug][0] {
_id,
   _createdAt,
      _type,
  name,
    "slug": slug.current,
         "coverImages": images[0].asset->url,
           content, 
           "body": pt::text(body),
  "plus": *[_type == 'plus' && references(^._id)][0...100] | order(_createdAt desc) {
    _id,
    _createdAt,
      _type,
    price,
    currency,
    name,
    "slug": slug.current,
     "coverImages": images[0].asset->url,
    "images": images[0].asset->url,
    content,
    "body": pt::text(body),
      plus,
       "ref": plus[]{
_ref,
    }
  }
}`,
    { slug },
    {
      cache: "no-store",
    }
  );
}
//////plus single page (categories of plusProduct)
export async function getDataPlus(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "plus" && slug.current == $slug][0] {
      _id,
      _createdAt,
      _type,
      "coverImages": images[0].asset->url,
      images,
      price,
      name,
      "slug": slug.current,
      content,
   "body": pt::text(body),
      type,
    }`,
    { slug },
    {
      cache: "no-store",
    }
  );
}

//STARPRODUCTS //////////////////////
export async function getDataStarProductsPages() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "starProduct"] [0...4] | order(_createdAt asc){
  _id,
      _createdAt,
      _type,
  name,
    "slug": slug.current,
    "coverImages": images[0].asset->url,
   body,
    content, 
  "stars": *[_type == 'star' && references(^._id)][0...1]  {
    _id,
     _createdAt,
      _type,
    price,
    currency,
    name,
    "slug": slug.current,
     "coverImages": images[0].asset->url,
    "images": images[0].asset->url,
    content,
  "body": pt::text(body),
  }
    }`,
    {
      cache: "no-store",
    }
  );
}
////////////// starProducts Single Page
export async function getDataStarProductSlug(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "starProduct" && slug.current == $slug][0] {
_id,
   _createdAt,
      _type,
  name,
    "slug": slug.current,
         "coverImages": images[0].asset->url,
           content, 
             "body": pt::text(body),
  "stars": *[_type == 'star' && references(^._id)][0...100] | order(_createdAt desc) {
    _id,
    _createdAt,
      _type,
    price,
    currency,
    name,
    "slug": slug.current,
     "coverImages": images[0].asset->url,
    "images": images[0].asset->url,
    content,
      "body": pt::text(body),
  }
}`,
    { slug },
    {
      cache: "no-store",
    }
  );
}
//////star single page (categories of plusProduct)
export async function getDataStar(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "star" && slug.current == $slug][0] {
      _id,
      _createdAt,
      _type,
      "coverImages": images[0].asset->url,
      images,
      price,
      name,
      "slug": slug.current,
      content,
        "body": pt::text(body),
      type,
    }`,
    { slug },
    {
      cache: "no-store",
    }
  );
}
///////////// ALL PRODUCTS ////////////////////
export async function getDataProductsPages() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product"] | order(_createdAt desc){
  _id,
    _createdAt,
      _type,
  name,
    "slug": slug.current,
         "coverImages": images[0].asset->url,
  body,
           content,
  "categories": *[_type == 'category' && references(^._id)][0...100] | order(name asc)  {
    _id,
     _createdAt,
      _type,
    price,
    currency,
    name,
    "slug": slug.current,
     "coverImages": images[0].asset->url,
    "images": images[0].asset->url,
    content,
    "categories": categories[0]->name,
  }
}`,
    {
      cache: "no-store",
    }
  );
}
///////////////////
export async function getDataProducts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'product'][0...10] | order(_createdAt desc){
  _id,
   _createdAt,
      _type,
    price,
       currency,
    name,
    "slug":slug.current,
    "categoryName": category->name,
    "coverImages": images[0].asset->url,
 "images": images[0].asset->url,
body,
    content,
      "products": categories[]{
_ref,
  }
      
    }`,
    {
      cache: "no-store",
    }
  );
}
//// slug PRODUCT single page
export async function getDataProduct(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
_id,
   _createdAt,
      _type,
  name,
    "slug": slug.current,
         "coverImages": images[0].asset->url,
           content, 
              
  "categories": *[_type == 'category' && references(^._id)][0...100] | order(_createdAt desc) {
    _id,
    _createdAt,
      _type,
    price,
    currency,
    name,
    "slug": slug.current,
     "coverImages": images[0].asset->url,
    "images": images[0].asset->url,
    content,
      products,
       "ref": products[]{
_ref,
    }
  }
}`,
    { slug },
    {
      cache: "no-store",
    }
  );
}

////////////////////////////////////// CATEGORY
// produits par categories
export async function getProductsByCategories() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'category'][0...100] | order(_createdAt desc){
  _id,
    _createdAt,
      _type,
  name,
    price,
    currency,
    content,
    "slug": slug.current,
      "coverImages": images[0].asset->url,
    "images": images[0].asset->url,
  "productName": products[0]->name,
    products,
      "products": categories[]{
_ref,
  }
  }`,
    {
      cache: "no-store",
    }
  );
}
// produits par categories
export async function getCategories() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category"] | order(name asc) {
  _id,
       _createdAt,
      _type,
  name,
    "coverImages": images[0].asset->url,
  price,
   "slug": slug.current,
   content,
  "products": *[_type == 'product' && references(^._id)][0...10] | order(_createdAt desc){
    _id,
     _createdAt,
      _type,
    price,
    currency,
    name,
    "slug": slug.current,
     "coverImages": images[0].asset->url,
    "images": images[0].asset->url,
    content,
    categories,
    body,
      "products": categories[]{
_ref,
  }
  }
}`,
    {
      cache: "no-store",
    }
  );
}

export async function getBycategories() {
  return createClient(clientConfig).fetch(
    groq`  *[_type == "category"] [0...100] | order(name asc) {
_id,
 _createdAt,
      _type,
  name,
  content,
      "coverImages": images[0].asset->url,
    "images": images[0].asset->url,
  "productName": products[0]->name,
    products,
  "products": products[]{
_ref,
  }
}`,
    {
      cache: "no-store",
    }
  );
}
////////////////
export async function getCategory() {
  return createClient(clientConfig).fetch(
    groq` *[_type == "category"] {
 _createdAt,
      _type,
  _id,
  name,
 "coverImages": images[0].asset->url,
    "images": images[0].asset->url,

}`,
    {
      cache: "no-store",
    }
  );
}

//// slug CATEGORY single page
export async function getData(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category" && slug.current == $slug][0] {
      _id,
      _createdAt,
      _type,
      "coverImages": images[0].asset->url,
      images,
      price,
      name,
      "slug": slug.current,
      content,
        "body": pt::text(body),
      type,
    }`,
    { slug },
    {
      cache: "no-store",
    }
  );
}
//////////////////////////
export async function getDataFlowers() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && name == "Fleurs CBD"] [0...50]  {
  _id,
       _createdAt,
      _type,
  name,
    "slug": slug.current,
         "coverImages": images[0].asset->url,
           content, 
            "body": pt::text(body),    
  "categories": *[_type == 'category' && references(^._id)][0...30] | order(name asc) {
    _id,
     _createdAt,
      _type,
    price,
    currency,
    name,
    "slug": slug.current,
     "coverImages": images[0].asset->url,
    "images": images[0].asset->url,
    content,
      products,
       "ref": products[]{
_ref,
    }
  }
}`,
    {
      cache: "no-cache",
    }
  );
}
//////////////////////////
export async function getDataAccessoires() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "plus" && type == "accessoires"] {
  _id,
  _createdAt,
  _type,
  name,
  "slug": slug.current,
  "coverImages": images[0].asset->url,
  content, 
  body 
}`,
    {
      cache: "no-cache",
    }
  );
}

///////////////////////////////
export async function getAll() {
  return createClient(clientConfig).fetch(
    groq` *[_type in ['product', 'category' ]  ] | order(_createdAt desc){
  _id,
      _createdAt,
    _type,
  name,
    price,
        currency,
     "slug":slug.current,
  "images": images[0].asset->url,
 body,
     content,
         price,
     currency,
       "refProducts": products[]{
 _ref,
          "refCategories": categories[]{
_ref,
  }
     }
     }`,
    {
      cache: "no-store",
    }
  );
}

/////////////////
// *[_type in ['product', 'category'] && (
//   _type match "product" + "*" || _type match "category" + "*"
// ) && !(_id in path('drafts.**'))] | order(name asc){
// _id,
//    _createdAt,
//   _type,
//   name,
//   currency,
//   price,
//   "slug": slug.current,
//   "coverImages": images[0].asset->url,
//   "images": images[0].asset->url,
//   content,
//    "refprod": products[] {
//     _ref,
//     "refcat": categories[] {
//       _ref
//     }
// }

// }
//////////////////////////
// *[_type in ['product', 'category' ]  ] | order(name asc){
//   _id,
//     price,
//        currency,
//     name,
//     "slug":slug.current,
//  type,
//     "coverImages": images[0].asset->url,
//  "images": images[0].asset->url,
// body,
//     content,
//         price,
//     currency,
//       "refProducts": products[]{
// _ref,
//          "refCategories": categories[]{
// _ref,
//   }
//     }
//     }
//////////////////////////
// export async function getDataFlowersSlug(slug) {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "category" && name == "Orange"]{
//     _createdAt,
//   _id,
//   name,
//       type,
//    "coverImages": images[0].asset->url,
//     "images": images[0].asset->url,
//            price,
//     currency,
//     content,
// }`,
//     { slug },
//     {
//       cache: "no-cache",
//     }
//   );
// }
///////////////
// *[_type == "product" && name == "fleurs"]{
//     _createdAt,
//   _id,
//   name,

//    "coverImages": images[0].asset->url,
//     "images": images[0].asset->url,
//            price,
//     currency,
//     content,
//   "categories": categories[]{
// _ref,

// }

// }
//////////////////////
// *[_type == "category"] | order(name asc){
//   _id,
//       _createdAt,
//   name,
//     "coverImages": images[0].asset->url,
//   price,
//    "slug": slug.current,
//      "productsRef": products[]{
// _ref,
//   "products": *[_type == 'product' && references(^._id)][0...25] | order(name asc){
//     _id,
//     price,
//     currency,
//     name,
//     "slug": slug.current,
//      "coverImages": images[0].asset->url,
//     "images": images[0].asset->url,
//     content,
//     categories,

//   }
// }
// }
//////////////
// export async function getDataProductSingle(slug) {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "product" && slug.current == "$slug"][0]{
//  _id,
//    _createdAt,
//       name,
//     "coverImages": images[0].asset->url,

//     "slug": slug.current,
//    content,
//        body,
//   "categories": *[_type == 'category' && references(^._id)][0...20] | order(name asc) {
//     _id,
//     price,
//     currency,
//     name,
//     "slug": slug.current,
//      "coverImages": images[0].asset->url,
//     "images": images[0].asset->url,
//     content,
//       products,
//        "ref": products[]{
// _ref,
//     }
//     }
// }`,
//     { slug },
//     {
//       cache: "no-store",
//     }
//   );
// }
////////////
// *[_type == 'product' && "orange" in categories[]->slug.current ]{
//   _id,
//     name,
//      "categoriesName": categories[0]->name,
//     "categoriesPrice": categories[0]->price,
//   "categoriesImages": categories[0]->images,
//         currency,
//         content,
//         "coverImages": images[0].asset->url,
//     "images": images[0].asset->url,
//          body,

// }
