import getData from './api/getData';

export default async function Index() {
  const data = await getData();
  console.log(data);
  return (
    <div className="container">
      <div className="flex flex-col w-100 justify-center">
        <h2 className="text-2xl text-green-600">Hello Monorepo</h2>
        <div className="flex flex-row">
          <h2 className="uppercase">{data.message}</h2>
        </div>
      </div>
    </div>
  );
}
