import { Accordion, Button, Input } from "../../ui";

const Documents = () => (
  <Accordion title="Documentos">
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <Input
          multiline
          uppercase
          label="Notas Rápidas"
          className="bg-gray-100"
        />
        <Button
          className="w-32 bg-secondary text-white font-bold mt-8"
          title="Guardar"
        />
      </div>
      <div className="col-span-1">
        <div className="mt-9 flex items-center justify-center text-center border-dashed border-2 border-gray-300 p-6 mb-4 space-x-2">
          <PaperclipIcon className="h-6 w-6 text-gray-500" />
          <div>
            <p className="text-gray-500">Agregar archivos</p>
            <p className="text-sm text-gray-400">
              (pdf, jpg, png, máximo 20 mb)
            </p>
          </div>
        </div>
        <Button
          className="w-32 bg-secondary text-white font-bold mt-8"
          title="Agregar"
        />
      </div>
    </div>
    <div className="grid grid-cols-3 gap-8 mt-8">
      <div className="bg-gray-100 p-4">
        <h3 className="text-lg font-semibold mb-2">NOTA 1</h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim
        </p>
      </div>
      <div className="bg-gray-100 p-4">
        <h3 className="text-lg font-semibold mb-2">NOTA 2</h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim
        </p>
      </div>
      <div className="bg-gray-100 p-4 relative">
        <h3 className="text-lg font-semibold mb-2">NOTA 3</h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim
        </p>
        {/* <ChevronRightIcon className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600 h-6 w-6" /> */}
      </div>
    </div>
  </Accordion>
);

function PaperclipIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

export default Documents;
