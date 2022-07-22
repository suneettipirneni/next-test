import { ApiModel } from "@microsoft/api-extractor-model";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps() {
  const model = new ApiModel();
  return {
    props: {},
  };
}

export default function Test() {
  return <div>Hello World</div>;
}
