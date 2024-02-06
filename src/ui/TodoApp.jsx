import Content from './partials/Content';
import Footer from './partials/Footer';
import Header from './partials/Header';

export default function TodoApp() {
  return (
    <div className="h-[100dvh] flex flex-col">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
