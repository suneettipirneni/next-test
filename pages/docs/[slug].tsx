export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Test() {
  return <div>Hello World</div>;
}
