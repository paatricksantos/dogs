import Feed from '../../components/Feed';
import Head from '../../helper/Head';
function Home() {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos."
      />
      <Feed />
    </section>
  );
}

export default Home;
