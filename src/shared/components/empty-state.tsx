import Image from 'next/image';

type stateType = {
  value?: string;
  icon?: React.ReactNode;
  title?: string;
  message?: string;
};

export default function EmptyState({ value, title, icon, message }: stateType) {
  return (
    <div className="w-full flex flex-col items-center text-center dark:bg-primary-bg bg-zinc-100 border border-dashed dark:border-zinc-700 border-zinc-200 rounded-md px-6 py-8">
      <div className="mb-6 text-4xl text-zinc-500">
        {icon || (
          <Image
            width={80}
            height={80}
            src="/assets/images/searching-duck.gif"
            alt="Pato amarelo procurando"
          />
        )}
      </div>
      <h3 className="font-bold tracking-tight text-xl mb-3">
        {title ?? `Nenhum ${value} Encontrado`}
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 ml-4 max-w-sm">
        {message ??
          `Não há nenhum ${
            value && value.toLowerCase()
          } disponível no momento. Volte mais tarde.`}
      </p>
    </div>
  );
}
