import Layout from './components/layout';

const HomePage = () => {
    return (
        <Layout>
            <header>
                <h1 className="text-3xl font-bold text-center">Worlds in Collision</h1>
            </header>
            <main>
                <div className="text-center">
                    <h2 className="text-xl font-bold">Vênus como um Planeta Jovem</h2>
                    <img
                        src="/images/venus.png"
                        alt="Vênus"
                        width="600"
                        height="400"
                        className="rounded-lg"
                    />
                </div>
            </main>

        </Layout>
    );
};

export default HomePage;