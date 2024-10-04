import React from 'react';

const VenusPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Vênus: Um Planeta Jovem</h1>
            <img src="/images/venus.jpg" alt="Vênus" className="w-full max-w-md mb-4" />
            <p className="text-lg px-4 text-center">
                Velikovsky sugere que Vênus não é um corpo celeste estável, mas sim um planeta que passou por mudanças dramáticas, o que teria impactado a Terra.
            </p>
        </div>
    );
};