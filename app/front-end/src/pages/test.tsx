export function getStaticProps() {
  return {
    props: {
      date: Date.now(),
    },
  };
}

// export function getServerSideProps() {
//     return {
//       props: {
//         date: Date.now(),
//       },
//     };
//   }

export default function Page({ date }: { date: string }) {
  return <p>{date}</p>;
}
