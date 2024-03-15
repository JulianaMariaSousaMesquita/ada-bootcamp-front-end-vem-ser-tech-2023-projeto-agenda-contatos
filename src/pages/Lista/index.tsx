import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatares/avatar";
import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button";
import { CardContato } from "@/components/CardContato";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const Lista = () => {
  const [contatos, setContatos] = useState([
    { id: '1', name: 'Dayana Mariano', tel: '(99)99999999', role: 'Desenvolvedor(a) de Software', photo: 'https://avatars.githubusercontent.com/u/81884987?v=4' },
    { id: '2', name: 'Gabryel Machado', tel: '(99)99999999', role: 'Desenvolvedor(a) de Software', photo: 'https://avatars.githubusercontent.com/u/5809009?v=4' },
    { id: '3', name: 'Juliana Mesquita', tel: '(99)99999999', role: 'Desenvolvedor(a) de Software', photo: 'https://avatars.githubusercontent.com/u/60270373?v=4' },
    { id: '4', name: 'Rodrigo contantino', tel: '(99)99999999', role: 'Desenvolvedor(a) de Software', photo: 'https://avatars.githubusercontent.com/u/137124681?v=4' }
  ]);

  const deleteContact = (id: string) => {
    setContatos(contatos.filter(contato => contato.id !== id));
   
  };

  return (
    <div className="min-h-dvh flex flex-col justify-between text-gray-500">
      <div>
        <header className="flex items-center justify-around border-b-2 h-24">
          <img src="/Logo-contatinhos.png" className="w-32"/>
          <Input type="text" placeholder="Buscar" className="w-auto"/>
          <Dialog>
            <DialogTrigger className="bg-orange-600 hover:bg-purple-700 text-white text-sm p-3 rounded">Adicionar Contato</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar contato</DialogTitle>
                <DialogDescription>
                  Adicione aqui os dados dos seus contatinhos
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" value="" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="role" className="text-right">
                    Profissão
                  </Label>
                  <Input id="role" value="" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="tel" className="text-right">
                    Telefone
                  </Label>
                  <Input id="tel" value="" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="birth" className="text-right">
                    Aniversário
                  </Label>
                  <Input id="birth" type="date" value="" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button className="bg-orange-600 hover:bg-purple-700" type="submit">Salvar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <div className="flex items-center	">
            <p className="mr-2 text-violet-500">Thomas</p>
            <Avatar >
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex mx-14 flex-col">
          <h2 className="flex justify-center text-2xl m-2">Contatos</h2>
          {contatos.map(contato => (
            <CardContato
              key={contato.id}
              id={contato.id}
              name={contato.name}
              tel={contato.tel}
              role={contato.role}
              photo={contato.photo}
              onDelete={deleteContact}
            />
          ))}
        </main>
      </div>
      <footer className="flex justify-between m-2 text-xs	">
        <p >
          Feito pelo grupo 2 - Formação Front-end da Ada Tech 2024
        </p>
        <a
            href="https://github.com/Carlos-Gabryel/contatinhos-ADA"
            target="_blank"
          >
            <img
              src="/github.png"
              className="w-8"
            />
          </a>
      </footer>
    </div>
  )
}

export default Lista;