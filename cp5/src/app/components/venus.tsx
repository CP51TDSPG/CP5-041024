
import Image from 'next/image';

const Venus = () => {
    return (
        <div className="text-center">
            <h2 className="text-xl font-bold">Vênus como um Planeta Jovem</h2>
            <p>
                Velikovsky argumenta que Vênus não é um corpo celeste estável e inalterado. Ele sugere que Vênus, na verdade, é um planeta
                relativamente "jovem", que passou por mudanças cataclísmicas em sua história recente.
                As teorias de Velikovsky sobre Vênus e outros planetas têm sido amplamente criticadas e rejeitadas pela comunidade
                científica. Contudo, sua obra provocou discussões sobre a natureza do nosso sistema solar e a história da Terra.
                O livro "Worlds in Collision" continua a ser lido e debatido por aqueles que estão interessados em teorias alternativas
                e na interseção entre ciência, história e mitologia.</p>

            <Image
                src="/images/venus.png"
                alt="Vênus"
                width={600}
                height={400}
                className="rounded-lg"
            />
        </div>
    );
};

export default Venus;
