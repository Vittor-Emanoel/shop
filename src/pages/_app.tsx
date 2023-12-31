import type { AppProps } from "next/app";
import Image from "next/image";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src="./logo.svg" width={200} height={100} alt="ignite-shop" />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
