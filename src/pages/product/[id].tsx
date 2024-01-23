import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/src/styles/pages/product";

export default function Product() {
  return (
    <>
      <ProductContainer>
        <ImageContainer></ImageContainer>

        <ProductDetails>
          <h1>Camiseta X</h1>
          <span>RS 78.90</span>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            tempore dicta amet saepe quam voluptate distinctio eligendi dolor
            beatae neque.
          </p>

          <button>Comprar agora</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}
